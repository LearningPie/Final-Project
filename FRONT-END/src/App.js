import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import AdminHome from "./components/layout/AdminHome";
import UserList from "./components/layout/UserList";
import Frontpage from "./components/Frontpage";
import UserHome from "./components/userpages/UserHome";
import FAQ from "./components/layout/FAQ";
import AskQuestion from "./components/userpages/AskQuestion";
import PostQuestion from "./components/userpages/PostQuestion";
import PostAnswer from "./components/userpages/PostAnswer";
import UserProfile from "./components/userpages/UserProfile";
//import Home from "./components/Home";
import UpdateProfile from "./components/userpages/UpdateProfile";
import AboutUs from "./components/About Us";
//import AboutUs from "./components/About Us";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/" element={<Frontpage />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>

      {/* User routes */}
      <Routes>
        <Route path="/user" element={<UserHome />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/viewQuestion" element={<AskQuestion />} />
        <Route path="/postQuestion" element={<PostQuestion />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="/postAnswer" element={<PostAnswer />} />
      </Routes>

      {/* Admin routes */}
      <Routes>
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/userList" element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
