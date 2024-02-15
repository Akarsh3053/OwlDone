"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
    errors?: {
        title?: string[];
    },
    message?: string | null;
}

const titleValidator = z.object({
    title: z.string().min(3, {
        message: "Title should be 3 letters at least!"
    })
});

export async function CreateBoard(prevState:State, formData: FormData) {
    const validInput = titleValidator.safeParse({
        title: formData.get("title"),
    });

    if (!validInput.success) {
        return {
            errors: validInput.error.flatten().fieldErrors,
            message: "Invalid Input!"
        }
    }

    const { title } = validInput.data;

    try {
        await db.board.create({
            data: {
                title,
            }
        });
    } catch(error) {
        return {
            message: "Operation Failed",
        }
    }

    revalidatePath("/workspace/org_2cGSDfQ1uDPGmrkOLrJ3Ua4PmIq");
    redirect("/workspace/org_2cGSDfQ1uDPGmrkOLrJ3Ua4PmIq");
};