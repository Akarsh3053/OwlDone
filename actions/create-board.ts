"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

const titleValidator = z.object({
    title: z.string(),
});

export async function createBoard(formData: FormData) {
    const { title } = titleValidator.parse({
        title: formData.get("title"),
    });

    await db.board.create({
        data: {
            title,
        }
    });

    revalidatePath("/workspace/org_2cGSDfQ1uDPGmrkOLrJ3Ua4PmIq");
};