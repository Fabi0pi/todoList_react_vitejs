import { FormEvent, useState } from 'react'
import { Task } from '../../feature/types'
import { v4 as uuidv4 } from 'uuid'
import { initialTasks } from './mock'

export const useTodoLogic = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const summaryItems = [
    {
      label: 'Total',
      value: tasks.length
    },
    {
      label: 'To do',
      value: tasks.filter((t) => t.done === false).length
    },
    {
      label: 'Done',
      value: tasks.filter((t) => t.done === true).length
    }
  ]

  const handleSubmit = (e: FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault()
    const newTask = {
      name: value,
      done: false,
      id: uuidv4()
    }
    setTasks((tasks) => [...tasks, newTask])
  }

  const toggleDoneTask = (id: string, done: boolean) => {
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === id) {
          t.done = done
        }
        return t
      })
    )
  }

  const handleDeleteTask = (id: string) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== id))
  }

  return {
    tasks,
    summaryItems,
    handleDeleteTask,
    toggleDoneTask,
    handleSubmit,
    setTasks
  }
}
