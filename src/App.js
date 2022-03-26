import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Table from './components/Table';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
            path="/signup"
            exact
            element={<Signup/>}
        />
        <Route
            path="/login"
            exact
            element={<Login/>}
        />
        <Route
            path="/table"
            exact
            element={<Table/>}
        />
  </Routes>
    </BrowserRouter>
    
  );
}

export default App;
