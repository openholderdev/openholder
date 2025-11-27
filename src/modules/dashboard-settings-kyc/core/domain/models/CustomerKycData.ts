export interface CustomerPersonalData {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'other';
  identificationId: string;
  dateOfBirth: Date;
  countryOfPhoneCode: string;
  phoneNumber: number;
  postalCode: string;
  city: string;
  residentialCountry: string;
  nationality: string;
  address: string;
  politicallyExposedPerson: boolean;
};

export interface CustomerFinancialData {
  isNewInvestor: boolean;
  knowSecurityToken: boolean;
  knowRisksInvesting: boolean;
  investmentTotalPercentage:  25 | 50 | 75 | 100;
  investmentCapitalOrigin: string;
  periodicalPatrimonyOrigin: string;
  timeHorizonInvestment: string;
  levelOfRiskAcceptance: number;
  investementObjectives: number;
  studiesLevel: number;
  profesion: string;
  anualIncome: number;
};

// This only will be expanded in the future v2
export interface CustomerProfesionalData {};

// this only will be expanded in the future v2
export interface CustomerIdentityData {};

export interface CustomerKycSchema {
  customerId: string;
  kycId: string;
  creationDate: Date | string;
  isValidKyc: boolean;
  status: 'pending' | 'inReview' | 'approved' | 'rejected';
  updateDate: Date | string;
  personal: CustomerPersonalData;
  financial: CustomerFinancialData;
}

export interface CustomerKycRegister {
  customerKycCompleted: boolean,
  data?: CustomerKycSchema,
  status?: 'pending' | 'approbed' | 'rejected'
}
