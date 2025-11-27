import { FaClock } from "react-icons/fa6";

export default function KycPendingValidation() {
  return (
    <>
      <section className="min-h-[70vh] pt-6 flex flex-col justify-center items-center gap-3 px-4 max-w-2xl mx-auto">
        <div className="w-full flex justify-center">
          <FaClock className="text-5xl text-orange-500" />
        </div>

        <h2 className="text-2xl font-semibold text-center">Verificación KYC en proceso</h2>

        <div className="space-y-2 text-center">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-orange-800">
              Tu solicitud está siendo revisada
            </h3>
            <p className="text-body text-sm mb-3">
              Nuestro equipo está validando la información que nos proporcionaste. Este proceso
              puede tardar entre 48 y 72 horas hábiles.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-700">
              <strong>Estado actual:</strong> Pendiente de validación
            </p>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Si tienes alguna pregunta, no dudes en contactarnos a través de nuestro soporte en{" "}
            <a href="mailto:support@reental.co" className="text-blue-600 underline">
              support@reental.co
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
