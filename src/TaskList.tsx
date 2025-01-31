type TaskListProps = {
  header?: React.ReactNode;
};

function TaskList({
  header,
  children,
}: React.PropsWithChildren<TaskListProps>) {
  return (
    <>
      {header}
      <ul>{children}</ul>
    </>
  );
}

export default TaskList;
