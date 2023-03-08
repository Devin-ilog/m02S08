import { useEffect, useState } from 'react';

const buscarDados = async (filtro) => {
  const URL = `https://api.npms.io/v2/search?q=${filtro}`;

  const response = await fetch(URL);
  const data = await response.json();

  return data;
};

export const FetchNpm = () => {
  const [dados, setDados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const busca = async () => {
      setIsLoading(true);
      const resultado = await buscarDados('react');

      setDados(resultado.results);
      setIsLoading(false);
    };

    busca();
  }, []);

  return (
    <>
      <h1>Fetch NPM</h1>

      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {dados.map((dado) => (
            <li key={dado.package.name}>{dado.package.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};
