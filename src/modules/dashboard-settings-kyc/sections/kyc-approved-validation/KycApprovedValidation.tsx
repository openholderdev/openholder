import { useRouter } from "next/router";
import { FaCheckCircle } from "react-icons/fa";

export default function KycApprovedValidation() {
  const router = useRouter();

  return (
    <section className="min-h-[70vh] pt-10 flex flex-col justify-center items-center gap-6 px-4 max-w-2xl mx-auto">
      <div className="w-full flex justify-center">
        <FaCheckCircle className="text-6xl text-green-600" />
      </div>

      <h2 className="text-2xl font-semibold text-center text-green-700">¡KYC Aprobado!</h2>

      <div className="space-y-4 text-center">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="texmdlg font-semibold mb-3 text-green-800">
            Tu verificación ha sido completada exitosamente
          </h3>
          <p className="text-body text-sm mb-3">
            ¡Enhorabuena! Tu identidad ha sido verificada y tu cuenta ha sido aprobada. Ya puedes
            acceder a todas las oportunidades de inversión disponibles en nuestra plataforma.
          </p>
          <p className="text-body text-sm">
            Ahora tienes acceso completo para explorar propiedades, realizar inversiones y gestionar
            tu cartera de activos tokenizados.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-sm text-gray-700">
            <strong>Estado:</strong>{" "}
            <span className="text-green-600 font-semibold">Verificado ✓</span>
          </p>
          <p className="text-sm text-gray-700 mt-2">
            <strong>Fecha de aprobación:</strong> {new Date().toLocaleDateString("es-ES")}
          </p>
        </div>

        <button
          onClick={() => router.push("/dashboard/investments")}
          className="mt-6 w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
        >
          Explorar oportunidades de inversión
        </button>

        <button
          onClick={() => router.push("/dashboard/profile")}
          className="w-full bg-white text-gray-700 border border-gray-300 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Ver mi perfil
        </button>
      </div>
    </section>
  );
}
