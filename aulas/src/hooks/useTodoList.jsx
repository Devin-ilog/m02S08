import { useEffect, useState } from 'react';

import { apiService } from '../service/api';

export const useTodoList = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getTodos = async () => {
    setIsLoading(true);
    const { data, error } = await apiService.get('todos');
    setTodos(data);
    setError(error);
    setIsLoading(false);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const refetch = () => {
    getTodos();
  };

  return { todos, error, isLoading, refetch };
};
