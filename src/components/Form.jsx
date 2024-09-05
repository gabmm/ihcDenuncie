import React, { useState } from "react";
import './Form.css';

const Form = () => {
    const [passos, setPassos] = useState(1); // inicializa com 1, passos é atua como contador
    const totalPassos = 2; // depende da quantidade de pergunta que teremos

    const proximo = () => { // esta relacionado ao botão próximo, incrementa o passo em + 1 ao ser clicado
        if(passos < totalPassos) setPassos(passos + 1);
    };

    const anterior = () => { // esta relacionado ao botão anterior, decrementa o passo em - 1 ao ser clicado
        if(passos > 1) setPassos(passos - 1);
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
                <form>
                    {passos === 1 && (
                        <>
                            <div className="form-group">
                                <label htmlFor="localOcorrencia">Local da Ocorrência: </label>
                                <input type="text" id="localOcorrencia" name="localOcorrencia"/>
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
                    
                    <div className="button-group">
                        <button 
                            type="button"
                            onClick={anterior}
                            disabled={passos === 1}
                        >
                            Anterior
                        </button>
                        <button
                            type="button"
                            onClick={proximo}
                            disabled={passos === totalPassos}
                        >
                            Próximo
                        </button>
                    </div>
                </form>
            </div>
        </div>
        
    );
};

export default Form;