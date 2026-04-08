import { useForm } from "react-hook-form"

export const LoginForm = ({ onForgot }) => {
  
  const {register, handleSubmit, formState: {errors}} = useForm()
  
  const onSubmit = (data) => {
    console.log(data)
    //Mandar los datos albackend para iniciar sesion
  }
  
  
  
  
  
  return (
    
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
            <label htmlFor="emailOrUsername" className="block text-sm font-medium text-gray-700">Correo Electrónico o Nombre de Usuario

            </label>
            <input 
            id="emailOrUsername"
            type="email"
            placeholder="correo@ejemplo.com o usuario" 
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          {...register("emailOrUsername", {required: "El correo o nombre de usuario es obligatorio"})}/>
              {errors.emailOrUsername && <p className="text-red-500 text-sm mt-1">{errors.emailOrUsername.message}</p>}
            </div>
            <div>
              <label 
              htmlFor="password"
              className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
              id="password"
              type="password"
              placeholder="********"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              {...register("password", {required: "La contraseña es obligatoria"})}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>} 
            
            </div>

            <button 
            type="submit"
            className="w-full bg-main-blue hover:opacity-90 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm disabled:opacity-50"
            >
              Iniciar Sesion
            </button>
            <p className="text-center text-sm">
            <button 
            type="button"
            className="text-main-blue hover:underline"
            onClick={onForgot}
            >
              ¿Olvidaste tu contraseña?
            </button>
            </p>

    </form>
  )
}
