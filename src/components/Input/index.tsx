import React, { InputHTMLAttributes, useCallback } from 'react';

import { cep, cpf, currency } from './masks';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    mask:"cep" | "currency" | "cpf"
}

const Input: React.FC<InputProps> = ({
    mask,
    ...props
}) => {

    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {

        if(mask == 'cep'){
            cep(e);
        }
        if(mask == 'currency'){
            currency(e);
        }
        if(mask == 'cpf'){
            cpf(e);
        }
    }, [mask]);

    return(
        <div>
            <input {...props} onKeyUp={handleKeyUp} />
        </div>
    )
};

export default Input;