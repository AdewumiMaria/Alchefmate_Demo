import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
