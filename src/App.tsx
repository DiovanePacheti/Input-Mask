import React, { useCallback, useState } from 'react';
import Input from './components/Input';

interface ExpressCandidato {
  cep:string;
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
        <Input placeholder="99999-999" name="cep" onChange={handleChange}/>
        <button onClick={() => console.log(candidato)}>Salvar</button>
    </div>
  );
}

export default App;
