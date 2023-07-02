
type Props = {
  name: string;
  done: boolean;
  id: string;
  toggleDone: (id: string, done: boolean) => void;
  handleDelete: (id: string) => void;
}

const TaskItem = ({ name,done, handleDelete, id, toggleDone }: Props) => {

  return (
    <div className="flex justify-between bg-white p-1 px-3 rounded-sm">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={done}
          onChange={() => toggleDone(id, !done)}
        />
        {name}
      </div>
      <button className="bg-cyan-200 hover:bg-cyan-300 rounded-lg p-1 px-3" 
      type="button"
      onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  )
}

export default TaskItem
