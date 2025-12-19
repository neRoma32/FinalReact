import { useState, useEffect } from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  List,
  Stack,
  CircularProgress,
  Box
} from "@mui/material";
import TodoItem from "./TodoItem";
import { useTodoStore } from "../../store/useTodoStore";

function TodoList() {
  const [text, setText] = useState("");
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const fetchTodos = useTodoStore((state) => state.fetchTodos);
  const isLoading = useTodoStore((state) => state.isLoading);

  useEffect(() => {
    if (todos.length === 0) {
      fetchTodos();
    }
  }, [fetchTodos, todos.length]);

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Todo List
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <TextField
          fullWidth
          label="New task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </Stack>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <List>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </List>
      )}
    </Container>
  );
}

export default TodoList;