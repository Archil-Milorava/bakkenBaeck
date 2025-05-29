import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Clients from "./pages/Clients";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/clients" element={<Clients />} />
    </Routes>
  );
};

export default App;
