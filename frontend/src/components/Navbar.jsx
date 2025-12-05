import React from "react";
import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <Link to="/" className="navbar-brand">
        Notes App
      </Link>
      <Link to="/add" className="btn btn-primary">
        <PlusCircle size={20} />
        Add Note
      </Link>
    </nav>
  );
};

export default Navbar;
