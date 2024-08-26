import { HTMLAttributes, forwardRef, RefObject } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

interface InputProps extends HTMLAttributes<HTMLInputElement>{
    register?: UseFormRegisterReturn;
    error?: string | null;      
}

const Input = forwardRef<HTMLInputElement, InputProps>(({register, error, className = "", ...props}, ref) =>{
    className += ` w-full rounded-md outline-none px-2 py-1 text-md focus:outline-blue-400`;
    const { ref: registerRef, ...registerProps } = register || {};
    return(
        <div className="flex flex-col w-full">
            <input   {...props} {...registerProps}  className={className}  ref={(node)=>{
                if(registerRef) registerRef(node);
                if(ref) ref.current = node;
            }} />
            {error && <span className="text-sm text-red-600">{error}</span>}
        </div>
    );
});



export default Input;