import React, { InputHTMLAttributes, useCallback } from 'react';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
    ...props
}) => {

    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.maxLength = 9;
        let value = e.currentTarget.value;
        value = value.replace(/\D/g, ""); // excluindo tudo que nao for numero e contunie depois de encontrar a primeira ocorrencia e retorna nada
        value = value.replace(/^(\d{5})(\d)/, "$1-$2"); //pege do inicio 5 digitos e depois o resto dos carateres e etre os dois blocos coloque um -
        e.currentTarget.value = value;
    }, []);

    return(
        <div>
            <input {...props} onKeyUp={handleKeyUp} />
        </div>
    )
};

export default Input;