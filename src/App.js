import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import AddNoteBookForm from "./components/AddNoteBookForm";
import AllNotes from "./components/AllNotes";
import "./App.css"

function App() {
  const [users, setUsers] = useState([
    {
      title: "Evolution Theory",
      date: "eee",
      textArea: "ejjbehjh",
      id: "1659431734534",
    },
  ]);

  const handleSubmit = (user) => {
    setUsers([
      ...users,
      {
        nametitle: user.nametitle,
        date: user.date,
        textArea: user.textArea,
        id: new Date().getTime().toString(),
      },
    ]);
  };

  // delete user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // edit user
  const handleEdit = (id, newInfo) => {
    setUsers(users.map((user) => (user.id === id ? newInfo : user)));
  };
  return (
    <>
    <h2 className="main__header">Add a web note</h2>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-6">
            <AddNoteBookForm addUser={handleSubmit} />
          </div>
          <div className="col-md-6">
            <AllNotes
              userData={users}
              deleteUser={deleteUser}
              handleEdit={handleEdit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
