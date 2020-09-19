import React, { useState } from 'react';
import Input from './components/Input';

interface ExpressCandidato {
  cep:string;
}

const App: React.FC = () => {

  const [candidato, setCandidato] = useState<ExpressCandidato>({} as ExpressCandidato);
  return (
    <div>
        <Input placeholder="99999-999" />
    </div>
  );
}

export default App;
