import Sidebar from "./components/DashboardComponent/Sidebar";
import Login from "./components/LoginComponent/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verfication from "./components/VerificationComponent/Verfication";
import Dashboard from './components/DashboardComponent/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Login />} />
        <Route path="verification" element={<Verfication />} />
        <Route
          path="/dashboard"
          element={
            <div style={{ display: "flex",  background: "rgba(26, 29, 38, 1)" }}>
              <Sidebar />
              <div>
                <Dashboard />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
