type TaskListHeaderProps = {
  count: number;
};

function TaskListHeader({ count }: TaskListHeaderProps) {
  return <h2>Total Tasks: ({count})</h2>;
}

export default TaskListHeader;
