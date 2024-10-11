import { ADD_NOTE } from "../actions/notesActionTypes";

// initial state

const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      // new note
      const newNote = {
        id: Math.random(),
        title: action.payload.title,
        content: action.payload.content,
      };
      return {
        notes: [...state, newNote],
      };
    default:
      return state;
  }
};

export default notesReducer;
