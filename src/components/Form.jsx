import React, { useState } from "react";
import './Form.css';

const Form = () => {
    const [passos, setPassos] = useState(1); // inicializa com 1, passos é atua como contador
    const totalPassos = 3; // depende da quantidade de pergunta que teremos

    const [localOcorrencia, setLocalOcorrencia] = useState('');
    const [localValido, setLocalValido] = useState(true);

    const manipularMudancaLocal = (event) => {
        setLocalOcorrencia(event.target.value);
        if (event.target.value.trim() !== '') {
            setLocalValido(true);
        }
    };

    const proximo = () => { // esta relacionado ao botão próximo, incrementa o passo em + 1 ao ser clicado
        if (passos === 1 && localOcorrencia.trim() === '') {
            setLocalValido(false);
            return;
        }
        setPassos(passos + 1);
    };

    const anterior = () => { // esta relacionado ao botão anterior, decrementa o passo em - 1 ao ser clicado
        if(passos > 1) setPassos(passos - 1);
    };

    const enviarFormulario = () => {
        console.log("Formulário Enviado.");
    };

    

    const barraDeProgresso = (passos / totalPassos) * 100; // calcula a porcentagem da barra de progresso

    return(
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
                            <div className={`form-group ${!localValido ? 'error' : ''}`}>
                                <label htmlFor="localOcorrencia">Local da Ocorrência: <span className="required">*</span> </label>
                                <input type="text" id="localOcorrencia" name="localOcorrencia" 
                                value={localOcorrencia} onChange={manipularMudancaLocal} required />
                                {!localValido && <p className="error-text">Este campo é obrigatório.</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="descricaoOcorrencia"> Descrição da Ocorrência: </label>
                                <textarea id="descricaoOcorrencia" name="descricaoOcorrencia"/>
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

                        </>
                    )

                    }

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
                </form>
            </div>
        </div>
        
    );
};

export default Form;