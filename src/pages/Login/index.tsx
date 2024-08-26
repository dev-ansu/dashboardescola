import Input from "../../components/Input/index";
import {Link} from "react-router-dom"
import { useForm } from "react-hook-form";
import { loginSchema, LoginData } from "../../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod"
import usePasswordVisibility from "../../hooks/usePasswordVisibility";
import { FaEye, FaEyeSlash  } from "react-icons/fa";

const Login = ()=>{
    const { seePassword, passwordRef, handleSeePassword } = usePasswordVisibility();

    const {handleSubmit, register, formState: {errors}} = useForm<LoginData>({
        mode:"onChange",
        resolver: zodResolver(loginSchema)
    });

    const authentication = async(data: LoginData)=>{
        console.log(data);
    }

    return(
        <div className="flex p-4 flex-col justify-center items-center bg-slate-100 w-full min-h-screen">
            <h1 className="text-3xl">Dashboard escola</h1>
            <form onSubmit={handleSubmit(authentication)} className="w-full flex flex-col max-w-xl gap-4">
                <div className="w-full flex flex-col">
                    <label htmlFor="">E-mail</label>
                    <Input 
                        register={register("email")}
                        error={errors.email?.message}
                        autoFocus
                        placeholder="Digite seu e-mail"

                    />
                </div>
                <div className="w-full flex flex-col">
                    <label htmlFor="">Senha</label>
                    <div className="flex gap-1 bg-white rounded-md items-center">
                        <Input
                            ref={passwordRef}
                            type="password" 
                            register={register('password')}
                            error={errors.password?.message} 
                            placeholder="Digite sua senha"
                            />
                        <span className="cursor-pointer" onClick={handleSeePassword}  className="cursor-pointer h-full mx-2">
                            {seePassword && <FaEye /> }
                            {!seePassword && <FaEyeSlash />}
                        </span>
                    </div>
                </div>
                <button
                    className="bg-red-600 rounded-md py-2 px-1 text-white font-medium"
                >
                    Acessar
                </button>
            </form>
            <p className="mt-4">Não possui cadastro? <Link to="/signup" className="text-blue-600">Cadastre-se</Link></p>
        </div>
    )
}

export default Login;