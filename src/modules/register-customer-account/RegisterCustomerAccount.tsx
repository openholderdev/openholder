'use client';

import { observer } from "mobx-react-lite";
import { RegisterCustomerAccountController } from "./RegisterCustomerAccountController";
import RegisterCustomerContent from "./sections/register-customer-content/RegisterCustomerContent";
import RegisterCustomerHeader from "./sections/register-customer-header/RegisterCustomerHeader";
import { RegisterCustomerCompleteRegisterSection } from "./sections/register-customer-complete-register/RegisterCustomerCompleteRegister";
import RegisterCustomerSuccess from "./sections/register-customer-success/RegisterCustomerSuccess";

export const RegisterCustomerAccount = observer(function RegisterCustomerAccount() {
  const store = RegisterCustomerAccountController.getInstance();

  return (
    <div className="bg-[#111111] text-white h-screen py-4 px-4">
      <RegisterCustomerHeader />
      {store.showEmailVerificationSection && (<RegisterCustomerContent />)}
      {store.showCompleteRegisterSection && (<RegisterCustomerCompleteRegisterSection />)}
      {store.completeRegisterProccess && (<RegisterCustomerSuccess />)}
    </div>
  );
});
