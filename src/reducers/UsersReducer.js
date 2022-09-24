import { v4 as uuidv4 } from "uuid";

let initialState = {
  users: [
    {
      title: " Evolution Theory",
      date: " 05/04/0005",
      textArea:
        "For a course that breaks down every aspect of modern progressive web app development, check out Learn PWA. Table of Contents. Introduction. Make it installable.",
      id: uuidv4(),
    },
  ],
};

let UsersReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "DELETE_USER":
      const tempUser = state.users.filter((user) => user.id !== action.payload);
      return { ...state, users: tempUser };
    case "EDIT_USER":
      const temp = state.users.map((item) => {
        if (item.id === action.payload.data.id) {
          return action.payload.data;
        } else {
          return item;
        }
      });
      return { ...state, users: temp };
    default:
      return state;
  }
};

export default UsersReducers;
