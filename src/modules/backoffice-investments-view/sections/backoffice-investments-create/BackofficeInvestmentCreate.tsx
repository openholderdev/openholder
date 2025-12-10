import { useForm } from "react-hook-form";
import { investmentOptions, InvestmentType } from "./BackofficeInvestmentCreate.constants";
import { APIInvestmentManager } from "../../core/infra/APIInvestmentManager";
import { v4 as uuidv4 } from "uuid";
import { observer } from "mobx-react-lite";
import { CgBackspace } from "react-icons/cg";
import { GrBackTen } from "react-icons/gr";
import { IoArrowBackSharp } from "react-icons/io5";
import { BackofficeInvestmentsViewController } from "../../BackofficeInvestmentsViewController";

interface InvestmentFormData {
  nameProject: string;
  tokenCode: string;
  inversionTime: number;
  initRentEstimate: string;
  inversionPlan: string;
  description: string;
  typeInvestment: InvestmentType;
  web3: {
    smartContractAddress: string;
  };
  financial: {
    tokenPriceUSD: number;
    totalTokenUnits: number;
    rentabilityAnnualEstimate: number;
    monthlyRentEstimate: number;
    totalInvestmentAmount?: number;
  };
}

export const BackofficeInvestmentCreate = observer(function BackofficeInvestmentCreate() {
  const { register, handleSubmit } = useForm<InvestmentFormData>({
    defaultValues: {},
  });
  const store = BackofficeInvestmentsViewController.getInstance();

  const createInvestment = async (data: InvestmentFormData) => {
    const modelInvestment = {
      ...data,
      investmentId: uuidv4(),
      status: "LANDING" as const,
      galleryImages: [],
      soldStatus: null,
      inRentStatus: null,
      finalizedStatus: null,
      web3: {
        smartContractAddress: "",
        createdAt: new Date(),
      },
    };
    const controller = new APIInvestmentManager();
    await controller.createInvestment(modelInvestment);
  };

  const goBack = () => {
    store.showCreateInvestmentSection = false;
    store.showListInvestmentSection = true;
  };

  return (
    <form onSubmit={handleSubmit(createInvestment)}>
      <div className="px-4 pt-2 pb-10">
        <div className="flex justify-between">
          <IoArrowBackSharp className="cursor-pointer" onClick={goBack} size={22} />
          <h1 className="text-2xl font-semibold mb-4">Crear nueva inversión</h1>
        </div>
        <div className="col-span-12">
          <h2 className="py-3 text-lg font-semibold">Datos generales</h2>
        </div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-6">
            <label className="block text-sm font-medium mb-2">Nombre del Proyecto</label>
            <input
              {...register("nameProject")}
              type="text"
              className="col-span-12 px-3 py-3  rounded-lg bg-[#A7AEBF] text-[#16171D] w-full"
              placeholder="Nombre proyecto"
            />
          </div>
          <div className="col-span-6">
            <label className="block text-sm font-medium mb-2">Simbolo del token</label>
            <input
              {...register("tokenCode")}
              type="text"
              className="col-span-12 px-3 py-3  rounded-lg bg-[#A7AEBF] text-[#16171D] w-full"
              placeholder="Simbolo del token"
            />
          </div>
          <div className="col-span-6">
            <label className="block text-sm font-medium mb-2">Tipo Inversión</label>
            <select
              {...register("typeInvestment")}
              className="w-full px-4 py-3 rounded-lg bg-[#A7AEBF] text-[#16171D] focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            >
              {investmentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-6">
            <label className="block text-sm font-medium mb-2">Periodo de inversión</label>
            <input
              {...register("inversionTime")}
              type="number"
              className="col-span-12 px-3 py-3  rounded-lg bg-[#A7AEBF] text-[#16171D] w-full"
              placeholder="Periodo de inversión (meses)"
            />
          </div>
          <div className="col-span-6">
            <label className="block text-sm font-medium mb-2">Inicio Renta Estimado</label>
            <input
              {...register("initRentEstimate")}
              type="date"
              className="w-full col-span-12 px-3 py-3  rounded-lg bg-[#A7AEBF] text-[#16171D] w-full"
              placeholder="Inicio Renta Estimado"
            />
          </div>
          <div className="col-span-6">
            <label className="block text-sm font-medium mb-2">Plan de inversión</label>
            <input
              {...register("inversionPlan")}
              type="text"
              className="w-full col-span-12 px-3 py-3  rounded-lg bg-[#A7AEBF] text-[#16171D] w-full"
              placeholder="Plan de inversión"
            />
          </div>
          <div className="col-span-12">
            <label className="block text-sm font-medium mb-2">Descripción</label>
            <input
              {...register("description")}
              type="text"
              className="w-full col-span-12 px-3 py-3  rounded-lg bg-[#A7AEBF] text-[#16171D] w-full"
              placeholder="Descripción"
            />
          </div>
          <div className="col-span-12">
            <h2 className="py-3 text-lg font-semibold">Datos financieros</h2>
          </div>
          <div className="col-span-6">
            <label className="block text-sm font-medium mb-2">Precio del token ($)</label>
            <input
              {...register("financial.tokenPriceUSD")}
              type="number"
              className="w-full col-span-12 px-3 py-3  rounded-lg bg-[#A7AEBF] text-[#16171D] w-full"
              placeholder="Precio del token"
            />
          </div>
          <div className="col-span-6">
            <label className="block text-sm font-medium mb-2">Recaudación total ($)</label>
            <input
              {...register("financial.totalInvestmentAmount")}
              type="number"
              className="w-full col-span-12 px-3 py-3  rounded-lg bg-[#A7AEBF] text-[#16171D] w-full"
              placeholder="Precio del token"
            />
          </div>
          <div className="col-span-6">
            <label className="block text-sm font-medium mb-2">Suministro de tokens</label>
            <input
              {...register("financial.totalTokenUnits")}
              type="number"
              className="w-full col-span-12 px-3 py-3  rounded-lg bg-[#A7AEBF] text-[#16171D] w-full"
              placeholder="Suministro de tokens"
            />
          </div>
          <div className="col-span-6">
            <label className="block text-sm font-medium mb-2">Renta anual estimada (%)</label>
            <input
              {...register("financial.rentabilityAnnualEstimate")}
              type="number"
              className="w-full col-span-12 px-3 py-3  rounded-lg bg-[#A7AEBF] text-[#16171D]"
              placeholder="Renta anual estimada"
            />
          </div>
          <div className="col-span-6">
            <label className="block text-sm font-medium mb-2">Renta mensual estimada (%)</label>
            <input
              {...register("financial.monthlyRentEstimate")}
              type="number"
              className="w-full col-span-12 px-3 py-3  rounded-lg bg-[#A7AEBF] text-[#16171D]"
              placeholder="Renta mensual estimada"
            />
          </div>
          <div className="col-span-12">
            <h2 className="py-3 text-lg font-semibold">Datos WEB3</h2>
          </div>
          <div className="col-span-6">
            <label className="block text-sm font-medium mb-2">SmartContract Address(%)</label>
            <input
              {...register("web3.smartContractAddress")}
              type="text"
              className="w-full col-span-12 px-3 py-3  rounded-lg bg-[#A7AEBF] text-[#16171D]"
              placeholder="Dirección del SmartContract"
            />
          </div>
          <div className="col-span-12">
            <button className="bg-[#F5C249] rounded-lg py-2 text-sm w-full">CREAR INVERSIÓN</button>
          </div>
        </div>
      </div>
    </form>
  );
});
