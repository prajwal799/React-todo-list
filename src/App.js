import { Github } from "./Component/Github";
import "./styles.css";
import { Login } from "./Component/Login";
import Todo from "./Component2/Todo.jsx";
import Todo1 from "./Component4/Todo1";

export default function App() {
  return (
    <div className="App">
      <h1 className="Todo">Todo App</h1>
      {/* <Github /> */}
      {/* <Login /> */}

      <Todo1 />
    </div>
  );
}
