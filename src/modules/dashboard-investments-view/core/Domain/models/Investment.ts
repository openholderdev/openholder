export type InvestmentStatus = 'LANDING' | 'IN_SALE' | 'IN_CONFIG' | 'IN_RENT' | 'SOLD_OUT';
export type FinancialData = {
  tokenPriceUSD: number;
  totalTokenUnits: number;
  rentabilityAnnualEstimate: number;
  monthlyRentEstimate: number; 
  totalInvestmentAmount: number; 
};


export type SoldStatus = {
  totalSoldUnits: number;
  totalUnits: number;
};
export type InvestmentType = 'REAL_ESTATE' | 'TRANSPORT' | 'ENERGY' | 'OTHER';
export interface UIInvestment {
  investmentId: string;
  tokenCode: string;
  nameProject:  string;
  galleryImages: string[];
  typeInvestment: InvestmentType;
  status: InvestmentStatus;
  inversionTime: number; 
  financial: FinancialData;
  initRentEstimate: Date;
  description: string;
  inversionPlan: string;
  soldStatus: null, // Implement V3
  inRentStatus: null, // Implement V3
  finalizedStatus: null, // Implement V3
  // Implement V3
  web3: { 
    smartContractAddress: string;
    createdAt: Date;
  }
}
