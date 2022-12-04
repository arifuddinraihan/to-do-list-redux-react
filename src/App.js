import { RouterProvider } from "react-router-dom";
import "./App.css";
import { TodoList } from "./Components/TodoList";
import { router } from "./Routes/MainRoute";

function App() {
  return (
    <div >
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
