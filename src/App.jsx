import './App.css'
import Form from "./Form.jsx";
import GetSum from "./GetSum.jsx";
import { useState } from "react";



function App() {

    const onSubmit = () => {
        console.log('Submitting...');
    }

    return (
    <>
        <div className="App">
            <GetSum />
            <Form onSubmit={onSubmit}/>
        </div>
    </>
  )
}

export default App
