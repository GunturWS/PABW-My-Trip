// import Login from "./Auth/Login";
// import Register from "./Auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import ResetPassword from "./Auth/ResetPassword";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
    // <div>
    //   <Login />
    //   <Register />
    // </div>
  );
};

export default App;
