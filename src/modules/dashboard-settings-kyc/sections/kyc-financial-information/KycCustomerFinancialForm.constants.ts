export interface FinancialFormField {
  registerKey: string;
  label: string;
  type: 'text' | 'checkbox';
  options?: { label: string; value: string }[];
}

export const FINANCIAL_FORM: FinancialFormField[] = [
  {
    registerKey: "isNewInvestor",
    label: "¿Eres un nuevo inversor?",
    type: "checkbox",
    options: [
      { label: "Sí", value: "true" },
      { label: "No", value: "false" }
    ]
  },
  {
    registerKey: "knowSecurityToken",
    label: "¿Conoces lo que es un security token y los riesgos que la inversión en los mismos conlleva?",
    type: "checkbox",
    options: [
      { label: "Sí", value: "true" },
      { label: "No", value: "false" }
    ]
  },
  {
    registerKey: "knowRisksInvesting",
    label: "¿Sabes que invirtiendo en empresas no cotizadas puedes perder hasta el 100% de tu inversión?",
    type: "checkbox",
    options: [
      { label: "Sí", value: "true" },
      { label: "No", value: "false" }
    ]
  },
  {
    registerKey: "investmentTotalPercentage",
    label: "¿Sabes que invirtiendo en empresas no cotizadas puedes perder hasta el 100% de tu inversión?",
    type: "checkbox",
    options: [
      { label: "Menos del 25%", value: "25" },
      { label: "Entre el 25% y el 50%", value: "50" },
      { label: "Entre el 50% y el 75%", value: "75" },
      { label: "Más del 75%", value: "100" },
    ]
  },
  {
    registerKey: "investmentCapitalOrigin",
    label: "¿Cual es el origen del capital que quieres invertir o reinvertir en este tipo de productos?",
    type: "checkbox",
    options: [
      { label: "No tengo ingresos periodicos", value: 'NO_PERIODICAL' },
      { label: "Prestación por jubilación", value: 'RETIREMENT_PENSION' },
      { label: "Actividad laboral", value: 'WORK_ACTIVITY' },
      { label: "Rentas de bienes e inmuebles en propiedad", value: 'RENTAL_INCOME' },
      { label: "Rendimientos de inversiones financieras", value: 'FINANCIAL_INVESTMENT_INCOME' },
    ]
  },
  {
    registerKey: "timeHorizonInvestment",
    label: "¿Cuál es el horizonte temporal de tu inversión?",
    type: "checkbox",
    options: [
      { label: "Menos de 6 meses", value: '6' },
      { label: "Entre 6 meses y 2 años", value: '12' },
      { label: "Entre 2 y 5 años", value: '60' },
      { label: "Más de 5 años", value: '100' },
    ]
  },
  {
    registerKey: "periodicalPatrimonyOrigin",
    label: "¿Cual es el origen de la mayor parte de tus ingresos periodicos?",
    type: "checkbox",
    options: [
      { label: "No tengo ingresos periodicos", value: 'NO_PERIODICAL' },
      { label: "Prestación por jubilación", value: 'RETIREMENT_PENSION' },
      { label: "Actividad laboral", value: 'WORK_ACTIVITY' },
      { label: "Rentas de bienes e inmuebles en propiedad", value: 'RENTAL_INCOME' },
      { label: "Rendimientos de inversiones financieras", value: 'FINANCIAL_INVESTMENT_INCOME' },
    ]
  },
  {
    registerKey: "levelOfRiskAcceptance",
    label: "¿Que fluctuaciones de tu inversión estás dispuesto a asumir?",
    type: "checkbox",
    options: [
      { label: "Mi objetivo es preservar el capital invertido y no estoy dispuesto a asumir riesgos", value: "1" },
      { label: "Estoy dispuesto a asumir fluctuaciones moderadas de mi capital invertido", value: "2" },
      { label: "Estoy dispuesto a asumir fluctuacines elevadas de mi capital invertido", value: "3" },
    ]
  },
  {
    registerKey: "investementObjectives",
    label: "¿Qué objetivos persigues al realizar la inversión?",
    type: "checkbox",
    options: [
      { label: "Preservar el capital", value: "0" },
      { label: "Crecimiento medio del capital, asumiendo riesgo moderado", value: "1" },
      { label: "Aprovechar las oportunidades del mercado asumiendo riesgo", value: "2" },
      { label: "Crecimiento fuerte de capital asumiendo fuertes riesgos", value: "3" },
    ]
  },
  {
    registerKey: "studiesLevel",
    label: "Nivel de estudios",
    type: "checkbox",
    options: [
      { label: "No tengo estudios", value: "0" },
      { label: "Estudios básicos", value: "1" },
      { label: "Estudios superiores", value: "2" },
      { label: "Estudios superiores o postgrado en materia financiera", value: "3" },
    ]
  },
  {
    registerKey: "profesion",
    label: "Profesión",
    type: "text",
  },
  {
    registerKey: "anualIncome",
    label: "Ingresos anuales",
    type: "text",
  },
]

