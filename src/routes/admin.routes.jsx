import { Routes, Route } from "react-router-dom";

import { AddDish } from "../pages/AddDish";
import { EditDish } from "../pages/EditDish";
import { Home } from "../pages/Home";
import { DetailsDish } from "../pages/DetailsDish";
import { Profile } from "../pages/Profile";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/addDish" element={<AddDish />} />
      <Route path="/editDish/:id" element={<EditDish />} />
      <Route path="/detailsDish/:id" element={<DetailsDish />} />
    </Routes>
  );
}
