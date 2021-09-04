import useTasks from '../../hooks/use-tasks';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const tasks = useTasks();
  console.log(tasks);

  return (
    <Section>
      <TaskForm
        onEnterTask={tasks.enterTaskHandler}
        loading={tasks.isLoading}
      />
      {tasks.error && <p>{tasks.error}</p>}
    </Section>
  );
};

export default NewTask;
