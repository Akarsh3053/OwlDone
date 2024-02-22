"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { CreateSafeActions } from "@/lib/create-safe-actions";

import { DeleteBoard } from "./schema";
import { InputType, ReturnType } from "./types";
import { redirect } from "next/navigation";


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
  } catch (error) {
    return {
      error: "Failed to delete."
    }
  }

  revalidatePath(`/workspace/${orgId}`);
  redirect(`/workspace/${orgId}`);
};

export const deleteBoard = CreateSafeActions(DeleteBoard, handler);