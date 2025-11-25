import { FaExclamation } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

export const WALLET_VERIFY_STATUS = {
  PENDING: {
    chip: (
      <span
        className={`flex gap-2 text-orange-900 bg-orange-300 px-2 rounded-full justify-center text-xs flex items-center font-bold`}
      >
        <FaExclamation />
        Pendiente
      </span>
    ),
  },
  REJECTED: {
    chip: (
      <span
        className={`flex gap-2 text-red-900 bg-red-300 px-2 rounded-full justify-center text-xs flex items-center font-bold`}
      >
        <IoMdCloseCircleOutline />
        REJECTED
      </span>
    ),
  },
  APPROVED: {
    chip: (
      <span
        className={`flex gap-2 text-green-900 bg-green-300 px-2 rounded-full justify-center text-xs flex items-center font-bold`}
      >
        <FaCheck />
        Aprobado
      </span>
    ),
  },
  NOT_REQUESTED: {
    chip: (
      <span
        className={`flex gap-2  text-gray-900 bg-gray-300 px-2 rounded-full justify-center text-xs flex items-center font-bold`}
      >
        NOT_REQUESTED
        <FaCheck />
      </span>
    ),
  },
};

export const SIGNATURES_USER = {
  GLOBAL: "GLOBAL",
  SPAIN: "SPAIN",
};
export const WALLET_SIGN_STATUS = {
  NOT_REQUESTED: "NOT_REQUESTED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
  APPROVED: "APPROVED",
};
