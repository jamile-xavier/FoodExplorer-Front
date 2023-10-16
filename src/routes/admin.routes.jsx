import { Routes, Route } from "react-router-dom";

import { AddDish } from "../pages/AddDish";
import { EditDish } from "../pages/EditDish";
import { Home } from "../pages/Home";
import { DetailsDish } from "../pages/DetailsDish";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adddish" element={<AddDish />} />
      <Route path="/editdish" element={<EditDish />} />
      <Route path="/detailsdish" element={<DetailsDish />} />
    </Routes>
  );
}
