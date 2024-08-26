import Input from "../../components/Input/index";
import {Link} from "react-router-dom"
import { useForm } from "react-hook-form";
import { RegisterData, registerSchema } from "../../schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod"
import { ChangeEvent,ClipboardEvent, KeyboardEvent, useState } from "react";
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import usePasswordVisibility from "../../hooks/usePasswordVisibility";

const Register = ()=>{
    const { seePassword, passwordRef, handleSeePassword } = usePasswordVisibility();
    // const passwordRef = useRef<HTMLInputElement>();
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [passwordNotEquals, setPasswordNotEquals] = useState(false);
    // const [seePassword, setSeePassword] = useState(false);
    const {handleSubmit, register, formState: {errors}} = useForm<RegisterData>({
        mode:"onChange",
        resolver: zodResolver(registerSchema)
    });

    const insert = async(data: RegisterData)=>{
        if(passwordConfirmation != data.password){
            setPasswordNotEquals(true);
            return;
        }
        console.log(data);
    } 
    

    return(
        <div className="flex p-4 flex-col justify-center items-center bg-slate-100 w-full min-h-screen">
            <h1 className="text-3xl">Dashboard escola</h1>
            <form onSubmit={handleSubmit(insert)} className="w-full flex flex-col max-w-xl gap-4">
                <div className="w-full flex flex-col">
                    <label htmlFor="">Nome</label>
                    <Input 
                        register={register('name')}
                        error={errors.name?.message}
                        autoFocus
                        placeholder="Digite seu nome"
                    />
                </div>
                <div className="w-full flex flex-col">
                    <label htmlFor="">E-mail</label>
                    <Input 
                        register={register('email')}
                        error={errors.email?.message}
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
                <div className="w-full flex flex-col">
                    <label htmlFor="">Confirmação de senha</label>
                    <Input
                        onPaste={(e: ClipboardEvent<HTMLInputElement>)=>{ e.preventDefault() }}
                        onKeyDown={(e: KeyboardEvent<HTMLInputElement>)=>{
                            if (e.ctrlKey && e.key === 'v') {
                                e.preventDefault();
                            }
                        }}
                        type="password" 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordConfirmation(e.target.value.trim())}
                        placeholder="Digite sua senha novamente" 
                    />
                    {passwordNotEquals && <span className="text-sm text-red-600">Senhas não coincidem</span>}
                </div>
                <button
                    className="bg-red-600 rounded-md py-2 px-1 text-white font-medium"
                >
                    Acessar
                </button>
            </form>
            <p className="mt-4">Já possui cadastro? <Link to="/login" className="text-blue-600">Faça login aqui.</Link></p>
        </div>
    )
}

export default Register;