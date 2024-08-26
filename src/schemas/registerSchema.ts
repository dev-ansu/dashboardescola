import {z} from "zod";

export const registerSchema = z.object({
    name: z.string().min(2, 'O campo deve ter no mínimo dois caracteres.'),
    email: z.string().min(1, 'Campo obrigatório.').email('Digite um e-mail válido.'),
    password: z.string().min(6, 'O campo deve ter no mínimo 6 caracteres.').regex(/[0-9]/, {message:"A senha deve conter pelo menos um número."}).regex(/[^A-Za-z0-9]/, {message:"A senha deve conter pelo menos um caractere especial."}),
});

export type RegisterData = z.infer<typeof registerSchema>;