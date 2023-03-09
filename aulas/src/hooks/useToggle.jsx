import { useState } from 'react';

export const useToggle = (estadoInicial = false) => {
  const [open, setOpen] = useState(estadoInicial);

  const handleToggle = () => {
    setOpen((value) => !value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return { open, handleToggle, handleClose, handleOpen };
};
