import { useState } from 'react';
import './App.css';
import { CicloVida } from './components/CicloVida';
import { Estado } from './components/Estado';
import { Eventos } from './components/Eventos';
import { FetchNpm } from './components/FetchNpm';

function App() {
  const [desmontagem, setDesmontagem] = useState(false);
  return (
    <>
      {/* <Estado titulo='Estados' valorInicial='teste inicio state' />
      <hr />
      <Eventos /> */}

      {/* {!desmontagem && <CicloVida />} */}
      {/* <button onClick={() => setDesmontagem(true)}>desmontagem</button> */}

      <FetchNpm />
    </>
  );
}

export default App;
