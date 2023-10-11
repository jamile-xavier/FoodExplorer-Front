import { Routes, Route } from "react-router-dom";

import { AddPlate } from "../pages/AddPlate";
import { EditPlate } from "../pages/EditPlate";
import { Home } from "../pages/Home";
import { Plate } from "../pages/Plate";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addplate" element={<AddPlate />} />
      <Route path="/editplate" element={<EditPlate />} />
      <Route path="/plate" element={<Plate />} />
    </Routes>
  );
}
