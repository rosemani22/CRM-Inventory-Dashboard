// // src/components/Header.jsx
// src/components/Header.jsx
// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import ThemeToggle from './ThemeToggle';

const Header = ({ mode, toggleTheme }) => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Device CRM + Inventory Dashboard
          </Typography>
          <ThemeToggle mode={mode} toggleTheme={toggleTheme} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

// import React from 'react';
// import { AppBar, Toolbar, Typography, Box } from '@mui/material';
// import ThemeToggle from './ThemeToggle';

// const Header = () => {
//   return (
//     <AppBar position="static" color="default" elevation={1}>
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <Typography variant="h6" component="div" sx={{ mr: 2 }}>
//             Device CRM + Inventory Dashboard
//           </Typography>
//           <ThemeToggle />
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

// src/components/Header.jsx
// import React from 'react';
// import { AppBar, Toolbar, Typography, Box } from '@mui/material';
// import ThemeToggle from './ThemeToggle';

// const Header = () => {
//   return (
   
//       <AppBar position="static" color="default" elevation={1}>
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Typography variant="h6">
          
//             Device CRM + Inventory Dashboard
            
//           </Typography>
//           <Box>
//             {/* Theme toggle is inside ThemeToggle itself */}
//           </Box>
//         </Toolbar>
//       </AppBar>
   
//   );
// };

// export default Header;

// import React from 'react';
// import { AppBar, Toolbar, Typography , Box} from '@mui/material';
// import ThemeToggle from './ThemeToggle';

// const Header = () => {
//   return (
//     <AppBar position="static" color="default elevation={1}">
//       <Toolbar sx={{display: " flex", justifyContent: "space-between"}}>
//         <Typography variant="h6" component="div">
//           Device CRM  + Inventory Dashboard
//         </Typography>
//         <Box>
//               <ThemeToggle />
//         </Box>
    
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;
