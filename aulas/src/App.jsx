import './App.css';
import { Estado } from './components/Estado';
import { Eventos } from './components/Eventos';

function App() {
  return (
    <>
      <Estado titulo='Estados' valorInicial='teste inicio state' />
      <hr />
      <Eventos />
    </>
  );
}

export default App;
