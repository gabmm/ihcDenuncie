import { useState } from 'react';
import InputMask from 'react-input-mask';
const MSG_ERRO_CPF = "CPF inválido"
const MSG_VALIDADE_CPF = "CPF Válido"

function checkCpf(cpf){
    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;

    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

function formatCpf(cpf){
    return cpf.replaceAll(".","").replaceAll("_","").replace("-","");
}

export default function CpfField() {

    const [cpfErrorMsg, setCpfErrorMsg] = useState("");
    const [cpf, setCpf] = useState("");

    function handleChange(e) {
        let cpfToCheck = e.target.value;
        setCpf(cpfToCheck);
        cpfToCheck = formatCpf(cpfToCheck);

        if (cpfToCheck.length < 11) {
            setCpfErrorMsg("");
            setCpf(cpfToCheck);
        } else if (cpfToCheck.length === 11) {
            setCpf(cpfToCheck);
            if (checkCpf(cpfToCheck)) {
                setCpfErrorMsg(MSG_VALIDADE_CPF);
            } else {
                setCpfErrorMsg(MSG_ERRO_CPF);
            }
        } else {
            setCpf(cpfToCheck.slice(0, -1));
            setCpfErrorMsg(MSG_ERRO_CPF);
        }
    }

    return (
        <>
            <label>{cpfErrorMsg}</label><br/>
            <label>CPF: </label>
            <InputMask id="cpfinput" type='text' mask="999.999.999-99" value={cpf} onChange={handleChange}/>
        </>
    )
}