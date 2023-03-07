export const Eventos = () => {
  const handleClick = (event) => {
    console.log('clicou', event);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const handleKeyUp = (event) => {
    console.log(event.keyCode);
  };

  return (
    <>
      <h1>Olá Semana 08</h1>
      <input onChange={handleChange} onKeyUp={handleKeyUp} />
      <button onClick={handleClick}>Clique</button>
    </>
  );
};
