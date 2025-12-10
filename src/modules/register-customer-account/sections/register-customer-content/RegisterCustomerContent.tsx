"use client";

import { useEffect, useState } from "react";
import { RegisterCustomerAccountController } from "../../RegisterCustomerAccountController";
import { BiSolidError } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { isValidEmail } from "../../config/regex";
import { useTranslation } from "react-i18next";

const TIME_CLOSE_ERROR_EMAIL_ALREADY_REGISTERED = 10000;

export const RegisterCustomerContent = observer(function RegisterCustomerContent() {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>("");
  const store = RegisterCustomerAccountController.getInstance();
  const router = useRouter();
  const isEmailValid = isValidEmail(email);

  const handleVerifyEmail = async () => {
    store.checkValidEmail(email);
  };

  const goLogin = () => router.push("/auth/login");

  useEffect(() => {
    if (store.showErrorEmailAlreadyRegistered) {
      setTimeout(() => {
        store.showErrorEmailAlreadyRegistered = false;
      }, TIME_CLOSE_ERROR_EMAIL_ALREADY_REGISTERED);
    }
  }, [store.showErrorEmailAlreadyRegistered]);

  return (
    <section className="pt-20 ">
      <div className="text-center">
        <p className="text-2xl font-semibold">Únete a OpenRent</p>
        <span className="text-sm">
          ¿Ya tienes una cuenta?
          <span
            className="text-underline text-underline font-semibold px-2 cursor-pointer text-[#F5C249]"
            onClick={() => router.push("/auth/login")}
          >
            Inicia sesión.
          </span>
        </span>
        <div className="py-10">
          {store.showErrorEmailAlreadyRegistered && (
            <div className="my-4 border-[#21242D] bg-[#A7AEBF] border-1 flex justify-between items-center px-4 py-3 rounded-lg">
              <div className="flex items-center">
                <BiSolidError className="text-[#F5C249]" />
                <span className="text-[#21242D] text-sm ml-2">
                  {t("auth.email.alreadyRegistered")}{" "}
                  <span onClick={goLogin} className="underline ">
                    {t("auth.email.loginQuestion")}
                  </span>
                </span>
              </div>
              <IoCloseOutline />
            </div>
          )}
          <div className="grid grid-cols-12">
            <label className="col-span-12 text-left text-sm py-1 text-[#A7AEBF]">
              {t("auth.email.label")}
            </label>
            <input
              onChange={(ev) => setEmail(ev.target.value)}
              className="col-span-12 px-3 py-3 border-1 border-[#171717] border-2 rounded-lg bg-[#21242D] text-[#F8F8F8]"
              type="text"
              placeholder={t("auth.email.placeholder")}
            />
          </div>
          <div className="flex items-center pt-2 pt-4">
            <span className="text-sm">{t("auth.terms.accept")} terminos y condiciones de x.</span>
          </div>
          <div className="pt-10">
            <button
              disabled={!isEmailValid}
              onClick={handleVerifyEmail}
              className="bg-[#F5C249] w-full px-[22px] py-[13px]  cursor-pointer text-[#16171D]  rounded-[13px] disabled:bg-gray-500"
            >
              {t("auth.continue")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});
