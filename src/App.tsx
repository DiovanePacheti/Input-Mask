import React, { useState } from 'react';
import Input from './components/Input';

const App: React.FC = () => {

  const [candidato, setCandidato] = useState();
  return (
    <div>
        <Input placeholder="99999-999" />
    </div>
  );
}

export default App;
