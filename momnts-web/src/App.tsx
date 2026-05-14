import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { router } from "./app.routes";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors />
    </>
  )
}

export default App;