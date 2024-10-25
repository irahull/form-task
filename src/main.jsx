import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AppContext } from "./contexts/AppContext.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <AppContext>
    <App />
    <ToastContainer />
  </AppContext>
);
