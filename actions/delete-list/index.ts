"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { CreateSafeActions } from "@/lib/create-safe-actions";

import { DeleteList } from "./schema";
import { InputType, ReturnType } from "./types";


const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { id, boardId } = data;
  let list;

  try {
    list = await db.list.delete({
      where: {
        id,
        boardId,
        board: {
          orgId,
        },
      },
    });
  } catch (error) {
    return {
      error: "Failed to delete."
    }
  }

  revalidatePath(`/board/${boardId}`);
  return { data: list };
};

export const deleteList = CreateSafeActions(DeleteList, handler);