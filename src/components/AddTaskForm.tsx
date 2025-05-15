import { useState } from 'react';

interface AddTaskFormProps {
  onNewTask: (name: string) => void;
}

function AddTaskForm({ onNewTask }: AddTaskFormProps) {
  const [taskName, setTaskName] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim()) {
      onNewTask(taskName);
      setTaskName('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input 
        placeholder="New task name" 
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button 
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-medium py-2 px-4 rounded"
      >
        Add task
      </button>
    </form>
  );
}

export default AddTaskForm; 