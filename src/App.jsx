import { BrowserRouter, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRoute>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
     </Routes>
    </BrowserRoute>
  );
}

export default App;
