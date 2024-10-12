import { ADD_NOTE } from "../actions/notesActionTypes";

// initial state

const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action) => {
  // log payload

  console.log("payload", action.payload);
  switch (action.type) {
    case ADD_NOTE:
      // new note
      const newNote = {
        id: Math.random(),
        title: action.payload.title,
        content: action.payload.content,
      };
      return {
        notes: [...state.notes, newNote],
      };
    default:
      return state;
  }
};

export default notesReducer;
