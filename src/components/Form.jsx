import React, { useState } from "react";
import { TextField, Button, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice/todoSlice";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      task,
      imageUrl,
    };
    dispatch(addTodo(newTask));
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TextField
        label="New Task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <TextField
        label="Image URL"
        variant="outlined"
        value={imageUrl}
        type="url"
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <StyledButton type="submit" variant="contained" color="primary">
        Add
      </StyledButton>
    </FormContainer>
  );
};

export default TodoForm;

const FormContainer = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 400px;
  margin: 0 auto;
  height: 250px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 8px;
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  padding: 8px 70px;
`;
