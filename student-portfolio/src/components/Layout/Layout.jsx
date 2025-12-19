import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Button, Container,
  Box, Switch, FormControlLabel
} from "@mui/material";
import { useThemeStore } from "../../store/useThemeStore";

const Layout = () => {
  const { mode, toggleTheme } = useThemeStore();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Головна</Button>
          <Button color="inherit" component={Link} to="/lab1">Лаба 1</Button>
          <Button color="inherit" component={Link} to="/lab2">Лаба 2</Button>
          <Button color="inherit" component={Link} to="/lab3">Address Book</Button>
          <Button color="inherit" component={Link} to="/todo-list">Todo List</Button>

          <Box sx={{ flexGrow: 1 }} />

          <FormControlLabel
            control={
              <Switch
                checked={mode === 'dark'}
                onChange={toggleTheme}
                color="default"
              />
            }
            label={mode === 'dark' ? 'Dark' : 'Light'}
          />
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 4, paddingBottom: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;