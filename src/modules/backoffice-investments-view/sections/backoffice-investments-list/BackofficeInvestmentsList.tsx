import { observer } from "mobx-react-lite";
import { BackofficeInvestmentsViewController } from "../../BackofficeInvestmentsViewController";
import { useEffect } from "react";
import { toJS } from "mobx";
import { UIInvestment } from "@/src/modules/dashboard-investments-view/core/Domain/models/Investment";

export const BackofficeInvestmentsList = observer(function BackofficeInvestmentsList() {
  const store = BackofficeInvestmentsViewController.getInstance();
  const investments = toJS(store.listInvestments);

  useEffect(() => {
    initializeInvestments();
  }, []);

  const initializeInvestments = async () => {
    if (!store.listInvestments) {
      const investments = await store.fetchInvestments();
      store.listInvestments = investments ? investments : [];
    }
  };

  const handleAddInvestment = () => {
    store.showCreateInvestmentSection = true;
    store.showListInvestmentSection = false;
  };

  return (
    <div className=" grid grid-cols-12 px-4 gap-4">
      <section className="col-span-2 pb-6">
        <div className=" bg-[#A7AEBF] rounded-lg"></div>
      </section>
      <section className="w-full col-span-12">
        <div className="flex items-center justify-between w-full bg-[#f1f2f3] p-4 rounded-lg mb-4">
          <h2 className="text-sm font-semibold">MMI: Modulo manejo de inversiones</h2>
          <button
            onClick={handleAddInvestment}
            className="px-6 bg-[#F5C249] text-[#16171D] py-1 rounded-lg hover:bg-yellow-500 disabled:bg-gray-400"
          >
            Añadir
          </button>
        </div>
      </section>
      {investments?.map((entry: UIInvestment) => (
        <section
          className="col-span-12 grid grid-cols-12 gap-4 bg-[#f1f2f3] p-2 rounded-lg"
          key={entry.investmentId}
        >
          <>
            <div className="col-span-4 flex flex-col gap-2">
              <b>Proyecto:</b>
              <span className="text-xs">{entry.nameProject}</span>
            </div>
            <div className="col-span-4 flex flex-col gap-2">
              <b>Inversión:</b>
              <span className="text-xs">{entry.financial.totalInvestmentAmount} $</span>
            </div>
            <div className="col-span-4 flex flex-col gap-2">
              <b>Tiempo:</b>
              <span className="text-xs">{entry.inversionTime} meses</span>
            </div>
            <div className="col-span-4 flex flex-col gap-2">
              <b>Tipo:</b>
              <span className="text-xs">{entry.typeInvestment}</span>
            </div>
            <div className="col-span-4 flex flex-col gap-2">
              <b>Tokens:</b>
              <span className="text-xs">
                {entry.financial.totalTokenUnits} {entry.tokenCode}
              </span>
            </div>
            <div className="col-span-4 flex flex-col gap-2">
              <b>Estado:</b>
              <span className="text-xs">{entry.status}</span>
            </div>
            <div className="col-span-6 flex flex-col gap-2">
              <button className="bg-[#F5C249] rounded-lg py-1 text-sm">VER DETALLES</button>
            </div>
            <div className="col-span-6 flex flex-col gap-2">
              <button className="bg-[#21242D] text-white rounded-lg py-1 text-sm">EDITAR</button>
            </div>
          </>
        </section>
      ))}
    </div>
  );
});
