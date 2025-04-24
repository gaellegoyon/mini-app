import { motion } from 'framer-motion';
import { FaTrash, FaCheck } from 'react-icons/fa';
import { 
  Item, 
  Text, 
  DeleteButton, 
  Checkbox,
  TodoContent
} from '../styles/TodoItemStyles';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: -100, transition: { duration: 0.2 } }
  };

  return (
    <Item
      as={motion.li}
      variants={itemVariants}
      exit="exit"
      layout
      data-testid="todo-item"
    >
      <TodoContent>
        <Checkbox 
          onClick={() => toggleTodo(todo.id)}
          completed={todo.completed}
          data-testid="todo-checkbox"
        >
          {todo.completed && <FaCheck />}
        </Checkbox>
        <Text completed={todo.completed} data-testid="todo-text">
          {todo.text}
        </Text>
      </TodoContent>
      <DeleteButton 
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete todo"
        data-testid="delete-button"
      >
        <FaTrash />
      </DeleteButton>
    </Item>
  );
};

export default TodoItem;