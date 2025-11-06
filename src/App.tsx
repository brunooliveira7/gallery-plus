import { BrowserRouter, Routes, Route } from "react-router";
import PageComponentes from "./pages/page-componentes.tsx";
import LayoutMain from "./pages/layout-main.tsx";
import PageHome from "./pages/page-home.tsx";
import PagePhotoDetails from "./pages/page-photo-details.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/fotos/:id" element={<PagePhotoDetails />} />
          <Route path="/componentes" element={<PageComponentes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
