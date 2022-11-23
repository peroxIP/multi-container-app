import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        
          <Routes>
            <Route path={"/"} element={<Fib />} />
            <Route path={"/otherpage"} element={<OtherPage />} />
          </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
