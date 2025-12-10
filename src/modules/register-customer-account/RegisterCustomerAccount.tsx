"use client";

import { observer } from "mobx-react-lite";
import { RegisterCustomerAccountController } from "./RegisterCustomerAccountController";
import { RegisterCustomerContent } from "./sections/register-customer-content/RegisterCustomerContent";
import RegisterCustomerHeader from "./sections/register-customer-header/RegisterCustomerHeader";
import { RegisterCustomerCompleteRegisterSection } from "./sections/register-customer-complete-register/RegisterCustomerCompleteRegister";
import RegisterCustomerSuccess from "./sections/register-customer-success/RegisterCustomerSuccess";

export const RegisterCustomerAccount = observer(function RegisterCustomerAccount() {
  const store = RegisterCustomerAccountController.getInstance();

  return (
    <div className="h-screen py-4 px-4 bg-[#16171D] text-white">
      <RegisterCustomerHeader />
      {store.showEmailVerificationSection && <RegisterCustomerContent />}
      {store.showCompleteRegisterSection && <RegisterCustomerCompleteRegisterSection />}
      {store.completeRegisterProccess && <RegisterCustomerSuccess />}
    </div>
  );
});
