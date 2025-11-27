import { useForm } from "react-hook-form";
import { KycFormData, kycPersonalInformationSchema } from "./form/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { kycStep1DefaultValues } from "./form/defaultValues";
import Calendar from "@/src/components/Calendar";
import Input from "@/src/components/Input";
import GenderSelect from "@/src/components/GenderSelect";
import DashboardSettingKyc from "../../DashboardSettingKyc";
import { DashboardSettingsKycController } from "../../DashboardSettingKycController";
import { toJS } from "mobx";

export default function KycPersonalInformation() {
  const store = DashboardSettingsKycController.getInstance();
  const formControllerData = toJS(store.formPersonalDataCompleted);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<KycFormData>({
    resolver: zodResolver(kycPersonalInformationSchema),
    defaultValues: formControllerData || kycStep1DefaultValues,
  });

  const handleSetInformationPersonal = (customer: KycFormData) => {
    store.setFormPersonalDataCompleted(customer);
    store.setStepView(2);
  };

  const handleGoBack = () => {
    store.setStepView(0);
    store.activeStepView = 0;
    store.formPersonalDataCompleted = kycStep1DefaultValues;
  };

  return (
    <section data-testid="dashboard-settings-kyc-step-1" className="pb-10">
      <form onSubmit={handleSubmit(handleSetInformationPersonal)}>
        <div className="px-4 py-6">
          <h3 className="text-xl font-semibold mb-4">Paso 1: Información Personal</h3>
          <div className=" grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <Input label="Nombre" register={register} registerKey="firstName" errors={errors} />
            </div>
            <div className="col-span-12">
              <Input label="Apellido" register={register} registerKey="lastName" errors={errors} />
            </div>
            <div className="col-span-12">
              <GenderSelect register={register} errors={errors} />
            </div>
            <div className="col-span-12">
              <Input
                label="Documento de identidad"
                register={register}
                registerKey="identityDocument"
                errors={errors}
              />
            </div>
            <div className="col-span-12">
              <Calendar
                label="Fecha de nacimiento"
                registerKey="dateOfBirth"
                register={register}
                errors={errors}
              />
            </div>
            <div className="col-span-12">
              <Input label="Telefono" register={register} registerKey="phone" errors={errors} />
            </div>
            <div className="col-span-6">
              <Input
                label="Codigo postal"
                register={register}
                registerKey="postalCode"
                errors={errors}
              />
            </div>
            <div className="col-span-6">
              <Input label="Ciudad" register={register} registerKey="city" errors={errors} />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
            </div>
            <div className="col-span-6">
              <Input
                label="Pais de residencia"
                register={register}
                registerKey="countryOfResidence"
                errors={errors}
              />
            </div>
            <div className="col-span-6">
              <Input
                label="Pais de nacimiento"
                register={register}
                registerKey="bornCountry"
                errors={errors}
              />
            </div>
            <div className="col-span-12">
              <Input label="Dirección" registerKey="address" register={register} errors={errors} />
            </div>
            <div className="col-span-6 ">
              <button
                onClick={handleGoBack}
                className="py-2 w-full bg-white text-black border-1 border-black rounded-md"
              >
                Back
              </button>
            </div>
            <div className="col-span-6 ">
              <button type="submit" className="w-full py-2 rounded-md bg-[#171717] text-white">
                Continue
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
