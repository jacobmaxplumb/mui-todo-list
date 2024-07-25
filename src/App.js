import { Route, Routes } from "react-router-dom";
import { SignIn } from "./components/SignIn";
import { TodosPage } from "./components/TodosPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<SignIn />} />
        <Route path="todos" element={<TodosPage />} />
      </Routes>
    </div>
  );
}

export default App;
