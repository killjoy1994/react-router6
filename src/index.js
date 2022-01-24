import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams, NavLink, useNavigate, useLocation } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="/learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseid" element={<CourseId />} />
        </Route>
        <Route path="bundles" element={<Bundles />}></Route>
      </Route>
      <Route path="/dashboard" element={<DashBoard />} />
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  </Router>,
  document.getElementById("root")
);

function Home() {
  return (
    <div>
      <h1>Home route</h1>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All courses are listed here</h4>
      <Link className="btn btn-success" to="/learn/courses">
        Course
      </Link>{" "}
      <Link className="btn btn-primary" to="/learn/bundles">
        Bundle
      </Link>
      <Outlet />
    </div>
  );
}

function Courses() {
  const courseList = ["React", "Angular", "Vue", "NodeJS"];
  const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)];

  return (
    <div>
      <h1>Course List</h1>
      <h4>Course Card</h4>

      <p>More test</p>
      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "pink" : "yellow",
          };
        }}
        to={`/learn/courses/${randomCourseName}`}
      >
        {randomCourseName}
      </NavLink>
      <NavLink className="btn btn-light" to={`/learn/courses/tests`}>
        tests
      </NavLink>
      <Outlet />
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1>Bundle List</h1>
      <h4>Bundle Card</h4>
    </div>
  );
}

function CourseId() {
  const navigate = useNavigate();
  const { courseid } = useParams();
  return (
    <div>
      <h1>Url params is: {courseid}</h1>
      <button
        onClick={() => {
          navigate("/dashboard", { state: courseid });
        }}
        className="btn btn-warning"
      >
        Price
      </button>
      <Link to="/dashboard" state={"Django"}>
        tests
      </Link>
    </div>
  );
}

function DashBoard() {
  const location = useLocation();
  return (
    <div>
      <h1>Info that i got here is {location.state}</h1>
    </div>
  );
}

function Error() {
  return (
    <div>
      <h1>Error Page</h1>
    </div>
  );
}

reportWebVitals();
