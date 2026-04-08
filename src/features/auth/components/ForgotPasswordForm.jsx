import { useForm } from "react-hook-form"

export const ForgotPasswordForm = ({onSwitch}) => {

  const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data ) => {
      console.log(data)
      //Mandar los datos al backend para enviar el correo de recuperación
    }
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-1.5">
          Email
        </label>
        <input
        type="email"
        placeholder="correo@ejemplo.com"
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        {...register("email", {required: "El correo es obligatorio",})}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-main-blue text-white py-2 rounded-lg disabled:opacity-50 hover:opacity-90">
        Enviar Correo
      </button>
      <p className="text-center text-sm text-gray-600">
        ¿Recordaste tu contraseña?{""}
        <button 
        type="button"
         className="text-main-blue font-medium hover:opacity-80" 
         onClick={onSwitch}>
          Volver al Login
        </button>
      </p>
    </form>
  )
}
