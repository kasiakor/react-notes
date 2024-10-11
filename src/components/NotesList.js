import React, { useEffect } from "react";
import "./NotesList.css";

const NotesList = () => {
  return (
    <>
      <h1>Notes List</h1>

      <div className="item-container">
        <div className="item-content">
          <h2>title</h2>
          <p>content</p>
          <button>Delete</button>
        </div>
      </div>
    </>
  );
};

export default NotesList;
