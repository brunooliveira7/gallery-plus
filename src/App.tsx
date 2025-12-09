import { BrowserRouter, Routes, Route } from "react-router";
import PageComponents from "./pages/page-componentes.tsx";
import LayoutMain from "./pages/layout-main.tsx";
import PageHome from "./pages/page-home.tsx";
import PagePhotoDetails from "./pages/page-photo-details.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <BrowserRouter>
          <Routes>
            <Route element={<LayoutMain />}>
              <Route index element={<PageHome />} />
              <Route path="/fotos/:id" element={<PagePhotoDetails />} />
              <Route path="/componentes" element={<PageComponents />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NuqsAdapter>
    </QueryClientProvider>
  );
}
