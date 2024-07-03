import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Header from "./components/header";
import Click from "./pages/Click";
import Library from "./pages/Library";
import Choice from "./pages/choice";

function App() {
  const location = useLocation();

  const shouldShowHeader = location.pathname !== "/";

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Click" element={<Click />} />
        <Route path="/Library" element={<Library />} />-
        <Route path="/Chocie" element={<Choice />} />
      </Routes>
    </>
  );
}

export default App;
