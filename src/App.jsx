import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" Component={Home} />       
      </Routes>
    </BrowserRouter>
  );
}

export default App;