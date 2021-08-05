import Home from "./containers/HomeContainer";

// ROUTER
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "../src/navigation/RouterConfig";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  );
}

export default App;
