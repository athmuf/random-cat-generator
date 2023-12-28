import "./App.css";
import Cat from "./components/Cat";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cat/:id" element={<Cat />} />
    </Routes>
  );
}

export default App;
