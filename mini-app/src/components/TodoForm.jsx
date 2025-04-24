import { useState } from 'react';
import { FormContainer, Input, AddButton } from '../styles/TodoFormStyles';
import { FaPlus } from 'react-icons/fa';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue('');
  };

  return (
    <FormContainer onSubmit={handleSubmit} data-testid="todo-form">
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task..."
        data-testid="todo-input"
      />
      <AddButton type="submit" aria-label="Add todo">
        <FaPlus />
      </AddButton>
    </FormContainer>
  );
};

export default TodoForm;