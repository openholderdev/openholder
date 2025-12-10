import { ReactNode } from "react";

export type InvestmentType = "REAL_ESTATE" | "TRANSPORT" | "ENERGY" | "OTHER";

export interface InvestmentOption {
  value: InvestmentType;
  label: string;
  icon?: ReactNode;
  color: string;
}

export const investmentOptions: InvestmentOption[] = [
    {
      value: "REAL_ESTATE",
      label: "Inmobiliario",
      // icon: <FaHome className="text-blue-600" />,
      color: "bg-blue-50 border-blue-200",
    },
    {
      value: "TRANSPORT",
      label: "Transporte",
      // icon: <FaCar className="text-green-600" />,
      color: "bg-green-50 border-green-200",
    },
    {
      value: "ENERGY",
      label: "Energía",
      // icon: <FaBolt className="text-yellow-600" />,
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      value: "OTHER",
      label: "Otro",
      // icon: <FaEllipsisH className="text-gray-600" />,
      color: "bg-gray-50 border-gray-200",
    },
  ];
