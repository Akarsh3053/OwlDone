"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { InputType, ReturnType } from "./types";
import { CreateSafeActions } from "@/lib/create-safe-actions";
import { CreateBoard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: "Unauthorized Access",
    };
  }

  const { title } = data;

  let board;

  try {
    board = await db.board.create({
        data: {
          title,
        }
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

