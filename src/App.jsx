import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AddJob, AllJobs, Dashboard, Error404, Home, Login, Main, Profile, Register } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoute } from "./components";

const App = () => {
  return (
    <section className="h-screen w-screen overflow-y-scroll md:overflow-hidden">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/" element={<Main />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="all-jobs" element={<AllJobs />} />
            <Route path="add-job" element={<AddJob />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
      <ToastContainer position="top-center" />
    </section>
  );
};

export default App;
