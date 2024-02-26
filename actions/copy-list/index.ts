"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { CreateSafeActions } from "@/lib/create-safe-actions";

import { CopyList } from "./schema";
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
    const targetList = await db.list.findUnique({
      where: {
        id,
        boardId,
        board: {
          orgId,
        },
      },
      include: {
        cards: true,
      },
    });

    if (!targetList) {
      return {error: "List does not exists!"}
    }

    const lastList = await db.list.findFirst({
      where: {boardId},
      orderBy: {order: "desc"},
      select: {order: true},
    });

    const newOrder = lastList ? lastList.order + 1 : 1;

    list = await db.list.create({
      data: {
        boardId: targetList.boardId,
        title: `${targetList.title} - Copy`,
        order: newOrder,
        cards: {
          createMany: {
            data: targetList.cards.map((card) => ({
              title: card.title,
              description: card.description,
              order: card.order,
            })),
          },
        },
      },
      include: {
        cards: true,
      },
    });
  } catch (error) {
    return {
      error: "Failed to copy!"
    }
  }

  revalidatePath(`/board/${boardId}`);
  return { data: list };
};

export const copyList = CreateSafeActions(CopyList, handler);