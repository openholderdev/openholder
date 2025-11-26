export default function GenderSelect({ register, errors }: any) {
  return (
    <div className="col-span-12">
      <label className="block text-sm font-medium mb-3 text-gray-700">Género</label>
      <div className="flex gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            {...register("gender")}
            type="radio"
            value="male"
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-700">Masculino</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            {...register("gender")}
            type="radio"
            value="female"
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-700">Femenino</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            {...register("gender")}
            type="radio"
            value="other"
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-700">Otro</span>
        </label>
      </div>
      {errors.gender && <p className="text-red-500 text-sm mt-2">{errors.gender.message}</p>}
    </div>
  );
}
