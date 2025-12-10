import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { buyTokenSchema, BuyTokenFormData } from "./form/buyTokenSchema";
import { DashboardInvestmentsViewController } from "../../DashboardInvestmentsViewController";
import { useSession } from "next-auth/react";

export interface DashboardBuyTokenSectionProps {
  investmentId: string;
}
export default function DashboardBuyTokenSection({ investmentId }: DashboardBuyTokenSectionProps) {
  const { data: session } = useSession();
  console.log(session?.user.id);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BuyTokenFormData>({
    // resolver: zodResolver(buyTokenSchema),
    defaultValues: {
      amountTokens: 0,
      amountUsdt: 0,
      confirmWhitepaper: false,
      subscriptionToken: false,
    },
  });

  const store = DashboardInvestmentsViewController.getInstance();

  const handleBuyToken = async (data: BuyTokenFormData) => {
    const transaction = {
      amounTokens: data.amountTokens,
      amountUsdt: data.amountUsdt,
      customerId: session?.user.id,
      date: new Date(),
      investmentId: investmentId,
      status: "pending" as const,
      transactionBlockchainId: "0x004541154asdadasdasdasd",
      wallet: "0xa2359aca517f38f340a3a6f45108acc853de0fc6", // Ya deberia de tener conectada la wallet
    };
    store.createTransaction(transaction);
  };

  return (
    <form data-testid="dashboard-buy-token-section-form" onSubmit={handleSubmit(handleBuyToken)}>
      <section className="dashboard-buy-token-section py-4 px-6">
        <div className="flex justify-between items-center gap-6">
          <p className="text-sm">¿Cuanto dinero quieres invertir?</p>
          <span className="text-sm">
            Tu balance: <b>5.000,00 $</b>
          </span>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="mt-4 col-span-6">
            <label className="block text-sm font-medium mb-2">Cantidad de tokens</label>
            <input
              {...register("amountTokens")}
              type="number"
              min="1"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej: 10"
            />
            {errors.amountTokens && (
              <p className="text-red-500 text-sm mt-1">{errors.amountTokens.message}</p>
            )}
          </div>

          <div className="mt-4 col-span-6">
            <label className="block text-sm font-medium mb-2">Monto en USDT</label>
            <input
              {...register("amountUsdt")}
              type="number"
              min="1"
              step="0.01"
              className="w-full px-4 py-3 border bg-gray-200 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej: 1000"
            />
            {errors.amountUsdt && (
              <p className="text-red-500 text-sm mt-1">{errors.amountUsdt.message}</p>
            )}
          </div>
        </div>

        <div className="flex items-start gap-3 mt-4">
          <input
            {...register("confirmWhitepaper")}
            type="checkbox"
            id="whitepaper"
            className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="whitepaper" className="text-sm text-gray-700">
            He leído y acepto el whitepaper
          </label>
        </div>
        {errors.confirmWhitepaper && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmWhitepaper.message}</p>
        )}

        <div className="flex items-start gap-3 mt-4">
          <input
            {...register("subscriptionToken")}
            type="checkbox"
            id="subscription"
            className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="subscription" className="text-sm text-gray-700">
            Acepto la suscripción del token
          </label>
        </div>
        {errors.subscriptionToken && (
          <p className="text-red-500 text-sm mt-1">{errors.subscriptionToken.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-6 bg-[#F5C249] text-[#16171D] py-3 rounded-lg hover:bg-yellow-500 disabled:bg-gray-400"
        >
          {isSubmitting ? "Procesando..." : "Comprar tokens"}
        </button>
      </section>
    </form>
  );
}
