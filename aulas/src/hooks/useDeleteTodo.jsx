import { useState } from 'react';
import { apiService } from '../service/api';

export const useDeleteTodo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const deleteTodo = async (id) => {
    setIsSubmitting(true);
    const { error } = await apiService.delete(`/todos/${id}`);

    if (error) {
      alert('Ocorreu uma falha ao deletar');
    }

    setIsSubmitting(false);
  };

  return { isSubmitting, deleteTodo };
};
