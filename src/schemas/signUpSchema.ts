import {z} from "zod";

export const usernameValidation=z
.string()
.min(2,"Username must be atleast 2 characters")
.max(20,"Username must not be more then 20")
.regex(/^[a-zA-Z0-9_-]{3,16}$/,"Username must not contain special character")

export const signUpSchema=z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid email"})
})