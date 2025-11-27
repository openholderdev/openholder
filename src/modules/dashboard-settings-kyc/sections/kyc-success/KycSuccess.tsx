import { useRouter } from "next/router";
import { FaCheckCircle } from "react-icons/fa";
import { DashboardSettingsKycController } from "../../DashboardSettingKycController";
import { useEffect } from "react";

export default function KycSuccess() {
  const store = DashboardSettingsKycController.getInstance();

  useEffect(() => {
    return () => {
      store.reset();
    };
  }, []);

  return (
    <section className="min-h-[70vh] pt-10 pb-30 flex flex-col justify-center items-center gap-6 px-4 max-w-2xl mx-auto">
      <div className="w-full flex justify-center">
        <FaCheckCircle className="text-5xl text-green-600" />
      </div>
      <h2 className="text-2xl font-semibold text-center">¡Verificación KYC enviada con éxito!</h2>

      <div className="space-y-4 text-center">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Proceso de validación en curso</h3>
          <p className="text-body text-sm mb-3">
            Hemos recibido correctamente tu información de verificación KYC. Nuestro equipo revisará
            tus datos en un plazo máximo de 48-72 horas.
          </p>
          <p className="text-body text-sm">
            Una vez que tu verificación sea aprobada, recibirás un correo electrónico de
            confirmación y podrás comenzar a invertir en todas las oportunidades disponibles en la
            plataforma.
          </p>
        </div>

        <button
          onClick={() => {
            store.reset();
          }}
          className="cursor-pointer hover:bg-gray-800 bg-black py-2 rounded-lg text-white px-6"
        >
          Volver al menú principal
        </button>
      </div>
    </section>
  );
}
