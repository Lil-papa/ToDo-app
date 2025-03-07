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
      <ul className="content">{children}</ul>
    </>
  );
}

export default TaskList;
