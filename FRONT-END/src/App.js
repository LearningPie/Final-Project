import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import AdminHome from "./components/layout/AdminHome";
import Frontpage from "./components/Frontpage";
import UserHome from "./components/userpages/UserHome";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/" element={<Frontpage />} />
      </Routes>

         {/* User routes */}
      <Routes>
        <Route path="/user" element={<UserHome />} />
      </Routes>

       {/* Admin routes */}
      <Routes>
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
    </>
  );
}

export default App;
