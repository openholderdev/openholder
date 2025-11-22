import { FaDonate } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { LuShoppingBasket } from "react-icons/lu";
import { CiCircleCheck } from "react-icons/ci";
import { MdConstruction } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoKeySharp } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { RiPsychotherapyLine } from "react-icons/ri";

export const TYPE_INVERSION = {
  REAL_ESTATE: {
    name: 'Inmobiliario',
    icon: <MdHomeWork />,
  },
  TRANSPORT: {
    name: 'Vehiculos',
    icon: <FaCarSide />,
  },
  ENERGY: {
    name: 'Granjas fotovoltaicas',
    icon: <SlEnergy />,
  },
  OTHER: {
    name: 'Otras.',
    icon: <RiPsychotherapyLine />,
  },
}

export const TOKEN_TYPES_CONFIGS = {
  REAL_ESTATE: 'Inmobiliario',
  TRANSPORT: 'Vehiculos',
  ENERGY: 'Energía',
  OTHER: 'Otros'
};

export const TOKEN_STATUS_CONFIGS = {
  LANDING: {
    name: 'Proximamente',
    button: {
      bgColor: 'bg-yellow-300',
      textColor: 'text-black',
      icon: <IoTimerOutline />
    }
  },
  IN_SALE: {
    name: 'En venta',
    button: {
      bgColor: 'bg-orange-200',
      textColor: 'text-orange-600',
      icon: <LuShoppingBasket />
    }
  },
  SOLD_TOKEN: {
    name: 'Financiado',
    button: {
      bgColor: 'bg-green-200',
      textColor: 'text-green-600',
      icon: <CiCircleCheck />
    }
  },
  IN_CONFIG: {
    name: 'En reforma',
    button: {
      bgColor: 'bg-gray-300',
      textColor: 'text-black',
      icon: <MdConstruction />
    }
  },
  IN_RENT: {
    name: 'En explotación',
    button: {
      bgColor: 'bg-purple-400',
      textColor: 'text-white',
      icon: <FaMoneyBillTrendUp />
    }
  },
  SOLD_OUT: {
    name: 'Cerrado',
    button: {
      bgColor: 'bg-blue-700',
      textColor: 'text-white',
      icon: <IoKeySharp />
    }
  },
};

