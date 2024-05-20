const TodoItem = ( {todos, setTodos} ) => {
 //const ~~~~~~~~

  const deleteTodo = () => {
    setTodos(todos.filter((todo) => todo.id!== id));
  };

  const updateTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === id? {...todo, isDone:!todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <h1>title</h1>
      <h1>content</h1>
      <button onClick={deleteTodo}>삭제</button>
      <button onClick={updateTodo}>{isDone ? "취소" : "완료"}</button>
    </div>
  );
};

export default TodoItem;
