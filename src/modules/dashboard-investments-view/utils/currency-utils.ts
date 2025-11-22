export const formatEuropeanNumber = (num: number): string => 
  new Intl.NumberFormat('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(num) + " $";
