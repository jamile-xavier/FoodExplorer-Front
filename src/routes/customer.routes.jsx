import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { DetailsDish } from "../pages/DetailsDish";
import { Profile } from "../pages/Profile";
import { PageNotFound } from "../pages/PageNotFound";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/detailsDish/:id" element={<DetailsDish />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
