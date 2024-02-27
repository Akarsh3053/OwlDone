import { z } from "zod";

export const CreateCard = z.object({
  title: z.string({
    required_error: "Title is required!",
    invalid_type_error: "Invalid title!",
  }).min(1, {
    message: "Title is too short",
  }),
  boardId: z.string(),
  listId: z.string()
});