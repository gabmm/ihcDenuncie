import React, { useState } from "react";
import './Form.css';

const Form = () => {
    const [passos, setPassos] = useState(1);
    const totalPassos = 3;

    const [localOcorrencia, setLocalOcorrencia] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [complemento, setComplemento] = useState('');

    const [localValido, setLocalValido] = useState(true);
    const [numeroValido, setNumeroValido] = useState(true);
    const [bairroValido, setBairroValido] = useState(true);
    const [cidadeValido, setCidadeValido] = useState(true);
    const [estadoValido, setEstadoValido] = useState(true);
    const [cepValido, setCepValido] = useState(true);

    // Manipuladores de mudança com validação para números
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

    const proximo = () => {
        // Validação dos campos obrigatórios no primeiro passo
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

            if (!isValid) return; // Impede de avançar se algum campo estiver inválido
        }

        // Avança para o próximo passo
        setPassos(passos + 1);
    };

    const anterior = () => {
        if (passos > 1) setPassos(passos - 1);
    };

    const enviarFormulario = () => {
        console.log("Formulário Enviado.");
    };

    const barraDeProgresso = (passos / totalPassos) * 100; // Calcula a porcentagem da barra de progresso

    return (
        <div className="form-container">
            <div className="progress-bar">
                <div 
                    className="progress-bar-fill"
                    style={{width: `${barraDeProgresso}%`}}
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
                                <div className={`form-group ${!localValido ? 'error' : ''}`} style={{flex: 0.8}}>
                                    <label htmlFor="rua">Rua: <span className="required">*</span></label>
                                    <input type="text" id="rua" name="rua" 
                                        value={localOcorrencia} onChange={manipularMudancaLocal} required />
                                    {!localValido && <p className="error-text">Este campo é obrigatório.</p>}
                                </div>
                                <div className={`form-group ${!numeroValido ? 'error' : ''}`} style={{flex: 0.1}}>
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
                                <div className={`form-group ${!estadoValido ? 'error' : ''}`} style={{flex: 0.7}}>
                                    <label htmlFor="estado">Estado: <span className="required">*</span></label>
                                    <input type="text" id="estado" name="estado" value={estado} onChange={manipularMudancaEstado} required />
                                    {!estadoValido && <p className="error-text">Este campo é obrigatório.</p>}
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group" style={{flex: 0.7}}>
                                    <label htmlFor="complemento">Complemento:</label>
                                    <input type="text" id="complemento" name="complemento" value={complemento} onChange={e => setComplemento(e.target.value)} />
                                </div>
                                <div className={`form-group ${!cepValido ? 'error' : ''}`} style={{flex: 0.3}}>
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
                            <div className="form-group">
                                <label htmlFor="idadeVitima">Idade da Vítima: </label>
                                <input type="number" id="idadeVitima" name="idadeVitima" min="0"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="generoVitima"> Gênero da Vítima: </label>
                                <select id="generoVitima" name="generoVitima" >
                                    <option value= "Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="NaoBinario">Não binário</option>
                                    <option value="generoFluido">Genêro fluído</option>
                                    <option value="agenero">Agênero</option>
                                    <option value="bigenero">Bigênero</option>
                                    <option value="generoNeutro">Gênero neutro</option>
                                    <option value="demiGenero">Demigênero</option>
                                    <option value="generoQueer">Gênero queer</option>
                                    <option value="pangenero">Pangênero</option>
                                </select>
                            </div>
                            <div className="button-group">
                        <button 
                            type="button"
                            onClick={anterior}
                            disabled={passos === 1}
                        >
                            Anterior
                        </button>
                        {passos < totalPassos ? (
                            <button
                                type="button"
                                onClick={proximo}
                            >
                                Próximo
                            </button>
                        ) : (
                            <button
                                type="submit"
                                onClick={enviarFormulario}
                            >
                                Enviar
                            </button>
                        )}
                        </div>
                        </>
                    )}

                    {passos === 3 && (
                        <>
                            <div className="form-group">
                                <label htmlFor="nome">Seu nome (Opcional): </label>
                                <input type="text" id="nome" name="nome"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contato">Seu contato (Opcional): </label>
                                <input type="tel" id="contato" name="contato"></input>
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
                        {passos < totalPassos ? (
                            <button
                                type="button"
                                onClick={proximo}
                            >
                                Próximo
                            </button>
                        ) : (
                            <button
                                type="submit"
                                onClick={enviarFormulario}
                            >
                                Enviar
                            </button>
                        )}
                    </div>
                        </>
                    )}

                    
                </form>
            </div>
        </div>
    );
};

export default Form;
