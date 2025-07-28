import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteInstallation } from "../../redux/slices/installationSlice";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";

const InstallationList = () => {
  const dispatch = useDispatch();
  const installations = useSelector((state) => state.installations.data);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        All Entries (Device Inventory, Installation & AMC/CMC)
      </Typography>
      <Grid container spacing={2}>
        {installations.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6">{item.deviceType}</Typography>
                <Typography>ID: {item.deviceId}</Typography>
                <Typography>Facility: {item.facility}</Typography>
                <Typography>Engineer: {item.engineer}</Typography>
                <Typography>Status: {item.status}</Typography>
                <Typography>Battery %: {item.battery}</Typography>
                <Typography>
                  Last Service/Installation: {item.lastServiceDate}
                </Typography>
                <Typography>AMC/CMC Status: {item.amcStatus}</Typography>
                <Typography>Contract Type: {item.contractType}</Typography>
                <Typography>Notes: {item.notes}</Typography>

                {/* File Previews */}
                {item.files && item.files.length > 0 && (
                  <Box mt={2}>
                    <Typography variant="body2" fontWeight="bold">
                      Attachments:
                    </Typography>
                    <ul style={{ paddingLeft: "20px" }}>
                      {item.files.map((file, i) => (
                        <li key={i} style={{ marginBottom: "10px" }}>
                          {file.type.startsWith("image/") ? (
                            <img
                              src={file.content}
                              alt={file.name}
                              style={{
                                maxWidth: "100%",
                                height: "auto",
                                borderRadius: "6px",
                                marginTop: "4px",
                              }}
                            />
                          ) : (
                            <a
                              href={file.content}
                              download={file.name}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {file.name}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </Box>
                )}

                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  sx={{ mt: 2 }}
                  onClick={() => dispatch(deleteInstallation(item.id))}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InstallationList;


{/* // import { useSelector, useDispatch } from 'react-redux';
// import { deleteInstallation } from '../../redux/slices/installationSlice';
// import { Box, Typography, Card, CardContent, Button } from '@mui/material';
// import styles from '..//../styles/InstallationCard.module.scss';

// const InstallationList = () => { */}
{/* //   const installations = useSelector(state => state.installations.data);
//   const dispatch = useDispatch();

//   return (
//     <Box mt={4}>
//       <Typography variant="h5">Installations</Typography>
//       {installations.length === 0 && <Typography>No installations found.</Typography>}

//       {installations.map(install => ( */}
//         <Card
//           key={install.id}
//           className={styles.card}
//           sx={{
//             my: 2,
//             backgroundColor: '#ffffff',
//             boxShadow: 2,
//             borderRadius: 2,
//             border: '1px solid #e0e0e0',
//           }}
//         >
//           <CardContent>
//             <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
//               Device ID: {install.deviceId}
//             </Typography>
//             <Typography variant="body1" color="text.primary">
//               Facility: {install.facility}
//             </Typography>
//             <Typography variant="body1" color="text.primary">
//               Engineer: {install.engineer}
//             </Typography>
//             <Typography variant="body1" color="text.primary">
//               Date: {install.installationDate}
//             </Typography>
//             <Typography variant="body1" color="text.primary">
//               Notes: {install.notes}
//             </Typography>

//             {/* Show uploaded files */}
//             {install.files?.length > 0 && (
//               <>
//                 <Typography variant="body2" mt={1} fontWeight="bold" color="text.primary">
//                   Files:
//                 </Typography>
//                 <ul>
//                   {install.files.map((file, i) => (
//                     <li key={i}>
//                       <a
//                         href={file.data}
//                         download={file.name}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {file.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </>
//             )}

//             <Button
//               onClick={() => dispatch(deleteInstallation(install.id))}
//               color="error"
//               variant="outlined"
//               size="small"
//               sx={{ mt: 1 }}
//             >
//               Delete
//             </Button>
//           </CardContent>
//         </Card>
//       ))}
//     </Box>
//   );
// };

// export default InstallationList;
