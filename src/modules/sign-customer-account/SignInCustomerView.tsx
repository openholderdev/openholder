import { useSession } from "next-auth/react";
import { LoginCustomerContent } from "./sections/login-customer-content/LoginCustomerContent";
import LoginCustomerHeader from "./sections/login-customer-header/LoginCustomerHeader";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoginSkeleton from "./sections/login-skeleton/LoginSkeleton";

export default function SignInCustomerView() {
  const { data: session, status } = useSession();
  const [existSession, setExistSession] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("registeredEmail")) {
      router.push("/dashboard/register-complete");
      return;
    }
    if (status === "authenticated" && session?.user?.email) {
      router.push("/dashboard/investments");
    }
  }, [status, session, router]);

  useEffect(() => {
    return () => {
      localStorage.removeItem("registeredEmail");
    };
  }, []);
  if (status === "loading") {
    return <LoginSkeleton />;
  }
  if (status === "authenticated") {
    return <LoginSkeleton />;
  }

  return (
    <main className="h-screen bg-[#16171D]">
      <LoginCustomerHeader />
      <LoginCustomerContent />
    </main>
  );
}
