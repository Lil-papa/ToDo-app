import './Index.css';
import React from 'react';

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
};

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([
    { id: 1, title: 'Water the flowers', isCompleted: false },
  ]);

  const [taskName, setTaskName] = React.useState('');

  const onAddTask = () => {
    setTasks([
      ...tasks,
      { id: Date.now(), title: taskName, isCompleted: false },
    ]);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <label htmlFor="task-input" className="sr-only">
        Add Task:
      </label>
      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        id="task-input"
      />
      <button onClick={onAddTask}>Add New Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
