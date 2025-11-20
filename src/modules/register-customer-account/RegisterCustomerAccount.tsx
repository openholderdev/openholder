import RegisterCustomerContent from "./sections/register-customer-content/RegisterCustomerContent";
import RegisterCustomerHeader from "./sections/register-customer-header/RegisterCustomerHeader";

export default function RegisterCustomerAccount() {
  return (
    <div className="bg-[#111111] text-white h-screen py-4 px-4">
      <RegisterCustomerHeader />
      <RegisterCustomerContent />
    </div>
  );
}
