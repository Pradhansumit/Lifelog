import Login from "@/page/Login";
import { BrowserRouter, Routes, Route } from "react-router";
import Register from "@/page/Register";
import Dashboard from "@/page/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
