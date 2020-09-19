//mascara de cep
export function cep(e: React.FormEvent<HTMLInputElement>){
    e.currentTarget.maxLength = 9;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, ""); // excluindo tudo que nao for numero e contunie depois de encontrar a primeira ocorrencia e retorna nada
    value = value.replace(/^(\d{5})(\d)/, "$1-$2"); //pege do inicio 5 digitos e depois o resto dos carateres e etre os dois blocos coloque um -
    e.currentTarget.value = value;
    return e;
}

//mascara de modeda BRL
export function currency(e: React.FormEvent<HTMLInputElement>){
    let value = e.currentTarget.value;
    value = value.replace(/\D/g,  "");//so numeros
    value = value.replace(/(\d)(\d{2})$/, "$1,$2")//Colocando a virgula pegando tudo e depois os ultimos 2 digitos
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".") //procure sentença de 3 caracteres enqualquer lugar da string
    e.currentTarget.value = value;
    return e;
}

//mascara de cpf
export function cpf(e: React.FormEvent<HTMLInputElement>){
    e.currentTarget.maxLength = 14;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1-$2")
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".") //procure sentença de 3 caracteres enqualquer lugar da string
    e.currentTarget.value = value;
    return e;
}