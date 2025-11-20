import { RiMenu2Line } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";

export default function RegisterCustomerHeader() {
  return (
    <header className="grid grid-cols-12 py-2">
      <div className="col-span-3">
        <RiMenu2Line className="cursor-pointer" size={22}/>
      </div>
      <div className="col-span-6 flex justify-center font-bold text-lg">OpenRent</div>
      <div className="col-span-3 flex justify-end">
        <GrLanguage  className="cursor-pointer" size={22}/>
      </div>
    </header>
  )
}
