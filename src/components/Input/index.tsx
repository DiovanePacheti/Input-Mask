import React, { InputHTMLAttributes } from 'react';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({...props}) => {

    return(
        <div>
            <input {...props}/>
        </div>
    )
};

export default Input;