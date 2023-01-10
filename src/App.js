import { useState } from "react";

function App() {
  const [doo, setDoo] = useState("");
  const [task, setTask] = useState([]);
  const [count, setCount] = useState(0);
  function save() {
    
      
    
    const taskObj = {
      id: task.length,
      title: doo,
      isChecked: false,
    };
   
        const newArr = [...task];
        newArr.push(taskObj);
        setTask(newArr);
        setDoo("");
    
  }
  function delTask(id) {
    task.map((val) => {
      if (val.id === id) {
        const delList = [...task]
        delList.splice(delList.indexOf(val), 1);
        setTask(delList)
      }
      return val;
    });
  console.log(task);
  countDone()
  }
  function editTask(id) {
    task.map((val) => {
      if (val.id === id) {
        setDoo(val.title)
        const editList = [...task]
        editList[id].title = doo
        setTask(editList);
      }else if (val.id === undefined){
        save()
      }else 
      return val
    });

  }

  function onDone(id) {
    const objList = task.map((val) => {
      if (val.id === id) {
        val.isChecked = !val.isChecked;
      }
      return val;
    });
    setTask(objList);
    countDone();
  }
  function countDone() {
    console.log(task);
    const arr = task.filter((e) => e.isChecked === true);
    setCount(arr.length);
  }

  return (
    <div className="container-xxl m-auto">
      <div className="row ">
        <h1>To-Do-List</h1>
        <h2>
          Total {task.length}. Done {count}
        </h2>
        <div className="d-flex">
          <input
            id="task"
            value={doo}
            type="text"
            placeholder="Add to-do-task"
            onChange={(e) => setDoo(e.target.value)}
          />
          <button className="btn btn-warning" onClick={save}>
            Add
          </button>
        </div>
        <div>
          {task.map((e) => (
            <div className="d-flex">
              <input
                type="checkbox"
                name=""
                value=""
                checked={e.isChecked}
                onChange={() => {
                  onDone(e.id);
                }}
              />
              <h4>{e.title}</h4>
              <button className="btn btn-secondary" onClick={() => {
                  editTask(e.id)
                }}>Edit</button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  delTask(e.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
