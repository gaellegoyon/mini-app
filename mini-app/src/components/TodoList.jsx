import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TodoItem from './TodoItem';
import { 
  ListContainer, 
  EmptyMessage, 
  FilterContainer, 
  FilterButton 
} from '../styles/TodoListStyles';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const [filter, setFilter] = useState('all');
  
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  return (
    <>
      <FilterContainer>
        <FilterButton 
          active={filter === 'all'} 
          onClick={() => setFilter('all')}
          data-testid="filter-all"
        >
          All
        </FilterButton>
        <FilterButton 
          active={filter === 'active'} 
          onClick={() => setFilter('active')}
          data-testid="filter-active"
        >
          Active
        </FilterButton>
        <FilterButton 
          active={filter === 'completed'} 
          onClick={() => setFilter('completed')}
          data-testid="filter-completed"
        >
          Completed
        </FilterButton>
      </FilterContainer>
      
      <ListContainer
        as={motion.ul}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        data-testid="todo-list"
      >
        <AnimatePresence>
          {filteredTodos.length > 0 ? (
            filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            ))
          ) : (
            <EmptyMessage>No tasks found</EmptyMessage>
          )}
        </AnimatePresence>
      </ListContainer>
    </>
  );
};

export default TodoList;