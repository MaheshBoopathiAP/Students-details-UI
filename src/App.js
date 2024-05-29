// src/App.js
import React from 'react';
import StudentTable from './components/StudentTable';
import Sidebar from './components/SidebarPage';

function App() {
  return (
    <div className="App flex h-screen bg-[#6754b3]">
      <Sidebar />
      <div className="flex-grow mr-5">
        <StudentTable />
      </div>
    </div>
  );
}

export default App;
