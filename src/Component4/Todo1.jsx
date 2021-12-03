import axios from "axios";
import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";

const getTodo = (page) => {
  const config = {
    method:"get",
    url: `http://localhost:3001/products?_page=${page}&_limit=2`,
  }
  return axios(config);
};

const updateTodo = (title,page) => {
  
  const payload = {
    titles:title,
    status:false,
  };
   const config = {
     method:"post",
     url:"http://localhost:3001/products?_limit=2",
     data:payload
   };
   return axios(config);
}
const Todo1 = () => {
  const [todo , setTodo] = useState([]);
const [isLoading , setIsLoading] = useState(false);
const [isError , setIsError] = useState(false);
const [page ,setPage] = useState(0);

useEffect(() => {
  setIsLoading(true);
  getTodo(page)
  .then((res) => {
    setTodo(res.data);
  })
  .catch((err) =>{
    setIsError(true);
  })
  setIsLoading(false);
},[page]);

// function updatePage() {
//     setPage(page+1);
//     getTodo(page)
// }
  function onSubmit(title){
    setIsLoading(true);
      updateTodo(title)
      getTodo(page)
      .then((res) => {
        setIsLoading(false);
        setTodo([...todo,res.data]);
      })
      .catch((err) =>{
        console.log(err);
        setIsError(true);
      })
  }
  if(isError){
    return <h1>...Some Error</h1>
  }
  if(isLoading){
    return <h1>...Loading</h1>
  }

  return (
 <div className="TodoList">
   <TodoInput  onSubmit={onSubmit}/>
    {todo.map((item) => (
      <h1 key={item.id}>{item.titles}</h1>
    ))}
     <button
       onClick={() => setPage(page-1)}>Prev</button>
    <button onClick={() => setPage(page+1)}>Next</button>
 </div>
  )
}
export default Todo1;