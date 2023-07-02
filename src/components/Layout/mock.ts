import { v4 as uuidv4 } from 'uuid'

export const initialTasks = [
  {
    name: 'task one',
    done: false,
    id: uuidv4()
  },
  {
    name: 'task two',
    done: true,
    id: uuidv4()
  }
]
