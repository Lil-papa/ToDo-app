import React from 'react';
import './App.css';

type addTaskProps = {
  onAddTask: (taskName: string) => void;
};

function AddTask({ onAddTask }: addTaskProps) {
  const [taskName, setTaskName] = React.useState('');

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTaskName = taskName.trim();

    if (!trimmedTaskName) return;

    onAddTask(trimmedTaskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleAddTask}>
      {/* <label  htmlFor="task-input">Add Task: </label> */}
      <input
        className="input"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        id="task-input"
        placeholder="What do you want to do?"
      />
      <button className="btn">Add</button>
    </form>
  );
}

export default AddTask;
