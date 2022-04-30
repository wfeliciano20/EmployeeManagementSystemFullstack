import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import Add from './Pages/Add';
import EditPage from "./Pages/EditPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/add" element={<Add />} />
          <Route path="edit/:id" element={<EditPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
