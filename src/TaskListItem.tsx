import React from 'react';
import './App.css';

function TaskListItem({ children }: React.PropsWithChildren) {
  return (
    <>
      <li>{children}</li>
      <button className="dlt-btn">Delete</button>
    </>
  );
}

export default TaskListItem;
