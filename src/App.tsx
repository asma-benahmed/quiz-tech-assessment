/*  istanbul ignore file  */

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NotFound from "./pages/404";
import MainLayout from "./layouts/main";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const basePath = "app";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <Routes>
          <Route index element={<Navigate to={basePath} />} />
          <Route path={basePath} element={<MainLayout />}>
            <Route index element={<Navigate to="quiz" />} />
            <Route path="*" element={<NotFound />} />
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
