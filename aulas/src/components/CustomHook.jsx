import { useToggle } from '../hooks/useToggle';

export const CustomHook = () => {
  const { open, handleToggle, handleClose, handleOpen } = useToggle(true);

  return (
    <>
      <h1>Custom Hooks</h1>

      <button onClick={handleToggle}>{open ? 'Fechar' : 'Abrir'}</button>
      <button onClick={handleClose}>Fechar</button>
      <button onClick={handleOpen}>Abrir</button>
    </>
  );
};

export const CustomHook2 = () => {
  const { open, handleToggle } = useToggle();

  return (
    <>
      <h1>Custom Hooks</h1>

      <button onClick={handleToggle}>{open ? 'Fechar' : 'Abrir'}</button>
    </>
  );
};
