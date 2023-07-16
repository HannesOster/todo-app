import React from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  key: number;
}

const SingleTodo = ({ todo, todos, setTodos, key }: Props) => {
  return (
    <section className="todos__single">
      <p className="todos__single--text">{todo.todo}</p>
      <div>
        <span className="icon">
          {" "}
          <AiFillEdit />{" "}
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <MdDone />
        </span>
      </div>
    </section>
  );
};

export default SingleTodo;
