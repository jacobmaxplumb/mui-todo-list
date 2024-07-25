import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Copyright } from "./SignIn";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

const defaultTheme = createTheme();

export const TodosPage = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            My Todo List
          </Typography>
          <TodoForm />
          <TodoList />
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};
