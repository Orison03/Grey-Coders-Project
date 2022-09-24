import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, connect } from "react-redux";
import { AddNewUser } from "../actions/userActions";

function AddNoteBookForm({ AddNewUser }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [textArea, setTextArea] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    AddNewUser({ title, date, textArea, id: uuidv4() });
    setTitle("");
    setDate("");
    setTextArea("");
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          <h5>Title</h5>
        </Form.Label>
        <Form.Control
          type="Title"
          value={title}
          placeholder="Enter your title"
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
          type="date"
          value={date}
          placeholder="Enter your date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <br />
        <h5>Message</h5>
      </Form.Group>

      <textArea
        className="mb-3"
        controlId="formBasicPassword"
        style={{ width: "30em", height: "10em" }}
        placeholder="Enter your message"
        value={textArea}
        onChange={(e) => {
          setTextArea(e.target.value);
        }}
      >
      </textArea>
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
const mapDispatch = { AddNewUser: AddNewUser };

export default connect(null, mapDispatch)(AddNoteBookForm);
