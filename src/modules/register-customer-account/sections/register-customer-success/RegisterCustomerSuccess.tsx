import { useRouter } from "next/router";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RegisterCustomerAccountController } from "../../RegisterCustomerAccountController";

export default function RegisterCustomerSuccess() {
  const router = useRouter();
  const store = RegisterCustomerAccountController.getInstance();

  const goBackToHome = () => {
    store.resetState();
    router.push('/auth/login');
  };

  return (
    <section className="pt-20 ">
      <div className="text-center">
        <IoMdCheckmarkCircleOutline className="mx-auto text-6xl text-green-500" />
        <div className="pt-4">
          <h1 className="font-semibold text-white text-2xl">Verifica tu email</h1>
          <p className="text-gray-300 text-md mt-2">
            Te acabamos de enviar un correo con un enlace de verificación. Revisa tu bandeja de entrada.
          </p>
        </div>
      </div>
      <div className="fixed bottom-5 w-[92%]">
        <button onClick={goBackToHome} className="bg-[#ff0049] w-full py-3 rounded-lg hover:bg-[#ff336e] cursor-pointer">Continuar</button>
      </div>
    </section>
  )
};
