import { useEffect, useState } from "react"
import axios from 'axios'

// Toastify Code
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let TodoApp = () => {

  let [allData, setAllData] = useState([])

  let [userInp, setUserInp] = useState("")

  let submitData = () => {
    axios.post('/cources', { name: userInp }).then((res) => {
      console.log(res);
      setUserInp("")

       // Toastify success message
       toast.success("Data Successfully Addedd", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark "
      });

    }).catch((err) => {
      console.log(err);

    })

  }

 let dleteData = (id) =>{
  axios.delete(`/cources/${id}`).then((res)=>{
    console.log(res);

     // Toastify success message
     toast.error("Item Deleted Successfully", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark "
  });
    
  })  .catch((err)=>{
    console.log(err);
    
  })
 }

  useEffect(() => {
    axios.get('/cources').then((res) => {
      setAllData(res.data.data);

    }).catch((err) => {
      console.log(err);

    })
  }, [submitData ,dleteData ])

  

  return (<>
  <ToastContainer />
  <div className="border mx-auto my-10 bg-gray-50 shadow rounded max-w-4xl w-full p-5">
  <h1 className="text-center text-3xl font-bold my-5 text-blue-600">Todo App</h1>

  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
    <input
      className="border shadow w-full md:w-[500px] p-2 rounded"
      placeholder="Type Todos"
      type="text"
      value={userInp}
      onChange={(e) => setUserInp(e.target.value)}
    />
    <button
      onClick={submitData}
      className="bg-blue-500 shadow text-white rounded px-4 py-2 w-full md:w-auto"
    >
      Add
    </button>
  </div>

  <div className="my-10">
    {allData.map((data) => (
      <div
        key={data._id}
        className="my-2 border shadow rounded-xl p-4 bg-gray-100"
      >
        <div className="flex items-center">
          <span>{data.name}</span>
          <div className="ms-auto">
            <button
              onClick={() => dleteData(data._id)}
              className="bg-red-500 text-white rounded px-4 py-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  </>)
}
export default TodoApp