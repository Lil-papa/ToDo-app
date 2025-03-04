type TaskListHeaderProps = {
  count: number;
};

function TaskListHeader({ count }: TaskListHeaderProps) {
  return <h2 className="count">Total Tasks: ({count})</h2>;
}

export default TaskListHeader;
