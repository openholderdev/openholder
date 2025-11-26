export default function Input({ label, register, registerKey, errors, ...props }: any) {
  return (
    <>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        {...register(registerKey)}
        type="text"
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900"
        placeholder="12345678"
      />
      {registerKey && errors[registerKey] && (
        <p className="text-red-500 text-sm mt-1">{errors[registerKey].message}</p>
      )}
    </>
  );
}
