import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { DetailsDish } from "../pages/DetailsDish";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detailsdish" element={<DetailsDish />} />
    </Routes>
  );
}
