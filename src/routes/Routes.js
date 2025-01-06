import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EventDetails from "../pages/EventDetails";
import Registration from "../pages/Registration";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events/:eventId" element={<EventDetails />} />
      <Route path="/events/:eventId/register" element={<Registration />} />
    </Routes>
  );
}

export default AppRoutes;
