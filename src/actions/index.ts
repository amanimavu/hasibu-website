import { defineAction } from "astro:actions";
import { z } from "astro/zod";

export const server = {
    customerSupport: defineAction({
        accept: "form",
        input: z.object({
            name: z.string(),
            email: z.email(),
            business_name: z.string(),
            message: z.string(),
        }),
        handler: async (input) => {
            console.log(input);
        },
    }),
};
