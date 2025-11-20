export default function RegisterCustomerContent() {
  return (
    <section className="pt-20 ">
      <div className="text-center">
        <h1 className="font-semibold text-[#ff0049]">Bienvenido a OpenRent</h1>
        <div className="py-10">
          <div className="grid grid-cols-12">
            <label className="col-span-12 text-left text-sm py-1">¿Cuál es tu email?</label>
            <input className="col-span-12 bg-[#3d3d3d] px-3 py-3 border-1 border-white rounded-lg" type="text" placeholder="Ingresa tu email" />
          </div>
          <div className="flex items-center pt-2">
            <input type="checkbox" className="mr-3" /> <span className="text-sm">I agree to the 
            <span className="text-[#ff0049]">Terms of Service</span> and <span className="text-[#ff0049]">Privacy Policy</span></span>
          </div>
          <div className="pt-10">
            <button className="bg-[#ff0049] w-full py-3 rounded-lg hover:bg-[#ff336e] cursor-pointer">Continuar</button>
          </div>
        </div>
      </div>
    </section>
  )
}
