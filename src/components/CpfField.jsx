import { useState } from 'react';
import InputMask from 'react-input-mask';
import './CpfField.css'
const MSG_ERROR_CPF = "CPF inválido";
const MSG_VALID_CPF = "CPF Válido";
const VALID_CPF_CLASSNAME = "valid-cpf";
const INVALID_CPF_CLASSNAME = "invalid-cpf";

export default function CpfField() {

    const [cpfErrorMsg, setCpfErrorMsg] = useState("");
    const [cpf, setCpf] = useState("");
    const [cpfMsgParameters, setCpfMsgParameters] = useState("");

    function formatCpf(cpf){
        return cpf.replaceAll(".","").replaceAll("_","").replace("-","");
    }
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
    function handleChange(e) {
        let cpfToCheck = e.target.value;
        setCpf(cpfToCheck);
        cpfToCheck = formatCpf(cpfToCheck);

        if (cpfToCheck.length < 11) {
            setCpfErrorMsg("");
            setCpfMsgParameters("");
        } else {
            if (checkCpf(cpfToCheck)) {
                setCpfErrorMsg(MSG_VALID_CPF);
                setCpfMsgParameters(VALID_CPF_CLASSNAME)
            } else {
                setCpfErrorMsg(MSG_ERROR_CPF);
                setCpfMsgParameters(INVALID_CPF_CLASSNAME)
            }
        }
    }

    return (
        <>
            <div className={cpfMsgParameters}>
            <label>{cpfErrorMsg}</label><br/>
            </div>
            <label>CPF: </label>
            <InputMask id="cpfinput" type='text' mask="999.999.999-99" value={cpf} onChange={handleChange}/>
        </>
    )
}