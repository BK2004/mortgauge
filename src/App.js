import MainLayout from "./layouts/MainLayout.jsx";
import Results from "./components/Results.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={<Results creditScore={400} LTV={90} DTI={50} FEDTI={30} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
