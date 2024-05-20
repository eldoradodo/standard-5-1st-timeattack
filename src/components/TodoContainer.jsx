
import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoContainer = () => {
    const [todos, setTodos] = useState([
        {
        id : 1,
        title : "할 일 제목",
        content : "할 일 내용",
        isDone : false,
        },
    ]);
    


const workingTodo = todos.filter( (todo) => todo.isDone === false);
const doneTodo = todos.filter( (todo) => todo.isDone === true);

return (
    <section>
    <p>Todo</p>
    <TodoForm todos={todos} setTodos={setTodos}/>
    <TodoList todos={workingTodo} setTodos={setTodos}/>
    <TodoList todos={doneTodo} setTodos={setTodos}/>
    </section>
);
};
export default TodoContainer;
