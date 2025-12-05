import { Routes, Route } from "react-router-dom";

import MainLayout from "./component/MainLayout";
import AuthLayout from "./component/AuthLayout";

import HomePage from "./component/HomePage";
import Info from "./component/Info";
import Login from "./component/Log_in";
import Register from "./component/Register";
// import Predict from "./component/Predict";
// import History from "./component/History";

function App() {
  return (
    <Routes>
      {/* Layout chính */}
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="info" element={<Info />} />
        {/* <Route path="predict" element={<Predict />} />
        <Route path="history" element={<History />} /> */}
      </Route>

      {/* Layout login/register */}
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="*" element={<div>404 - Page not found</div>} />
    </Routes>
  );
}

export default App;
