import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AllJobs, Dashboard, Home, Login, Main, Register } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <section className="h-screen w-screen overflow-y-scroll md:overflow-hidden">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<Dashboard />} />
          <Route path="profile" element={<Dashboard />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" />
    </section>
  );
};

export default App;
