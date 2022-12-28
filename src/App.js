import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Router";

function App() {
  return (
    <div className="max-w-7xl mx-auto dark:bg-slate-900 dark:text-white bg-white h-screen">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
