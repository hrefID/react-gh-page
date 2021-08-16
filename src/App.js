// import Header from './components/Header'
// import Navigation from './components/Navigation';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HeaderTwo from './components/HeaderTwo';
import Footer from './components/Footer';
import About from "./components/About";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'

function App() {
  // const name = 'Elian';
  // const x = false;'
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState ([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fecthTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // Fetch tasks from json server
  const fecthTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json()

    return data
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // Add Task
  const addTask = async (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    // console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  return (
    <Router>
      <div className="container">
        <HeaderTwo title="Task Tracker" onToggle={() => {setShowAddTask(!showAddTask)}} showAddTaskBool={showAddTask}/>
        
        <Route path='/' exact render={() => (
          <>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {
              tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
              ) : (
                <h3>No Tasks to Show</h3>
              )
            }
          </>
        )} />
        <Route path='/about' component={About}/>
        <Footer />
      </div>
    </Router>
    // {/* <Header title='Text from App'/>
    // <Navigation title='Text from App to Navigation'/> */}
    // {/* <p className="small">Hello {name}</p>
    // <p>Hello {x ? 'Yes' : 'No'}</p> */}
    // can only have one root div, use <> </> to have multiple root div
  );
}

export default App;
