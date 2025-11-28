import { z } from "zod";

export const buyTokenSchema = z.object({
  amountTokens: z.coerce.number()
    .min(1, "Debes comprar al menos 1 token")
    .positive("La cantidad debe ser positiva"),
  amountUsdt: z.coerce.number()
    .min(1, "El monto mínimo es 1 USDT")
    .positive("El monto debe ser positivo"),
  confirmWhitepaper: z.boolean()
    .refine(val => val === true, "Debes leer y aceptar el whitepaper"),
  subscriptionToken: z.boolean()
    .refine(val => val === true, "Debes aceptar la suscripción del token")
});

export type BuyTokenFormData = z.infer<typeof buyTokenSchema>;
