import { ADD_NOTE, FETCH_NOTES } from "../actions/notesActionTypes";

// initial state

const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action) => {
  // log payload

  console.log("payload", action.payload);
  console.log("state", state);
  switch (action.type) {
    case ADD_NOTE:
      // new note
      const newNote = {
        id: Math.random(),
        title: action.payload.title,
        content: action.payload.content,
      };

      // add note to local storage

      const updatedNote = [...state, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNote));

      return {
        notes: [...state, newNote],
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
