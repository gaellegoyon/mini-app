import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  const mockToggleTodo = vi.fn();
  const mockDeleteTodo = vi.fn();

  const todos = [
    { id: "1", text: "Task 1", completed: false },
    { id: "2", text: "Task 2", completed: true },
    { id: "3", text: "Task 3", completed: false },
  ];

  it("renders all todos by default", () => {
    render(
      <TodoList todos={todos} toggleTodo={mockToggleTodo} deleteTodo={mockDeleteTodo} />
    );

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.getByText("Task 3")).toBeInTheDocument();
  });

  it("displays a message when no todos are found", () => {
    render(
      <TodoList todos={[]} toggleTodo={mockToggleTodo} deleteTodo={mockDeleteTodo} />
    );

    expect(screen.getByText("No tasks found")).toBeInTheDocument();
  });
});
