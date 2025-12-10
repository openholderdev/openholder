import {
  UIInvestment,
  InvestmentType,
  InvestmentStatus,
} from "@/src/modules/dashboard-investments-view/core/Domain/models/Investment";

interface InvestmentsTableProps {
  investments: UIInvestment[];
}

export default function InvestmentsTable({ investments }: InvestmentsTableProps) {
  const getStatusBadge = (status: InvestmentStatus): string => {
    const statusConfig: Record<InvestmentStatus, string> = {
      LANDING: "bg-blue-100 text-blue-800",
      IN_SALE: "bg-green-100 text-green-800",
      IN_CONFIG: "bg-yellow-100 text-yellow-800",
      IN_RENT: "bg-purple-100 text-purple-800",
      SOLD_OUT: "bg-red-100 text-red-800",
    };
    return statusConfig[status] || "bg-gray-100 text-gray-800";
  };

  const getTypeLabel = (type: InvestmentType): string => {
    const typeLabels: Record<InvestmentType, string> = {
      REAL_ESTATE: "Inmobiliario",
      TRANSPORT: "Transporte",
      ENERGY: "Energía",
      OTHER: "Otro",
    };
    return typeLabels[type];
  };

  const getStatusLabel = (status: InvestmentStatus): string => {
    const statusLabels: Record<InvestmentStatus, string> = {
      LANDING: "Landing",
      IN_SALE: "En Venta",
      IN_CONFIG: "En Configuración",
      IN_RENT: "En Renta",
      SOLD_OUT: "Agotado",
    };
    return statusLabels[status];
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID Inversión
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Código Token
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre Proyecto
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tipo
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tiempo (meses)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Inicio Renta
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {investments.map((investment) => (
            <tr key={investment.investmentId} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {investment.investmentId}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                  {investment.tokenCode}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                {investment.nameProject}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {getTypeLabel(investment.typeInvestment)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(investment.status)}`}
                >
                  {getStatusLabel(investment.status)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {investment.inversionTime} meses
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(investment.initRentEstimate).toLocaleDateString("es-ES")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {investments.length === 0 && (
        <div className="text-center py-8 text-gray-500">No hay inversiones disponibles</div>
      )}
    </div>
  );
}
