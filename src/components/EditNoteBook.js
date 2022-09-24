import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { EditUser } from "../actions/userActions";

function EditNoteBook({ userData, deleteUser, handleEdit, hide }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(userData.title);
  const [date, setDate] = useState(userData.date);
  const [textArea, setTextArea] = useState(userData.textArea);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(EditUser({ id: userData.id, title, date, textArea }));
    setTitle("");
    setDate("");
    setTextArea("");
    hide();
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          <h5>Title</h5>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          <h5>Date</h5>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <br />
        <h5>Message</h5>
      </Form.Group>

      <textarea
        className="mb-3"
        style={{ width: "20em", height: "10em" }}
        type="text"
        value={textArea}
        onChange={(e) => {
          setTextArea(e.target.value);
        }}
      ></textarea>
      <br />

      <Button onClick={handleSubmit} variant="primary" type="submit">
        <iconify-icon
          icon="dashicons:admin-post"
          style={{ padding: ".3em 1.4em" }}
        ></iconify-icon>
      </Button>
    </Form>
  );
}

export default EditNoteBook;
