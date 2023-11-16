import "./App.css";
import { useState, useEffect, Fragment } from "react";
import { getTest } from "./functions/test.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
//import Layout from "./pages/layout/layout.jsx";
import Index from "./pages/index/index.jsx";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import Error from "./pages/error/error.jsx";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    getTest()
      .then((res) => {
        setData(res.message);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment className="App">
      <Router>
        <Routes>
          <Route index element={<Index />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
