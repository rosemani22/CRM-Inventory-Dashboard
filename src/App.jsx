// src/App.jsx
// src/App.jsx
import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import InstallationForm from './components/Installations/InstallationForm';
import InstallationList from './components/Installations/InstallationList';
import { Container, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const installations = useSelector((state) => state.installations.data);
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  };

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
      },
    }), [mode]);

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header mode={mode} toggleTheme={toggleTheme} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 64px)', // subtract AppBar height
          backgroundColor: 'background.default',
          px: 2,
          py: 4,
        }}
      >

      <Container maxWidth="md" >
        <InstallationForm />
        <Box mt={4}>
        {installations.length > 0 && <InstallationList />}
        </Box>
      </Container>
      </Box>
    </ThemeProvider>
    </>
  );
}

export default App;

{/* // import React from 'react';
// import { useSelector } from 'react-redux';
// import InstallationForm from './components/Installations/InstallationForm';
// import InstallationList from './components/Installations/InstallationList';
// import { Container } from '@mui/material';
// import Header from './components/Header';
// import ThemeToggle from './components/ThemeToggle';

// function App() { */}
{/* //   const installations = useSelector((state) => state.installations.data);

//   return (
  
//     <Container maxWidth="md" sx={{ py: 4 }}>
//       <Header />

//       {/* Unified Form */}
//</>       <InstallationForm />

//       {/* Show List Immediately Below Form If Entries Exist */}
//       {installations.length > 0 && ( */}
//         <InstallationList />
//       )}
//     </Container>

//   );
// }

// export default App;
