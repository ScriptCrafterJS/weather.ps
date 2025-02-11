import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home"; // Home page for weather dashboard
import { MainPage } from "./pages/MainPage"; // Main page for weather dashboard
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
