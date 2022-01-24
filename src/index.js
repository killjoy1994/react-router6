import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="/learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          Courses
        </Route>
        <Route path="bundles" element={<Bundles />}>
          Bundles
        </Route>
      </Route>
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
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h1>Course List</h1>
      <h4>Course Card</h4>
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

function Error() {
  return (
    <div>
      <h1>Error Page</h1>
    </div>
  );
}

reportWebVitals();
