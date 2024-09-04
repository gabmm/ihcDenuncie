import { useState } from "react";

export default function GetSum() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [numRes, setNumRes] = useState(0);

    const handleSum = () => {
        setNumRes(num => num = parseInt(num1) + parseInt(num2));
    }

    return (
        <>
            <label>Numero 1: </label><input id="input1" type="text" onChange={e => setNum1((e.target.value))}/><br/>
            <label>Numero 2: </label><input id="input2" type="text" onChange={(e) => setNum2(e.target.value)}/><br/>
            <button onClick={handleSum}>Somar</button><br/>
            <p>Soma: {numRes}</p>
        </>
    )
}