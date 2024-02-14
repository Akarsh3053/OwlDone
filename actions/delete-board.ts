"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";

export async function DeleteBoard(id: string) {
    await db.board.delete({
        where: {
            id
        }
    });

    revalidatePath("/workspace/org_2cGSDfQ1uDPGmrkOLrJ3Ua4PmIq");
}