import Container from '../Container'
import InputContainer from '../Input'
import Summary from '../Summary'
import Tasks from '../Tasks'
import { useTodoLogic } from './useTodoLogic'

export const Layout = () => {
  const { summaryItems, tasks, handleSubmit, handleDeleteTask, toggleDoneTask } = useTodoLogic()

  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col items-center">
        <div className="sm:w-[640px] border shadow p-10 flex flex-col gap-10">
          <Container title={'Summary'}>
            <Summary items={summaryItems} />
          </Container>
          <Container>
            <InputContainer handleSubmit={handleSubmit} />
          </Container>
          <Container title={'Tasks'}>
            <Tasks tasks={tasks} handleDelete={handleDeleteTask} toggleDone={toggleDoneTask} />
          </Container>
        </div>
      </div>
    </div>
  )
}
