import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/edit/:id" element={<EditNote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
