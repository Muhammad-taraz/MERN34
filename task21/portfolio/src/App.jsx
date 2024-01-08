import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Blogs />
    </React.Fragment>
  );
}

export default App;
