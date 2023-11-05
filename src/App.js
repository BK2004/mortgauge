import React from "react";
import AggregateForm from "./components/AggregateForm.jsx";
import IndividualAnalysisForm from "./components/IndividualAnalysisForm.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<IndividualAnalysisForm />} />
          <Route path="aggregate" element={<AggregateForm />} />
          <Route path="individual" element={<IndividualAnalysisForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
