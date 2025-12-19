import React from 'react';
import {
  Container, Typography, Box, Chip, Stack
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import SchoolIcon from '@mui/icons-material/School';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '15vh',
          marginBottom: 6
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
          Student Portfolio
        </Typography>

        <Typography variant="h5" color="text.secondary" paragraph sx={{ maxWidth: '600px', margin: '0 auto', mb: 4 }}>
          Фінальний проєкт курсу React.
          Це SPA-застосунок, який демонструє володіння сучасним стеком веб-розробки.
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ flexWrap: 'wrap', gap: 1 }}
        >
          <Chip icon={<CodeIcon />} label="React + Vite" color="primary" variant="outlined" />
          <Chip icon={<BrushIcon />} label="Material UI" color="secondary" variant="outlined" />
          <Chip icon={<StorageIcon />} label="Zustand State" color="success" variant="outlined" />
          <Chip icon={<SchoolIcon />} label="React Router" color="info" variant="outlined" />
        </Stack>
      </Box>

      <Box sx={{ mt: 'auto', textAlign: 'center', opacity: 0.6, pb: 4 }}>
        <Typography variant="caption">
          © 2025 Student Portfolio Project
        </Typography>
      </Box>

    </Container>
  );
};

export default Home;