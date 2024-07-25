import React, { useContext } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { TodosContext } from "../contexts/TodosContext";

export const TodoList = () => {
  const { todos, removeTodo } = useContext(TodosContext);

  return (
    <Box sx={{ width: "100%", maxWidth: 360, mt: 2 }}>
      {todos.length > 0 && <Paper sx={{ p: 2 }}>
        <List>
          {todos.map((todo, index) => (
            <Paper key={index} sx={{ mb: 1, p: 1 }}>
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => removeTodo(todo.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={todo.text} />
              </ListItem>
            </Paper>
          ))}
        </List>
      </Paper>}
    </Box>
  );
};
