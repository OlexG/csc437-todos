import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface TodoItemProps {
  name: string;
  completed: boolean;
  id: string;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

function TodoItem({ name, completed, id, onDelete, onToggle }: TodoItemProps) {
  return (
    <li className="flex items-center gap-2">
      <label className={`flex items-center gap-2 ${completed ? 'line-through' : ''}`}>
        <input 
          type="checkbox" 
          checked={completed}
          onChange={() => onToggle(id)}
        />
        {name}
      </label>
      <button 
        className="ml-8"
        onClick={() => onDelete(id)}
      >
        <FontAwesomeIcon icon={faTrash} className="text-gray-500" title="Delete task" />
      </button>
    </li>
  );
}

export default TodoItem; 