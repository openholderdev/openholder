import { observer } from "mobx-react-lite";

export const WalletCustomerList = observer(function WalletCustomerList() {
  return (
    <section>
      <div className="px-8 py-7 bg-white rounded-lg shadow-md">
        <div>
          <h4 className="text-xl font-semibold mb-3">Clientes de la wallet</h4>
          <p className="text-sm">
            Gestiona los clientes asociados a tu wallet. Puedes añadir nuevos clientes o eliminar
            los existentes.
          </p>
        </div>
      </div>
    </section>
  );
});
