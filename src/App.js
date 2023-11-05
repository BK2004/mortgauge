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
          <Route index element={<div>hello</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
