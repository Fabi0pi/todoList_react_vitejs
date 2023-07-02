import { FormEvent, useState } from 'react'

type Props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>, value: string) => void
}

const InputContainer = ({ handleSubmit }: Props) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <form
      action=""
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        handleSubmit(e, inputValue)
        setInputValue('')
      }}
    >
      <div className="flex flex-col">
        <label className="text-white">Enter your next task:</label>
        <input
          className="p-1 rounded-sm"
          type="text"
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
        />
      </div>
      <button type="submit" className="bg-cyan-100 rounded-lg hover:bg-cyan-200 p-1">
        Add task
      </button>
    </form>
  )
}

export default InputContainer
