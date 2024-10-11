import { ADD_NOTE, DELETE_NOTE, FETCH_NOTES } from "./notesActionTypes";

// initial state

// add note action

export const addNoteAction = (note) => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};

// delete action
export const deleteNoteAction = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
};

// fetch notes action
export const fetchAllNotes = () => {
  return {
    type: FETCH_NOTES,
  };
};
// reducer

// store

// dispatch
