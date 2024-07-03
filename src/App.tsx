import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Header from "./components/header";
import Click from "./pages/Click";
import Library from "./pages/Library";
import Flashcard from "./pages/Flashcard";


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
        <Route path="/Library" element={<Library />} />
        <Route path="/Flashcard" element={<Flashcard />} />
      </Routes>
    </>
  );
}

export default App;
