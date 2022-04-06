import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import AdminHome from "./components/layout/AdminHome";
import UserList from "./components/layout/UserList";
import AdminViewQuestion from "./components/layout/AdminViewQuestions";
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
import QuestionList from "./components/userpages/QuestionList";
import Dashboard from "./components/userpages/Dashboard";
import JoinGroup from "./components/userpages/JoinGroup";
import Group from "./components/userpages/Group";
import Demo from "./components/Demo";
import Datatable from "./components/Datatable";
import QuestionBank from "./components/QuestionBank";
import ViewGroup from "./components/ViewGroup";
import PostJoinGroup from "./components/userpages/postJoinGroup";
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
        <Route path="/questionList" element={<QuestionList />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/joinGroup" element={<JoinGroup></JoinGroup>} />
        <Route path="/createGroup" element={<Group />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/dataTable" element={<Datatable></Datatable>} />
        <Route path="/questionBank" element={<QuestionBank />} />
        <Route path="/viewGroup" element={<ViewGroup />} />
        <Route path="/postJoinGroup" element={<PostJoinGroup />} />
      </Routes>

      {/* Admin routes */}
      <Routes>
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/adminViewQuestion" element={<AdminViewQuestion />} />
      </Routes>
    </>
  );
}

export default App;
