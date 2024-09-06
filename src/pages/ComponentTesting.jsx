import React from "react";
import './ComponentTesting.css'
import CpfField from "../components/CpfField.jsx";

function ComponentTesting (){
    return (
        <>
            <div className="componentTesting">
                <p>
                    <CpfField/>
                    <CpfField/>
                </p>
            </div>

        </>
    )
}

export default ComponentTesting;