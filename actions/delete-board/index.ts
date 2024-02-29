"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { CreateSafeActions } from "@/lib/create-safe-actions";

import { DeleteBoard } from "./schema";
import { redirect } from "next/navigation";
import { InputType, ReturnType } from "./types";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { createAuditLog } from "@/lib/create-audit-log";
import { decreaseAvailableCount } from "@/lib/org-limit";


const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { id } = data;
  let board;

  try {
    board = await db.board.delete({
      where: {
        id,
        orgId,
      }
    });

    await decreaseAvailableCount();

    await createAuditLog({
      entityTitle: board.title,
      entityId: board.id,
      entityType: ENTITY_TYPE.BOARD,
      action: ACTION.DELETE,
    });

  } catch (error) {
    return {
      error: "Failed to delete."
    }
  }

  revalidatePath(`/workspace/${orgId}`);
  redirect(`/workspace/${orgId}`);
};

export const deleteBoard = CreateSafeActions(DeleteBoard, handler);