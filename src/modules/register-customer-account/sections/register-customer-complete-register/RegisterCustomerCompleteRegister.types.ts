import { z } from 'zod';

export const RegisterCustomerSchema = z.object({
  name: z.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre es demasiado largo'),
  
  password: z.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .regex(/[A-Z]/, 'Debe contener al menos una mayúscula')
    .regex(/[a-z]/, 'Debe contener al menos una minúscula')
    .regex(/[0-9]/, 'Debe contener al menos un número'),
  
  phone: z.string()
    .regex(/^\+?[0-9]{9,15}$/, 'Formato de teléfono inválido')
    .optional()
    .or(z.literal('')),
});

export type RegisterCustomerFormData = z.infer<typeof RegisterCustomerSchema>;
