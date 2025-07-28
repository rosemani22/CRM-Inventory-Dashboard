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



![Dashboard Screenshot](src/assets/Screenshot%20(861).png.png)
---


![Dashboard Screenshot](src/assets/Screenshot%20(862).png.png)



## 📁 Folder Structure

src/
├── components/
│ ├── Installations/
│ │ ├── InstallationForm.jsx
│ │ ├── InstallationList.jsx
│ │ 
│ ├── ThemeToggle.jsx
│ └── Header.jsx
├── redux/
│  └── slices/
│  | └── installationSlice.js
|  |___store.js 
|
├── services/
│ └── LocalStorageService.js
├── styles/
│ └── InstallationForm.module.scss
├ └── index.scss
  └── InstallationCard.module.scss
  └── theme.scss
├── utils/
│ └── LocalStorageService.js   
|   
|  
├── App.css 
├── App.jsx
├── index.css
└── main.jsx

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/device-crm-dashboard.git
cd device-crm-dashboard


Install Dependencies:-

npm install



Run the Development Server:-

npm run dev

Build for Production:-

npm run build
