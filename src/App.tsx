import React, { useCallback, useState } from 'react';
import Input from './components/Input';

interface ExpressCandidato {
  cep:string;
  price:number;
  cpf:string;
}

const App: React.FC = () => {

  const [candidato, setCandidato] = useState<ExpressCandidato>({} as ExpressCandidato);

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
      setCandidato({
        ...candidato,
        [e.currentTarget.name]: e.currentTarget.value
      })
  }, [candidato]);
  return (
    <div>
        <Input placeholder="99999-999" name="cep" mask="cep" onChange={handleChange}/>
        <Input placeholder="9.999,99" name="price" mask="currency" onChange={handleChange}/>
        <Input placeholder="999.999.999-99" name="cpf" mask="cpf" onChange={handleChange}/>

        <button onClick={() => console.log(candidato)}>Salvar</button>
    </div>
  );
}

export default App;
