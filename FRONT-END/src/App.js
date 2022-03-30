import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import AdminHome from "./components/layout/AdminHome";
import Frontpage from "./components/Frontpage";
import UserHome from "./components/userpages/UserHome";
import FAQ from "./components/layout/FAQ";
import AskQuestion from "./components/userpages/AskQuestion";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/" element={<Frontpage />} />
        <Route path="/FAQ" element={<FAQ />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>

      {/* User routes */}
      <Routes>
        <Route path="/user" element={<UserHome />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/AskQuestion" element={<AskQuestion />} />
      </Routes>

      {/* Admin routes */}
      <Routes>
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
    </>
  );
}

export default App;
