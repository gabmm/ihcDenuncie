import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Report from './pages/Report'
import Header from './components/Header'
import Relatorio from "./pages/Relatorio.jsx";

function App(){
    return (
    <>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/report" element={<Report />} />
                <Route path="/record" element={<Relatorio />} />
            </Routes>
        </Router>
    </>
  )
}
export default App;