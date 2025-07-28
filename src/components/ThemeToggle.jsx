// // src/components/ThemeToggle.jsx
// src/components/ThemeToggle.jsx
import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ThemeToggle = ({ mode, toggleTheme }) => {
  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  );
};

export default ThemeToggle;

// import React, { useEffect, useMemo, useState } from 'react';
// import { IconButton, CssBaseline } from '@mui/material';
// import { Brightness4, Brightness7 } from '@mui/icons-material';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const ThemeToggle = ({ children }) => {
//   const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');

//   const toggleTheme = () => {
//     const newMode = mode === 'light' ? 'dark' : 'light';
//     setMode(newMode);
//     localStorage.setItem('theme', newMode);
//   };

//   const theme = useMemo(() => createTheme({
//     palette: {
//       mode,
//       ...(mode === 'dark'
//         ? {
//             background: {
//               default: '#1c1c1e',     // slightly softer than pure black
//               paper: '#2c2c2e',
//             },
//             text: {
//               primary: '#f5f5f5',
//               secondary: '#aaaaaa',
//             },
//             primary: {
//               main: '#90caf9',
//             },
//           }
//         : {
//             background: {
//               default: '#f5f5f5',
//               paper: '#ffffff',
//             },
//           }),
//     },
//     components: {
//       MuiCard: {
//         styleOverrides: {
//           root: {
//             backgroundColor: mode === 'dark' ? '#2c2c2e' : '#ffffff',
//           },
//         },
//       },
//       MuiInputBase: {
//         styleOverrides: {
//           root: {
//             backgroundColor: mode === 'dark' ? '#3a3a3c' : '#ffffff',
//             color: mode === 'dark' ? '#f5f5f5' : '#000000',
//           },
//         },
//       },
//     },
//   }), [mode]);

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
    
// <IconButton onClick={toggleTheme} color="inherit">
//   {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
// </IconButton>

//       {children}
//     </ThemeProvider>
//   );
// };

// export default ThemeToggle;








// import { useState, useEffect } from 'react';
// import { IconButton } from '@mui/material';
// import { Brightness4, Brightness7 } from '@mui/icons-material';

// const ThemeToggle = () => {
//   const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');

//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', mode);
//     localStorage.setItem('theme', mode);
//   }, [mode]);

// const toggleTheme = () => {
//     setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <IconButton onClick={toggleTheme} color="inherit">
//       {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
//     </IconButton>
//   );
// };

// export default ThemeToggle;

