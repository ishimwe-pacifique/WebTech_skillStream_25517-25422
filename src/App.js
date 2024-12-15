import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HomePage } from "./pages/Homepage";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Details } from "./pages/Details";
import { Login } from "./pages/Login";
import Dashboard from "./pages/dashboard";
import Users from "./pages/users";
import CoursesList from "./pages/coursesList";
import { Provider } from "react-redux";
import { store } from "./store";
import EnrollmentsList from "./pages/enrollments";
import RegisterUser from "./pages/registerUser";
import RegisterCourse from "./pages/registerCourse";
import { ToastContainer } from "react-toastify";
import EditCourse from "./pages/editCourse";
import AdminUsers from "./pages/adminUsers";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          {/* You can add a global toast notification container here */}
          <ToastContainer />
          
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<Details />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<AdminUsers />} />
            
            
            {/* Protected Routes - Dashboard */}
            <Route path="/dashboard" element={<Dashboard />}>
              {/* Dashboard Redirect */}
              <Route index element={<Navigate to="/dashboard/courses" />} />
              
              {/* Course Management */}
              <Route path="courses" element={<CoursesList />} />
              <Route path="courses/register" element={<RegisterCourse />} />
              <Route path="courses/edit/:id" element={<EditCourse />} />
              
              {/* User Management */}
              <Route path="users" element={<Users />} />
              <Route path="users/register" element={<RegisterUser />} />
              
              {/* Enrollment Management */}
              <Route path="enrollments" element={<EnrollmentsList />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
