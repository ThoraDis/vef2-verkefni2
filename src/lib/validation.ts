import { z } from 'zod';

export const TodoItemSchema = z.object({
    title: z.string().min(1).max(255),
    finished: z.preprocess(val=> val ==='true',z.boolean()).default(false),
})

export type TodoItem = z.infer<typeof TodoItemSchema>