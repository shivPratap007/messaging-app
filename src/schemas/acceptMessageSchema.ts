import {z} from "zod";

export const acceptMeessageSchema=z.object({
    acceptMessage:z.boolean(),
})