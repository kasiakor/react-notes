import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllNotes } from "../redux/actions/notesAction";
import "./NotesList.css";

const NotesList = () => {
  // dispatch action
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllNotes());
    // eslint-disable-next-line
  }, []);

  const notes = useSelector((storeData) => {
    return storeData.notes;
  });

  console.log("notes", notes);

  return (
    <>
      <h1>Notes List</h1>
      {notes?.map((note) => (
        <div key={note.id} className="item-container">
          <div className="item-content">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default NotesList;
