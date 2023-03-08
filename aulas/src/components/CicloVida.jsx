import { useEffect, useState } from 'react';

export const CicloVida = () => {
  const [open, setOpen] = useState(false);
  const [sapato, setSapato] = useState('');

  useEffect(() => {
    console.log('Sem array de dependencias');

    return () => console.log('Execução na desmontagem - Sem array de dependencias');
  });

  useEffect(() => {
    console.log('Array de dependencias vazio []');

    return () => console.log('Execução na desmontagem - array de dependencias vazio []');
  }, []);

  useEffect(() => {
    console.log('Array de dependencias com valor', open);

    return () => console.log('Execução na desmontagem - array de dependencias com valor');
  }, [open]);

  useEffect(() => {
    console.log('Sapato:', sapato);
  }, [sapato]);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleSapato = (event) => {
    setSapato(event.target.value);
  };

  return (
    <>
      <h1>Ciclo Vida</h1>
      <button onClick={handleOpen}>{open ? 'Fechar' : 'Abrir'}</button>
      <input onChange={handleSapato} value={sapato} />
    </>
  );
};
