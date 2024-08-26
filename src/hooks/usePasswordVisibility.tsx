import { useState, useCallback, useRef } from "react";

const usePasswordVisibility = ()=>{
    const [seePassword, setSeePassword] = useState(false);
    const passwordRef = useRef(null)

    const handleSeePassword = useCallback(()=>{
        if(passwordRef.current !== undefined){
            switch(passwordRef.current.type.toLowerCase()){
                case 'password':
                    passwordRef.current.type = "text";
                    break;
                default:
                    passwordRef.current.type = "password";
            }
            setSeePassword(prev => !prev);
        }
    }, []);

    return{
        seePassword,
        passwordRef,
        handleSeePassword
    }
}

export default usePasswordVisibility;