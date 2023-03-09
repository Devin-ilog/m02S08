import { useDeleteTodo } from '../hooks/useDeleteTodo';
import { useTodoList } from '../hooks/useTodoList';

export const ListaTodos = () => {
  const { isLoading, error, todos } = useTodoList();
  const { isSubmitting, deleteTodo } = useDeleteTodo();

  return (
    <>
      <h1>Todos</h1>

      {isLoading && <p>Carregando...</p>}

      {error && <p>{`Ocorreu um erro: ${error}`}</p>}

      {!isLoading && !error && (
        <ul>
          {todos.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <button onClick={() => deleteTodo(item.id)} disabled={isSubmitting}>
                Deletar
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
