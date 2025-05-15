import { useState } from 'react';
import { nanoid } from 'nanoid';
import TodoItem from './components/TodoItem';
import AddTaskForm from './components/AddTaskForm';
import Modal from './components/Modal';

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

const INITIAL_TASK_LIST: Task[] = [
  { id: `todo-${nanoid()}`, name: 'Eat', completed: false },
  { id: `todo-${nanoid()}`, name: 'Sleep', completed: false },
  { id: `todo-${nanoid()}`, name: 'Repeat', completed: false }
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASK_LIST);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  
  const addTask = (name: string) => {
    const newId = `todo-${nanoid()}`;
    setTasks([
      ...tasks,
      { id: newId, name, completed: false }
    ]);
    setIsModalOpen(false);
  };

  const toggleTaskCompleted = (taskId: string) => {
    setTasks(
      tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  return (
    <main className="m-4">
      <button 
        onClick={() => setIsModalOpen(true)}
        className="mb-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-medium py-2 px-4 rounded"
      >
        Add Task
      </button>
      <Modal
        headerLabel="New Task"
        isOpen={isModalOpen}
        onCloseRequested={() => setIsModalOpen(false)}
      >
        <AddTaskForm onNewTask={addTask} />
      </Modal>

      <section>
        <h1 className="text-xl font-bold">To do</h1>
        <ul className="mt-2 space-y-2">
          {tasks.map(task => (
            <TodoItem
              key={task.id}
              id={task.id}
              name={task.name}
              completed={task.completed}
              onDelete={handleDeleteTask}
              onToggle={toggleTaskCompleted}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;