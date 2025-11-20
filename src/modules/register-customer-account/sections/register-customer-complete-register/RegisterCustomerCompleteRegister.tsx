'use client'

import { observer } from "mobx-react-lite"
import { RegisterCustomerAccountController } from "../../RegisterCustomerAccountController"
import { RegisterCustomerFormData, RegisterCustomerSchema } from "./RegisterCustomerCompleteRegister.types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterCustomerCompleteRegisterSection = observer(
  function RegisterCustomerCompleteRegisterSection() {
    const store = RegisterCustomerAccountController.getInstance();
    const {
      register, handleSubmit, formState: { errors }
    } = useForm<RegisterCustomerFormData>({
      resolver: zodResolver(RegisterCustomerSchema),
      defaultValues: {
        name: '',
        password: '',
        phone: ''
      }
    })

    const handleCompleteRegister = async (data: RegisterCustomerFormData) => {
      store.registerCustomerAccount(data);
    }
    
    return (
      <section className="pt-16">
        <h1 className="font-semibold text-[#ff0049] text-xl mb-4">¡Ya casi está! Completa tus datos</h1>
        <div className="grid grid-cols-12 mb-2">
          <label className="col-span-12 text-left text-sm py-1">Nombre completo</label>
          <input {...register('name')} className="col-span-12 bg-[#3d3d3d] px-3 py-3 border-1 border-white rounded-lg" type="text" placeholder="Juan García López" />
        </div>
        <div className="grid grid-cols-12 mb-2">
          <label className="col-span-12 text-left text-sm py-1">Contraseña</label>
          <input {...register('password')} className="col-span-12 bg-[#3d3d3d] px-3 py-3 border-1 border-white rounded-lg" type="password" placeholder="Mínimo 8 caracteres" />
        </div>
        <div className="grid grid-cols-12 mb-2">
          <label className="col-span-12 text-left text-sm py-1">Teléfono</label>
          <input {...register('phone')} className="col-span-12 bg-[#3d3d3d] px-3 py-3 border-1 border-white rounded-lg" type="number" placeholder="Mínimo 8 caracteres" />
        </div>
        <div className="pt-10">
          <button onClick={handleSubmit(handleCompleteRegister)} className="bg-[#ff0049] w-full py-3 rounded-lg hover:bg-[#ff336e] cursor-pointer">Continuar</button>
        </div>
      </section>
    )
  }
)
