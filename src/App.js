import Sidebar from "./components/DashboardComponent/Sidebar";
import Login from "./components/LoginComponent/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verfication from "./components/VerificationComponent/Verfication";
import Dashboard from './components/DashboardComponent/Dashboard'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Login />} />
          <Route path="verification" element={<Verfication />} />
          <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
