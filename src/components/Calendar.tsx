export default function Calendar({
  register,
  label,
  registerKey,
  errors,
  ...props
}: {
  register: any;
  label: string;
  errors: any;
  props?: any;
  registerKey: string;
}) {
  return (
    <div className="col-span-12">
      <label className="block text-sm font-medium mb-2 text-gray-700">{label}</label>
      <div className="relative">
        <input
          {...props}
          {...register(registerKey)}
          type="date"
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                 hover:border-gray-400 transition-colors duration-200
                 [&::-webkit-calendar-picker-indicator]:cursor-pointer
                 [&::-webkit-calendar-picker-indicator]:opacity-70
                 [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
          max={new Date().toISOString().split("T")[0]}
        />
      </div>
      {errors[registerKey] && (
        <p className="text-red-500 text-sm mt-1">{errors[registerKey].message}</p>
      )}
    </div>
  );
}
