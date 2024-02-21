"use client";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  );
}
