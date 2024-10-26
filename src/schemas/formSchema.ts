// src/schemas/formSchema.js
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  dropdownField: z.enum(["Option 1", "Option 2", "Option 3"], {
    required_error: "Please select an option",
  }),
  ethereum: z.string().email("Invalid ethereum address"),
    password: z.string().email("Invalid password"),
});

export default formSchema;
