import Button from "./Button"
import { useLocation } from 'react-router-dom'

const HeaderTwo = ({ title, onToggle, showAddTaskBool }) => {
  const location = useLocation()

  return (
    <header className="header">
      <h1>{title}</h1>
      {
        location.pathname === '/' && <Button color={showAddTaskBool ? "red" : "green"} text={showAddTaskBool ? "Close" : "Add"} onClick={onToggle}/>
      }
      {/* <Button color="red" text="Hello 1"/>
      <Button color="blue" text="Hello 2"/> */}
    </header>
  )
}

export default HeaderTwo
