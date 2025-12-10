import { observer } from "mobx-react-lite";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SignInCustomerController } from "../../SigInCustomerController";
import Loader from "@/src/components/Loader";
import { useRouter } from "next/router";

const REGEX_EMAIL_INPUT = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const LoginCustomerContent = observer(() => {
  const { t } = useTranslation();
  const router = useRouter();
  const store = SignInCustomerController.getInstance();
  const [showEmailValidationSection, setShowEmailValidationSection] = useState<boolean>(true);
  const [showAuthenticationSection, setShowAuthenticationSection] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleValidateEmail = async () => {
    const isValid = await store.doVerifyEmail(email);
    if (!isValid) {
      setShowAuthenticationSection(true);
      setShowEmailValidationSection(false);
    } else {
      // Handle invalid email case if needed
      console.log("========");
    }
  };

  const doLogin = () => {
    try {
      signIn("credentials", {
        email,
        password,
        callbackUrl: router.pathname,
      });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <section className="px-4 text-[#F8F8F8]">
      <div className="pt-24 flex flex-col items-center justify-center">
        <p className="text-2xl text-[#FFFFFF] font-semibold">
          {showEmailValidationSection ? "Inicia sesión con tu Email" : "Introduce tu contraseña"}
        </p>
        <p className="text-xs">
          {showEmailValidationSection && (
            <span className="text-sm">
              ¿Aún no tienes una cuenta?
              <span
                className="text-[#F5C249] text-underline text-underline font-semibold px-2 cursor-pointer"
                onClick={() => router.push("/auth/register")}
              >
                Registrate.
              </span>
            </span>
          )}
        </p>
      </div>
      <div>
        {showEmailValidationSection && (
          <div data-testid="validate-email">
            <div className="grid grid-cols-12 pt-8 pb-2">
              <label className="col-span-12 text-left text-sm py-1 text-[#A7AEBF]">
                Email address
              </label>
              <input
                onChange={(ev) => setEmail(ev.target.value)}
                className="col-span-12 px-3 py-3 border-1 border-[#171717] border-2 rounded-lg bg-[#21242D] text-[#F8F8F8]"
                type="text"
                placeholder="Enter your email address"
              />
            </div>
            <div className="pt-4">
              <button
                onClick={() => handleValidateEmail()}
                className="bg-[#F5C249] w-full px-[22px] py-[13px]  cursor-pointer text-[#16171D]  rounded-[13px]"
              >
                {t("auth.continue")}
              </button>
            </div>
          </div>
        )}
        {showAuthenticationSection && (
          <div data-testid="validate-password">
            <div className="grid grid-cols-12 pt-8 pb-2">
              <label className="col-span-12 text-left text-sm py-1 text-[#A7AEBF]">
                Contraseña
              </label>
              <input
                onChange={(ev) => {
                  setPassword(ev.target.value);
                }}
                className="col-span-12 px-3 py-3 border-1 border-[#171717] border-2 rounded-lg bg-[#21242D] text-[#F8F8F8]"
                type="password"
                placeholder={"Introduzca su contraseña"}
              />
            </div>
            <div className="pt-4">
              <button
                onClick={() => doLogin()}
                className="bg-[#F5C249] w-full px-[22px] py-[13px]  cursor-pointer text-[#16171D]  rounded-[13px]"
              >
                {t("auth.continue")}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});
