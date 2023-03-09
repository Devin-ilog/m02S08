import { useEffect, useRef } from 'react';

export const Referencia = () => {
  const refInput = useRef();
  const refButton = useRef();
  const refInterval = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(new Date().getSeconds());
    }, 1000);

    refInterval.current = id;

    return () => clearInterval(refInterval.current);
  }, []);

  useEffect(() => {
    refButton.current.click();
  }, []);

  const handleClick = () => {
    refInput.current.value = 'useRef';
    refInput.current.focus();
  };

  const handleCancelInteval = () => {
    clearInterval(refInterval.current);
  };

  return (
    <>
      <h1>useRef</h1>
      <input ref={refInput} placeholder='teste' />
      <button ref={refButton} onClick={handleClick}>
        Clique
      </button>
      <button onClick={handleCancelInteval}>Clear</button>
    </>
  );
};
