import { ADD_NOTE, FETCH_NOTES } from "../actions/notesActionTypes";

// initial state

const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action) => {
  // log payload

  console.log("payload", action.payload);
  console.log("state ddd.notes", state.notes);

  switch (action.type) {
    case ADD_NOTE:
      // new note
      const newNote = {
        id: Math.random(),
        title: action.payload.title,
        content: action.payload.content,
      };

      //add note into storage
      const updatedNotes = [...(state.notes || []), newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return {
        notes: [...(state.notes || []), newNote],
      };

    case FETCH_NOTES:
      return JSON.parse(localStorage.getItem("notes"))
        ? JSON.parse(localStorage.getItem("notes"))
        : [];
    default:
      return state;
  }
};

export default notesReducer;
