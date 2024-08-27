import { Box, Button, ListItemText, styled } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../store/todoSlice/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [editedImageUrl, setEditedImageUrl] = useState("");

  const handleEdit = (id, task, imageUrl) => {
    setIsEditing(id);
    setEditedTask(task);
    setEditedImageUrl(imageUrl);
  };

  const handleSave = (id) => {
    dispatch(editTodo({ id, task: editedTask, imageUrl: editedImageUrl }));
    setIsEditing(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Box>
      {todos?.map((item) => (
        <StyledListItem key={item.id}>
          {isEditing === item.id ? (
            <StyledBox>
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
              <input
                type="text"
                value={editedImageUrl}
                onChange={(e) => setEditedImageUrl(e.target.value)}
              />
              <Button variant="outlined" color="primary" onClick={() => handleSave(item.id)}>
                Save
              </Button>
            </StyledBox>
          ) : (
            <StyledBox>
              <ListItemText primary={item.task} />
              <StyledImage src={item.imageUrl} alt={item.task} />
              <Button variant="outlined" color="primary" onClick={() => handleEdit(item.id, item.task, item.imageUrl)}>
                Edit
              </Button>
              <Button variant="outlined" color="error" onClick={() => handleDelete(item.id)}>
                Delete
              </Button>
            </StyledBox>
          )}
        </StyledListItem>
      ))}
    </Box>
  );
};

export default TodoList;

const StyledListItem = styled(Box)`
  width: 400px;
  background-color: bisque;
  margin: 0 auto;
  padding: 30px;
  transition: all 0.3s;
  &:hover {
    background-color: whitesmoke;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 300px;
`;

const StyledImage = styled("img")`
  width: 120px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
