import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Addtask from "./components/Addtask/Addtask";
import Completedtask from "./components/Completedtask/Completedtask";
import Error from "./components/Error/Error";
import Login from "./components/Login/Login";
import Mytask from "./components/Mytask/Mytask";
import Signup from "./components/Signup/Signup";
import Update from "./components/Update/Update";
import Main from "./layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Addtask></Addtask>,
      },
      {
        path: "/mytasks",
        element: <Mytask></Mytask>,
      },
      {
        path: "/update",
        element: <Update></Update>,
      },
      {
        path: "/addtask",
        element: <Addtask></Addtask>,
      },
      {
        path: "/completedtask",
        element: <Completedtask></Completedtask>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
  // {
  //   path: "/signup",
  //   element: <Signup></Signup>,
  // },
  // {
  //   path: "/login",
  //   element: <Login></Login>,
  // },
]);
function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </QueryClientProvider>
    </div>
  );
}

export default App;
