import './App.css'
import CpfField from "./components/cpfField.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Report from './pages/Report'
import Header from './components/Header'

function App(){
    return (
    <>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/report" element={<Report />} />
            </Routes>
        </Router>
        <div className="App">
            <p>
            <CpfField />
            </p>
        </div>
    </>
  )
}
export default App;