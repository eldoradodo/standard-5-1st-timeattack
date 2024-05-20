import React from "react";

const TodoForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };


const formData = new FormData();
const title = formData.get("title");
const content = formData.get("content");

if (!title.trim() || !content.trim()) {
  alert("제목과 내용을 둘 다 입력해주세요.");

  const nextTodo = {
    id: crypto.randomUUID(),
    title,
    content,
    isDone: false,
  };

  

  //(prev) => { [nextTodo, ...pre] e.target.reset;} 이런형태의 무언가 코드가 있었던 걸로 기억

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="제목" name="title" />
        <input type="text" placeholder="내용" name="content" />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
}

export default TodoForm;
