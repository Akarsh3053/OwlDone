"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { createAuditLog } from "@/lib/create-audit-log";
import { CreateSafeActions } from "@/lib/create-safe-actions";
import { incrementAvailableCount, hasAvailableCount } from "@/lib/org-limit";

import { CreateBoard } from "./schema";
import { InputType, ReturnType } from "./types";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized Access",
    };
  }

  const canCreate = await hasAvailableCount();

  if (!canCreate) {
    return {
      error: "You have reached your free board limit. Please upgrade to create more."
    }
  }

  const { title, image } = data;

  const [imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName ] = image.split("|");
  
  if (!imageId || !imageThumbUrl || !imageFullUrl || !imageUserName || !imageLinkHTML) {
    return {
      error: "Missing fields. Failed to create board."
    };
  }

  let board;

  try {
    board = await db.board.create({
        data: {
          title,
          orgId,
          imageId,
          imageThumbUrl,
          imageFullUrl,
          imageUserName,
          imageLinkHTML,
        }
    });

    await incrementAvailableCount();

    await createAuditLog({
      entityTitle: board.title,
      entityId: board.id,
      entityType: ENTITY_TYPE.BOARD,
      action: ACTION.CREATE,
    });

  } catch (error) {
    return {
      error: "Failed to create board."
    }
  }

  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const createBoard = CreateSafeActions(CreateBoard, handler);

