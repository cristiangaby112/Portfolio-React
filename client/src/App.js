// import Home from "./PortfolioContainer/Home/Home";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />
    </div>
  );
}

export default App;
