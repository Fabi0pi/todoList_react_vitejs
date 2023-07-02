type Props = {
  children: JSX.Element | JSX.Element[]
  title?: string
}

const Container = ({ children, title }: Props) => {
  return (
    <div className="bg-cyan-700 p-4 border shadow rounded-md">
      {title && <h2 className="text-xl pb-2 text-white">{title}</h2>}
      <div>{children}</div>
    </div>
  )
}

export default Container
