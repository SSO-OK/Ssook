import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Header from "./components/header";

function App() {
  const location = useLocation();

  const shouldShowHeader = location.pathname !== "/";

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
