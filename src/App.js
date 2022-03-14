import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutePaths from "./routes";

function App() {
  return (
    <Router>
      <RoutePaths />
    </Router>
  );
}

export default App;
