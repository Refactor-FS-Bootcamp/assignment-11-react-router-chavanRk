import "./components/style.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";
import SingleCourse from "./components/SingleCourse";
import AllCourses from "./components/AllCourses";
import Bundles from "./components/Bundles";
import Dashboard from "./components/Dashboard";
function App() {
  console.log("hello");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Navigate replace to="/courses" />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="allcourses" element={<AllCourses />}>
            <Route path=":id" element={<SingleCourse />} />
          </Route>
          <Route path="bundles" element={<Bundles />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
