import React from "react";
import "./Laptop.css";
import Sidebar from "../../src/components/Sidebar/Sidebar";
import LHome from "../components/Home_Section/LHome";
import LNotes from "../components/Notes/LNotes";
import UseContext from "../useContext";

function Laptop() {
  const { selected } = UseContext();

  return (
    <div className="laptop">
      <Sidebar />
      {selected.length > 0 ? <LNotes /> : <LHome />}
    </div>
  );
}

export default Laptop;
