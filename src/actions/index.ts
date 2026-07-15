import { defineAction } from "astro:actions";
import { z } from "astro/zod";

export const server = {
    customerSupport: defineAction({
        accept: "form",
        input: z.object({
            name: z.string("Name is required"),
            email: z.email({
                error: (iss) => {
                    if (iss.code === "invalid_format") {
                        return "Provide a valid email address";
                    }
                    if (iss.code === "invalid_type") {
                        return "Email address required";
                    }
                },
            }),
            business: z.string("Business name is required"),
            message: z.string("Message is required"),
        }),
        handler: async (input) => {
            console.log(input);
            return {
                success: true,
                message: "We have received your message successfully",
            };
        },
    }),
};
