import { createBrowserRouter } from "react-router-dom";
import { TodoList } from "../Components/TodoList";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <TodoList></TodoList>
    }
])