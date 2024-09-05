import './App.css'
import Form from "./Form.jsx";
import GetSum from "./GetSum.jsx";
import Header from './components/Header.jsx';
import { useState } from "react";



function App() {

    const onSubmit = () => {
        console.log('Submitting...');
    }

    return (
    <>
        <div className='App'>
            <Header/>
            <div className="content">
                <GetSum />
                <Form onSubmit={onSubmit}/>
            </div>
        </div>
        
    </>
  )
}

export default App
