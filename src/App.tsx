import { Provider } from "react-redux";
import { ThemeProvider } from '@mui/material/styles';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { store } from "./store";
import "./App.css";
import { theme } from "./theme";
import PetsPage from "./pages/pets";
import PetForm from "./pages/pets/components/pet-form";

const router = createBrowserRouter([
  {
    path: "/pets/list",
    element: <PetsPage />
  },
  {
    path: "/pets/create",
    element: <PetForm />
  }
])

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
