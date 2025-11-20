export interface MailAuthenticatorDomain {
  authenticateByEmail(): Promise<void>;
} 
