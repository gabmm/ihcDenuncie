import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Report from './pages/Report'
import Header from './components/Header'
import ComponentTesting from "./pages/ComponentTesting.jsx";

function App(){
    return (
    <>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/report" element={<Report />} />
                <Route path="/componentTesting" element={<ComponentTesting />} />
            </Routes>
        </Router>
    </>
  )
}
export default App;