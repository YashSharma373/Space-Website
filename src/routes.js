import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

const RoutePaths = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default RoutePaths;
