import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
