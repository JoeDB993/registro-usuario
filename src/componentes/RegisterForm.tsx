import InputField from './InputField'
import { useRegisterForm } from '../hooks/useRegisterform'

const RegisterForm = () => {
  const { formData, enviado, esValido, successMessage, handleInputChange, handleSubmit, handleReset } = useRegisterForm()

  if (enviado) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-sm p-12 w-full max-w-2xl flex flex-col items-center gap-6 text-center">
          <div className="text-6xl">🎉</div>
          <h2 className="text-3xl font-bold text-gray-700">{successMessage}</h2>
          <p className="text-gray-400 text-sm">Tu cuenta ha sido creada exitosamente.</p>
          <button
            onClick={handleReset}
            className="mt-4 w-full py-4 bg-purple-500 hover:bg-purple-600 text-white font-medium uppercase tracking-wide rounded-full transition-colors cursor-pointer"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-sm p-12 w-full max-w-2xl">

        <h1 className="text-6xl font-black text-gray-700 text-center mb-12">
          Register
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <InputField
            name="username"
            type="text"
            placeholder="NOMBRE DE USUARIO"
            value={formData.username}
            onChange={handleInputChange}
          />
          <InputField
            name="email"
            type="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleInputChange}
          />
          <InputField
            name="password"
            type="password"
            placeholder="CONTRASEÑA"
            value={formData.password}
            onChange={handleInputChange}
          />

          <button
            type="submit"
            disabled={!esValido}
            className={`w-full py-4 rounded-full text-white font-bold uppercase tracking-wide transition-all duration-300 mt-4
              ${esValido
                ? 'bg-purple-500 hover:bg-purple-600 shadow-lg cursor-pointer active:scale-95'
                : 'bg-purple-300 cursor-not-allowed opacity-70'
              }`}
          >
            Registrar
          </button>
        </form>

      </div>
    </div>
  )
}

export default RegisterForm