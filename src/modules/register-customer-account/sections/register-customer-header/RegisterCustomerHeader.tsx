import { RiMenu2Line } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";
import LanguageSwitcher from "@/src/components/LanguageSwitcher";
import { useRef, useState } from "react";
import { useClickOutside } from "@/src/hooks/useClickOutside";

export default function RegisterCustomerHeader() {
  const [langSelectorIsOpen, setLangSelectorIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => {
    setLangSelectorIsOpen(false);
  });

  return (
    <header className="grid grid-cols-12 py-2">
      <div className="col-span-3">
        <RiMenu2Line className="cursor-pointer" size={22} />
      </div>
      <div className="col-span-6 flex justify-center font-bold text-lg">OPENHOLDER</div>
      <div className="col-span-3 flex justify-end">
        <div className="relative" ref={dropdownRef}>
          <GrLanguage
            className="cursor-pointer"
            size={22}
            onClick={() => setLangSelectorIsOpen(!langSelectorIsOpen)}
          />
          {langSelectorIsOpen && <LanguageSwitcher />}
        </div>
      </div>
    </header>
  );
}
