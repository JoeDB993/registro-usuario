import type { InputProps } from '../interfaces/InputProps'

const InputField = ({ name, type, placeholder, value, onChange, error }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-6 py-4 rounded-full border text-gray-500 placeholder-gray-400 text-sm outline-none transition-all duration-300 bg-white
          ${error ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-purple-400"}`}
      />
      <span className="text-xs text-red-400 pl-4 min-h-[1rem]">{error}</span>
    </div>
  )
}

export default InputField