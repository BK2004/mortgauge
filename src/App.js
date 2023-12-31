import React from "react";
import AggregateForm from "./components/AggregateForm.jsx";
import IndividualAnalysisForm from "./components/IndividualAnalysisForm.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Results from "./components/Results.jsx";
import Home from "./components/Home.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="aggregate" element={<AggregateForm />} />
          <Route path="individual" element={<IndividualAnalysisForm />} />
          <Route path="individual/results" element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
