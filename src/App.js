import { useState } from "react";

function App() {
  const [doo, setDoo] = useState("");
  const [task, setTask] = useState([])
  const [count, setCount] = useState(0)
  function save() {
    const taskObj={
      id: task.length,
      title: doo,
      isChecked: false
    }
    const newArr = [...task]
    newArr.push(taskObj)
    setTask(newArr)
    setDoo("")
  }
  function onDone(id){
    const objList = task.map((val)=>{

      if (val.id ===id){
        val.isChecked = !val.isChecked
      }
      return val;
    })
    setTask(objList)
    countDone()
  }
  function countDone() {
    const arr = task.filter((e)=> e.isChecked === true)
    setCount(arr.length)
  }

  return (
    <div className="container-xxl m-auto">
      <div className="row ">
        <h1>To-Do-List</h1>
        <h2>Total {task.length}. Done {count}</h2>
        <div className="d-flex">
          <input
            id="task"
            value={doo}
            type="text"
            placeholder="Add to-do-list"
            onChange={(e) => setDoo(e.target.value)}
          />
          <button className="btn btn-warning" onClick={save}>
            Add
          </button>
        </div>
        <div>

            {task.map((e) => (
              <div className="d-flex">
                <input type="checkbox" name="" value="" checked={e.isChecked} onChange={() => {onDone(e.id)}}/>
                <h4>{e.title}</h4>
                <button className="btn btn-secondary">Edit</button>                
                <button className="btn btn-danger">Delete</button>                
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
