import Layout from "./components/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Layanan from "./pages/Layanan";
import Pemesanan from "./pages/Pemesanan";
import Promo from "./pages/Promo";
import Tentang from "./pages/Tentang";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/pemesanan" element={<Pemesanan/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
