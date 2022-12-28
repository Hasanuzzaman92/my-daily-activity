import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";
import MyTask from "../Pages/MyTask/MyTask";
import LogIn from "../Pages/SharedPage/LogIn";
import SignUp from "../Pages/SharedPage/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <AddTask />,
      },
      {
        path: "/addtask",
        element: <AddTask />,
      },
      {
        path: "/mytask",
        element: <MyTask />,
      },
      {
        path: "/completedtask",
        element: <CompletedTask />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
