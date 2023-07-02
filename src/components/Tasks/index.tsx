import { Task } from '../../feature/types'
import TaskItem from './TaskItem'

type Props = {
  toggleDone: (id: string, done: boolean) => void
  handleDelete: (id: string) => void
  tasks: Task[]
}

const Tasks = ({ tasks, handleDelete, toggleDone }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {tasks.length ? (
        tasks.map((e) => {
          return (
            <TaskItem
              key={e.id}
              name={e.name}
              done={e.done}
              id={e.id}
              toggleDone={toggleDone}
              handleDelete={handleDelete}
            />
          )
        })
      ) : (
        <span className="text-green-100">No tasks yet!</span>
      )}
    </div>
  )
}

export default Tasks
