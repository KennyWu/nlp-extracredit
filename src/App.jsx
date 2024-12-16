import { HashRouter, Route, Routes } from "react-router-dom";
import Quiz from "./pages/Quiz.jsx";
import NavBar from "./components/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route index element={<Quiz />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
