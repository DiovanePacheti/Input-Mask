import React, { InputHTMLAttributes, useCallback } from 'react';

import { cep } from './masks';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
    ...props
}) => {

    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        cep(e);
    }, []);

    return(
        <div>
            <input {...props} onKeyUp={handleKeyUp} />
        </div>
    )
};

export default Input;