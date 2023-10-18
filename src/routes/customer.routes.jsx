import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { DetailsDish } from "../pages/DetailsDish";
import { Profile } from "../pages/Profile";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/detailsdish" element={<DetailsDish />} />
    </Routes>
  );
}
