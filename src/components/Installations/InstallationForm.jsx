import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  InputLabel,
  Select,
  FormControl,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { addInstallation } from '../../redux/slices/installationSlice';

const statusOptions = ['Online', 'Offline', 'Maintenance'];
const contractTypes = ['AMC', 'CMC', 'None'];

const InstallationForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: uuidv4(),
    deviceType: '',
    deviceId: '',
    facility: '',
    engineer: '',
    status: '',
    battery: '',
    lastServiceDate: '',
    amcStatus: '',
    contractType: '',
    notes: '',
    isAlert: 'No',
    files: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleFileChange = async (e) => {
    const selectedFiles = Array.from(e.target.files);
    const filePreviews = await Promise.all(
      selectedFiles.map(async (file) => {
        const base64 = await toBase64(file);
        return {
          name: file.name,
          type: file.type,
          content: base64,
        };
      })
    );
    setFormData({ ...formData, files: filePreviews });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addInstallation(formData));
    alert('Entry saved!');
    setFormData({
      id: uuidv4(),
      deviceType: '',
      deviceId: '',
      facility: '',
      engineer: '',
      status: '',
      battery: '',
      lastServiceDate: '',
      amcStatus: '',
      contractType: '',
      notes: '',
      isAlert: 'No',
      files: [],
    });
  };

  return (
    <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: 2, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Unified Device Entry Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Device Type" name="deviceType" fullWidth margin="normal" value={formData.deviceType} onChange={handleChange} />
        <TextField label="Device ID" name="deviceId" fullWidth margin="normal" value={formData.deviceId} onChange={handleChange} />
        <TextField label="Facility" name="facility" fullWidth margin="normal" value={formData.facility} onChange={handleChange} />
        <TextField label="Engineer Name" name="engineer" fullWidth margin="normal" value={formData.engineer} onChange={handleChange} />
        
        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select name="status" value={formData.status} onChange={handleChange}>
            {statusOptions.map((opt) => (
              <MenuItem key={opt} value={opt}>{opt}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField label="Battery %" name="battery" fullWidth margin="normal" value={formData.battery} onChange={handleChange} />
        <TextField type="date" label="Last Service/Installation Date" name="lastServiceDate" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={formData.lastServiceDate} onChange={handleChange} />
        <TextField label="AMC/CMC Status" name="amcStatus" fullWidth margin="normal" value={formData.amcStatus} onChange={handleChange} />
        
        <FormControl fullWidth margin="normal">
          <InputLabel>Contract Type</InputLabel>
          <Select name="contractType" value={formData.contractType} onChange={handleChange}>
            {contractTypes.map((type) => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Is Alert?</InputLabel>
          <Select name="isAlert" value={formData.isAlert} onChange={handleChange}>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>

        <TextField label="Notes" name="notes" fullWidth margin="normal" multiline rows={3} value={formData.notes} onChange={handleChange} />

        <Button variant="contained" component="label" sx={{ mt: 2 }}>
          Upload File(s)
          <input type="file" multiple hidden onChange={handleFileChange} />
        </Button>

        {formData.files && formData.files.map((f, i) => (
          <Typography key={i} mt={1}>{f.name}</Typography>
        ))}

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
          Save Entry
        </Button>
      </form>
    </Box>
  );
};

export default InstallationForm;


// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addInstallation } from '../../redux/slices/installationSlice';
// //import styles from '../../styles/InstallationForm.module.scss';
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Paper,
//   Container,
// } from '@mui/material';

// const InstallationForm = () => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     id: `INST-${Date.now()}`,
//     deviceId: '',
//     facility: '',
//     installationDate: '',
//     engineer: '',
//     notes: '',
//     files: [], // new field
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = async (e) => {
//     const files = Array.from(e.target.files);
//     const base64Files = await Promise.all(files.map(file => toBase64(file)));
//     setFormData(prev => ({ ...prev, files: base64Files }));
//   };

//   const toBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve({
//         name: file.name,
//         data: reader.result,
//         type: file.type
//       });
//       reader.onerror = error => reject(error);
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addInstallation(formData));
//     alert('Installation logged!');
//     setFormData({
//       id: `INST-${Date.now()}`,
//       deviceId: '',
//       facility: '',
//       installationDate: '',
//       engineer: '',
//       notes: '',
//       files: [],
//     });
//   };

//    return (
//      <Box
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#121212', // dark mode background
//         padding: 2
//       }}
//     >
//       <Container maxWidth="sm">
//          <Paper
//         elevation={4}
//         sx={{
//           width: '100%',
//           maxWidth: 500,
//           padding: 4,
//           backgroundColor: '#f9f9f9',
//           borderRadius: 3
//         }}
//       >
//           <Typography variant="h5" align="center" gutterBottom>
//             New Installation
//           </Typography>

//           <Box component="form" onSubmit={handleSubmit} noValidate>
//             <TextField fullWidth required label="Device ID" name="deviceId" value={formData.deviceId} onChange={handleChange} margin="normal" />
//             <TextField fullWidth required label="Facility" name="facility" value={formData.facility} onChange={handleChange} margin="normal" />
//             <TextField fullWidth required label="Engineer" name="engineer" value={formData.engineer} onChange={handleChange} margin="normal" />
//             <TextField fullWidth required type="date" label="Installation Date" name="installationDate" value={formData.installationDate} onChange={handleChange} margin="normal" InputLabelProps={{ shrink: true }} />
//             <TextField fullWidth label="Notes" name="notes" multiline rows={4} value={formData.notes} onChange={handleChange} margin="normal" />

//             <input
//               type="file"
//               multiple
//               onChange={handleFileChange}
//             style={{ marginTop: 16 }} 
//             />

//             <Button fullWidth type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
//               Submit
//             </Button>
//           </Box>
//         </Paper>
//       </Container>
//     </Box>
//   );
// };

// export default InstallationForm;