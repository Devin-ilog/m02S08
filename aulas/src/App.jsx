import { useEffect, useState } from 'react';
import './App.css';
import { CicloVida } from './components/CicloVida';
import { CustomHook, CustomHook2 } from './components/CustomHook';
import { Estado } from './components/Estado';
import { Eventos } from './components/Eventos';
import { FetchNpm } from './components/FetchNpm';
import { ListaTodos } from './components/ListaTodos';
import { Referencia } from './components/Referencia';
import { apiService } from './service/api';

function App() {
  const [desmontagem, setDesmontagem] = useState(false);

  // useEffect(() => {
  //   const getPosts = async () => {
  //     const result = await apiService.get('posts');
  //     console.log(result.data);
  //   };

  //   getPosts();
  // }, []);

  return (
    <>
      {/* <Estado titulo='Estados' valorInicial='teste inicio state' />
      <hr />
      <Eventos /> */}

      {/* {!desmontagem && <CicloVida />} */}
      {/* <button onClick={() => setDesmontagem(true)}>desmontagem</button> */}

      {/* <FetchNpm /> */}

      {/* <Referencia /> */}
      {/* 
      <CustomHook />
      <CustomHook2 /> */}

      <ListaTodos />
    </>
  );
}

export default App;
