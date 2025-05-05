import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router";
import { queryClient } from "./utils/queryClient";
import BoardPage from "./pages/BoardPage";
import Layout from "./pages/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/board", element: <BoardPage /> }]
  }
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
