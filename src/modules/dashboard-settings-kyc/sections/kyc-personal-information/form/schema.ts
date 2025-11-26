import { z } from "zod";

export const kycPersonalInformationSchema = z.object({
  firstName: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder 50 caracteres"),
  
  lastName: z
    .string()
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .max(50, "El apellido no puede exceder 50 caracteres"),
  
  gender: z.enum(["male", "female", "other"], {
    message: "Selecciona un sexo válido"
  }),
  
  identityDocument: z
    .string()
    .min(5, "El documento de identidad debe tener al menos 5 caracteres")
    .max(20, "El documento de identidad no puede exceder 20 caracteres"),
  
  dateOfBirth: z
    .string()
    .min(1, "La fecha de nacimiento es requerida")
    .refine((date) => {
      const birthDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= 18;
    }, "Debes ser mayor de 18 años"),
  
  phone: z
    .string()
    .min(9, "El teléfono debe tener al menos 9 dígitos")
    .max(15, "El teléfono no puede exceder 15 dígitos")
    .regex(/^\+?[0-9\s-]+$/, "Formato de teléfono inválido"),
  
  city: z
    .string()
    .min(2, "La ciudad debe tener al menos 2 caracteres")
    .max(100, "La ciudad no puede exceder 100 caracteres"),
  
  bornCountry: z
    .string()
    .min(2, "La nacionalidad es requerida")
    .max(100, "La nacionalidad no puede exceder 100 caracteres"),
  
  address: z
    .string()
    .min(5, "La dirección debe tener al menos 5 caracteres")
    .max(200, "La dirección no puede exceder 200 caracteres"),
  postalCode: z
    .string()
    .min(4, "El código postal debe tener al menos 4 caracteres")
    .max(10, "El código postal no puede exceder 10 caracteres")
    .regex(/^[0-9A-Z\s-]+$/, "Formato de código postal inválido"),
  
  countryOfResidence: z
    .string()
    .min(2, "El país de residencia es requerido")
    .max(100, "El país de residencia no puede exceder 100 caracteres")
});

export type KycFormData = z.infer<typeof kycPersonalInformationSchema>;
