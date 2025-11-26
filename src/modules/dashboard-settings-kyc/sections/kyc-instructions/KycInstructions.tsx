import { FaRegAddressCard } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import { FaChartLine } from "react-icons/fa6";

export default function KycInstructions() {
  return (
    <section>
      <div className="px-4 py-6">
        <h3 className="text-xl font-semibold">Completa tu cuenta y empieza a invertir</h3>
        <p className="text-sm">
          Completa la verificación de identidad (KYC), creo o importa tu wallet y da el primer paso
          para hacer crecer tu inversión.
        </p>
      </div>
      <div className="grid grid-cols-12 px-4 gap-4">
        <div className="col-span-4 flex flex-col gap-2">
          <div className="flex justify-center bg-green-200 w-14 h-14 rounded-full items-center mx-auto">
            <FaRegAddressCard className="text-2xl" />
          </div>
          <p className="text-xs text-center font-semibold">1.Verifica tu identidad (KYC)</p>
        </div>
        <div className="col-span-4 flex flex-col gap-2">
          <div className="flex justify-center bg-green-200 w-14 h-14 rounded-full items-center mx-auto">
            <GrConfigure className="text-2xl" />
          </div>
          <p className="text-xs text-center font-semibold">2. Configura tu wallet</p>
        </div>
        <div className="col-span-4 flex flex-col gap-2">
          <div className="flex justify-center bg-green-200 w-14 h-14 rounded-full items-center mx-auto">
            <FaChartLine className="text-2xl" />
          </div>
          <p className="text-xs text-center font-semibold">
            3. Da el primer paso para hacer crecer tu inversión
          </p>
        </div>
        <div className="col-span-12 flex pt-6 flex-col gap-2">
          <button className="shadow-md bg-green-500 text-white w-full px-4 py-2 rounded-md text-sm font-bold cursor-pointer">
            Empezar
          </button>
        </div>
      </div>
    </section>
  );
}
