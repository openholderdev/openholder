import { FaExclamation } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

export const WALLET_VERIFY_STATUS = {
  PENDING: {
    chip: (
      <span
        className={`text-orange-900 bg-orange-300 px-2 rounded-full justify-center text-xs flex items-center font-bold`}
      >
        <FaExclamation />
        PENDING
      </span>
    ),
  },
  REJECTED: {
    chip: (
      <span
        className={`text-red-900 bg-red-300 px-2 rounded-full justify-center text-xs flex items-center font-bold`}
      >
        <IoMdCloseCircleOutline />
        REJECTED
      </span>
    ),
  },
  APPROVED: {
    chip: (
      <span
        className={`text-green-900 bg-green-300 px-2 rounded-full justify-center text-xs flex items-center font-bold`}
      >
        APROVED
        <FaCheck />
      </span>
    ),
  },
  NOT_REQUESTED: {
    chip: (
      <span
        className={`text-gray-900 bg-gray-300 px-2 rounded-full justify-center text-xs flex items-center font-bold`}
      >
        NOT_REQUESTED
        <FaCheck />
      </span>
    ),
  },
};
