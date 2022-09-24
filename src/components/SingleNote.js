import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import EditUserForm from "./EditNoteBook";
import { useDispatch } from "react-redux";
import { DeleteUser } from "../actions/userActions";

function User({ userData, deleteUser, handleEdit }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    dispatch(DeleteUser(userData.id));
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            handleEdit={handleEdit}
            hide={handleClose}
            userData={userData}
          />
        </Modal.Body>
      </Modal>
      <div className="card m-2" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Title :    { userData.title}</h5>
          <h5 className="card-title">Date :     {userData.date}</h5>
          <h6>{userData.textArea}</h6>
          <button
            className="btn btn-primary mr-3"
            onClick={handleShow}
            style={{ padding: ".5em 2em " }}
          >
            <iconify-icon icon="bxs:edit"></iconify-icon>
          </button>
          <button
            className="btn btn-primary mr-3"
            onClick={handleDelete}
            style={{ marginLeft: "1em" }}
          >
            <iconify-icon
              icon="fluent:delete-dismiss-20-regular"
              style={{ padding: ".2em 1.4em" }}
            ></iconify-icon>
          </button>
        </div>
      </div>
    </>
  );
}

export default User;
