# Device CRM + Inventory Dashboard

A responsive web application built with React, Redux Toolkit, and Material UI for managing device inventory, installations, service visits, and AMC/CMC tracking — all through a unified interface.

## 🛠 Tech Stack

- **Frontend:** React (with Vite)
- **UI Framework:** Material UI (MUI)
- **State Management:** Redux Toolkit
- **Styling:** SCSS Modules
- **Data Persistence:** localStorage (base64 file storage supported)
- **File Handling:** File upload with preview and base64 storage

---

## ✅ Features

- 📦 **Device Inventory Management**  
  Add and track device type, ID, battery %, and facility location.

- ⚙️ **Installation & Service Logging**  
  Record installation/training details and maintenance info in one unified form.

- 🔄 **AMC/CMC Tracker**  
  Capture AMC/CMC status and contract types alongside service dates.

- 📁 **File Upload with Preview**  
  Upload images or documents — stored and displayed using base64 encoding.

- 🌗 **Light/Dark Theme Toggle**  
  Simple theme switcher with persistent state using `localStorage`.

- 🧾 **Clean Card-Based UI**  
  Responsive layout using Material UI cards for better data visualization.



![Dashboard Screenshot 1](./assets/dashboard-1.png)

![Dashboard Screenshot 2](./assets/dashboard-2.png)



## 📁 Folder Structure

<pre><code>src/ ├── components/ │ ├── Installations/ │ │ ├── InstallationForm.jsx │ │ └── InstallationList.jsx │ ├── ThemeToggle.jsx │ └── Header.jsx ├── redux/ │ ├── slices/ │ │ └── installationSlice.js │ └── store.js ├── services/ │ └── LocalStorageService.js ├── styles/ │ ├── InstallationForm.module.scss │ ├── index.scss │ ├── InstallationCard.module.scss │ └── theme.scss ├── utils/ │ └── LocalStorageService.js ├── App.css ├── App.jsx ├── index.css └── main.jsx </code></pre>

## 🛠️ Tech Stack

- **React + Vite**
- **Redux Toolkit**
- **Material UI**
- **SCSS Modules**
- **localStorage for persistence**

---

## 📷 Screenshots

| Form UI (Light Mode) | Dark Mode |
|----------------------|-----------|
| ![Form Light](./assets/form-light.png) | ![Form Dark](./assets/form-dark.png) |

> 📌 Add your screenshots to `/assets` folder and update the image paths above.

---

## 🧪 Dummy Data for Testing

Try submitting the following entries:


{
  "deviceType": "Oxygen Concentrator",
  "deviceId": "OX-1001",
  "facility": "Apollo Hospital, Delhi",
  "engineer": "John Doe",
  "status": "Online",
  "battery": 78,
  "installationDate": "2024-06-15",
  "amcStatus": "Active",
  "contractType": "AMC",
  "notes": "Installed and tested successfully."
}
📦 Running the Project
Clone the repo:

git clone https://github.com/yourusername/device-crm-dashboard.git
cd device-crm-dashboard

Install dependencies:


npm install

Start the development server:


npm run dev


Build for Production:-

npm run build
