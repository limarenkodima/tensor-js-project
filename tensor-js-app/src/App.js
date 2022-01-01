import "./App.css";
import FirstPage from "./components/FirstPage.js";
import SecondPage from "./components/SecondPage.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<FirstPage />}></Route>
          <Route exact path="/students" element={<SecondPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
