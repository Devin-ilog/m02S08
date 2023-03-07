import { useState } from 'react';

export const Estado = ({ titulo, valorInicial = '' }) => {
  const [valor, setValor] = useState(valorInicial);
  const [aberto, setAberto] = useState(true);
  const [contador, setContador] = useState(0);

  const handleChange = (event) => {
    setValor(event.target.value);
  };

  const handleContador = () => {
    setContador((valorAtual) => valorAtual + 1);
    setContador((valorAtual) => valorAtual + 1);
    setContador((valorAtual) => valorAtual + 1);
    setContador((valorAtual) => valorAtual + 1);
  };

  const handleAberto = () => {
    setAberto((old) => !old);
    setValor(valorInicial);
  };

  if (aberto) {
    return <button onClick={handleAberto}>Abrir</button>;
  }

  return (
    <>
      <h1>{titulo}</h1>
      {valor && <p>Valor: {valor}</p>}

      <input value={valor} onChange={handleChange} />
      <button onClick={handleAberto}>Fechar</button>

      <hr />

      <p>Contador: {contador}</p>
      <button onClick={handleContador}>Contador</button>
    </>
  );
};
