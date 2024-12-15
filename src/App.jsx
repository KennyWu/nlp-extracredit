import { HashRouter, Route, Routes } from "react-router-dom";
import Quiz from "./pages/Quiz.jsx";
import Home from "./pages/Home.jsx";
import NavBar from "./components/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
