import { create } from "zustand";
export const useTodoStore = create((set) => ({
  Todos: [],
  addTodo: (todo) => set((state) => ({ Todos: [todo, ...state.Todos] })),
  deleteTodo: (index) =>
    set((state) => ({ Todos: state.Todos.filter((_, i) => i !== index) })),
  editTodo: (index, todo) =>
    set((state) => ({
      Todos: state.Todos.map((t, i) => (i === index ? todo : t)),
    })),
}));
