import React, { useState } from "react";
import VitimaForm from "./VitimaForm";
import './Form.css';

const Form = () => {
    const [passos, setPassos] = useState(1);
    const totalPassos = 4;

    const [localOcorrencia, setLocalOcorrencia] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [complemento, setComplemento] = useState('');
    const [tipoVul, setTipoVul] = useState('');
    const [texto, setTexto] = useState('');

    const [vitimas, setVitimas] = useState([{}])

    const [localValido, setLocalValido] = useState(true);
    const [numeroValido, setNumeroValido] = useState(true);
    const [bairroValido, setBairroValido] = useState(true);
    const [cidadeValido, setCidadeValido] = useState(true);
    const [estadoValido, setEstadoValido] = useState(true);
    const [cepValido, setCepValido] = useState(true);
    const [tipoVulValido, setTipoVulValido] = useState(true);

    const adicionarVitima = () => {
        setVitimas([...vitimas, {}]);
    };

    const removerVitima = (index) => {
        const novasVitimas = vitimas.filter((_, i) => i !== index);
        setVitimas(novasVitimas);
    }

    const manipularMudancaLocal = (event) => {
        setLocalOcorrencia(event.target.value);
        if (event.target.value.trim() !== '') {
            setLocalValido(true);
        }
    };

    const manipularMudancaNumero = (event) => {
        const valor = event.target.value;
        setNumero(valor);
        setNumeroValido(true);
    };

    const manipularMudancaCep = (event) => {
        const valor = event.target.value;
        setCep(valor);
        setCepValido(true);
    };

    const manipularMudancaBairro = (event) => {
        setBairro(event.target.value);
        if (event.target.value.trim() !== '') {
            setBairroValido(true);
        }
    };
    
    const manipularMudancaCidade = (event) => {
        setCidade(event.target.value);
        if (event.target.value.trim() !== '') {
            setCidadeValido(true);
        }
    };

    const manipularMudancaEstado = (event) => {
        setEstado(event.target.value);
        if (event.target.value.trim() !== '') {
            setEstadoValido(true);
        }
    };

    const manipularMudancaTipo = (event) => {
        setTipoVul(event.target.value);
        if(event.target.value.trim() !== ''){
            setTipoVulValido(true);
        }
    };

    const proximo = () => {
        if (passos === 1) {
            let isValid = true;
            if (localOcorrencia.trim() === '') {
                setLocalValido(false);
                isValid = false;
            }
            if (numero.trim() === '') {
                setNumeroValido(false);
                isValid = false;
            }
            if (bairro.trim() === '') {
                setBairroValido(false);
                isValid = false;
            }
            if (cidade.trim() === '') {
                setCidadeValido(false);
                isValid = false;
            }
            if (estado.trim() === '') {
                setEstadoValido(false);
                isValid = false;
            }
            if (cep.trim() === '') {
                setCepValido(false);
                isValid = false;
            }
            
        }
        if(passos === 2){

        }
        if(passos === 3){
            let isValid = true;
            if(tipoVul.trim() === ''){
                setTipoVulValido(false);
                isValid = false;
            }
            if (!isValid) return; 
        }
        setPassos(passos + 1);
    };

    const anterior = () => {
        if (passos > 1) setPassos(passos - 1);
    };

    const enviarFormulario = () => {
        if(passos === totalPassos ){
            let isValid = true;

            if(!isValid) return;
        }
        console.log("Formulário Enviado.");
    };

    const barraDeProgresso = (passos / totalPassos) * 100; // Calcula a porcentagem da barra de progresso

    return (
        <div className="form-container">
            <div className="progress-bar">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${barraDeProgresso}%` }}
                />
                <span className="progress-bar-text">
                    Passo {passos} de {totalPassos}
                </span>
            </div>
            <div className="form-content">
                <form onSubmit={e => e.preventDefault()}>
                    {passos === 1 && (
                        <>
                            <div className="row">
                                <div className={`form-group ${!localValido ? 'error' : ''}`} style={{ flex: 0.8 }}>
                                    <label htmlFor="rua">Rua: <span className="required">*</span></label>
                                    <input type="text" id="rua" name="rua"
                                        value={localOcorrencia} onChange={manipularMudancaLocal} required />
                                    {!localValido && <p className="error-text">Este campo é obrigatório.</p>}
                                </div>
                                <div className={`form-group ${!numeroValido ? 'error' : ''}`} style={{ flex: 0.1 }}>
                                    <label htmlFor="numero">Número: <span className="required">*</span></label>
                                    <input type="number" id="numero" name="numero" value={numero} onChange={manipularMudancaNumero} required />
                                    {!numeroValido && <p className="error-text">Este campo é obrigatório.</p>}
                                </div>
                            </div>

                            <div className="row">
                                <div className={`form-group ${!bairroValido ? 'error' : ''}`}>
                                    <label htmlFor="bairro">Bairro: <span className="required">*</span></label>
                                    <input type="text" id="bairro" name="bairro" value={bairro} onChange={manipularMudancaBairro} required />
                                    {!bairroValido && <p className="error-text">Este campo é obrigatório.</p>}
                                </div>
                                <div className={`form-group ${!cidadeValido ? 'error' : ''}`}>
                                    <label htmlFor="cidade">Cidade: <span className="required">*</span></label>
                                    <input type="text" id="cidade" name="cidade" value={cidade} onChange={manipularMudancaCidade} required />
                                    {!cidadeValido && <p className="error-text">Este campo é obrigatório.</p>}
                                </div>
                                <div className={`form-group ${!estadoValido ? 'error' : ''}`} style={{ flex: 0.7 }}>
                                    <label htmlFor="estado">Estado: <span className="required">*</span></label>
                                    <input type="text" id="estado" name="estado" value={estado} onChange={manipularMudancaEstado} required />
                                    {!estadoValido && <p className="error-text">Este campo é obrigatório.</p>}
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group" style={{ flex: 0.7 }}>
                                    <label htmlFor="complemento">Complemento:</label>
                                    <input type="text" id="complemento" name="complemento" value={complemento} onChange={e => setComplemento(e.target.value)} />
                                </div>
                                <div className={`form-group ${!cepValido ? 'error' : ''}`} style={{ flex: 0.3 }}>
                                    <label htmlFor="cep">CEP: <span className="required">*</span></label>
                                    <input type="number" id="cep" name="cep" value={cep} onChange={manipularMudancaCep} required />
                                    {!cepValido && <p className="error-text">Este campo é obrigatório.</p>}
                                </div>
                            </div>

                            <div className="button-group">
                                <button
                                    type="button"
                                    onClick={anterior}
                                    disabled={passos === 1}
                                >
                                    Anterior
                                </button>
                                <button type="button" onClick={proximo}>
                                    Próximo
                                </button>

                            </div>
                        </>
                    )}

                    {passos === 2 && (
                        <>
                           <div className="vitima-section">
                                <div className="vitima-container">
                                    {vitimas.map((_, index) => (
                                        <VitimaForm
                                            key={index}
                                            index={index}
                                            handleRemove={removerVitima}
                                        />
                                    ))}
                                </div>
                                <div className="add-button-container">
                                    <button type="button" className="add-button" onClick={adicionarVitima}>+</button>
                                </div>
                            </div>

                            <div className="button-group">
                                <button type="button" onClick={anterior}>Anterior</button>
                                <button type="button" onClick={proximo}>Próximo</button>
                            </div>

                        </>
                    )}

                    {passos === 3 && (
                        <>
                            <div className={`form-group ${!tipoVulValido ? 'error' : ''}`}>
                                <label htmlFor="tipoVul">Tipo de vulnerabilidade <span className="required">*</span> </label>
                                <input type="text" id="tipoVul" name="tipoVul" value={tipoVul} onChange={manipularMudancaTipo} required />
                                {!tipoVulValido && <p className="error-text">Este campo é obrigatório.</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="descricao">Descrição da ocorrência </label>
                                <textarea
                                    id="descricao"
                                    name="descricao"
                                    value={texto}
                                    onChange={(e) => setTexto(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="anexo">Anexos ( fotos, vídeos): </label>
                                <input type="file" id="anexo" name="anexo"></input>
                            </div>
                            <div className="button-group">
                                <button
                                    type="button"
                                    onClick={anterior}
                                    disabled={passos === 1}
                                >
                                    Anterior
                                </button>
                                <button type="button" onClick={proximo}>
                                    Próximo
                                </button>
                            </div>
                        </>
                       
                    )}
                     {passos === 4 && (
                        <>
                        <div className="button-group">
                        <button type="button" onClick={anterior} disabled={passos === 1}>
                                Anterior
                            </button>
                        
                            <button type="submit" onClick={enviarFormulario}>
                                Enviar
                            </button>
                        </div>
                           
                        </>
                            
                    )}


                </form>
            </div>
        </div>
    );
};

export default Form;


// {passos < totalPassos ? (
//     <button
//     type="button"
//     onClick={proximo}
// >
//     Próximo
// </button>
// ) : (

// )}