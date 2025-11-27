import { z } from "zod";

export const kycFinancialInformationSchema = z.object({
  isNewInvestor: z.string(),
  knowSecurityToken: z.string(),
  knowRisksInvesting: z.string(),
  investmentTotalPercentage: z.string(),
  investmentCapitalOrigin: z.string(),
  periodicalPatrimonyOrigin: z.string().min(1, "El origen del patrimonio es requerido"),
  timeHorizonInvestment: z.string().min(1, "El horizonte temporal es requerido"),
  levelOfRiskAcceptance: z.string().min(1, "Selecciona un nivel de riesgo"),
  investementObjectives: z.string().min(1, "Selecciona un objetivo de inversión"),
  studiesLevel: z.string().min(1, "Selecciona un nivel de estudios"),
  profesion: z.string().min(1, "La profesión es requerida"),
  anualIncome: z.string().min(1, "Los ingresos anuales son requeridos"),
});

export type KycFinancialData = z.infer<typeof kycFinancialInformationSchema>;
