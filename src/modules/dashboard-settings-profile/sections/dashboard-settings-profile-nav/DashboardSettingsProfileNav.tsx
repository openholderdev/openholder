import { useRouter } from "next/router";
import { CgProfile } from "react-icons/cg";
import { HiMiniIdentification } from "react-icons/hi2";
import { HiOutlineWallet } from "react-icons/hi2";

export default function DashboardSettingsProfileNav() {
  const router = useRouter();

  return (
    <section data-testid="dashboard-settings-profile-nav" className="bg-white">
      <div className="flex w-full py-[0.75rem] px-4 py-6 border-b border-gray-700">
        <nav className="flex items-center w-full justify-around text-gray-800 font-bold text-sm">
          <div>
            <p
              onClick={() => router.push("/dashboard/settings/profile")}
              className="flex gap-2 items-center shadow-md cursor-pointer bg-gray-200 px-4 py-2 rounded-full"
            >
              <CgProfile className="text-2xl" />
              PERFIL
            </p>
          </div>
          <div>
            <p
              onClick={() => router.push("/dashboard/settings/kyc")}
              className="flex gap-2 items-center cursor-pointer"
            >
              <HiMiniIdentification className="text-2xl" />
              KYC
            </p>
          </div>
          <div>
            <p
              onClick={() => router.push("/dashboard/settings/wallet")}
              className="flex gap-2 items-center cursor-pointer"
            >
              <HiOutlineWallet className="text-2xl" />
              WALLETS
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
}
