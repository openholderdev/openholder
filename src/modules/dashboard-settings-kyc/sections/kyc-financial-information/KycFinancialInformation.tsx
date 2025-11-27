import Input from "@/src/components/Input";
import { FINANCIAL_FORM, FinancialFormField } from "./KycCustomerFinancialForm.constants";
import { useForm } from "react-hook-form";
import { kycFinancialInformationSchema, KycFinancialData } from "./form/schema";
import { kycFinancialDefaultValues } from "./form/defaultValues";
import { zodResolver } from "@hookform/resolvers/zod";
import RadioSelect from "@/src/components/RadioButton";
import { DashboardSettingsKycController } from "../../DashboardSettingKycController";

export default function KycFinancialInformation() {
  const store = DashboardSettingsKycController.getInstance();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<KycFinancialData>({
    resolver: zodResolver(kycFinancialInformationSchema),
    defaultValues: kycFinancialDefaultValues,
  });

  const handleSubmitKycFinancialInformation = (data: KycFinancialData) => {
    store.setFormFinancialDataCompleted(data);
  };

  return (
    <section data-testid="dashboard-settings-kyc-financial-information" className="pb-10">
      <div className="px-4 py-6">
        <h3 className="text-xl font-semibold mb-4">Información Financiera KYC</h3>
        <p>Esta es la sección de información financiera KYC.</p>
      </div>
      <form
        onSubmit={handleSubmit((data) =>
          handleSubmitKycFinancialInformation(data as unknown as KycFinancialData)
        )}
      >
        <div className="grid grid-cols-12 gap-2">
          {FINANCIAL_FORM.map((field: FinancialFormField) => {
            return (
              <div key={field.registerKey} className="px-4 py-2 col-span-12">
                {field.type === "text" && (
                  <Input
                    register={register}
                    label={field.label}
                    registerKey={field.registerKey}
                    errors={errors}
                  />
                )}
                {field.type === "checkbox" && (
                  <RadioSelect
                    direction="vertical"
                    label={field.label}
                    register={register}
                    registerKey={field.registerKey}
                    options={field.options!}
                    errors={errors}
                  />
                )}
              </div>
            );
          })}
          <div className="col-span-6 ">
            <button className="py-2 w-full bg-white text-black border-1 border-black rounded-md">
              Back
            </button>
          </div>
          <div className="col-span-6 ">
            <button type="submit" className="w-full py-2 rounded-md bg-[#171717] text-white">
              Continue
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
