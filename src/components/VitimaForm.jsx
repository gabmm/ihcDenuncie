import React, { useState } from "react";
import './VitimaForm.css';

const VitimaForm = ({ index, handleRemove }) => {
    const [apelido, setApelido] = useState('');
    const [idade, setIdade] = useState('');
    const [genero, setGenero] = useState('');

    return (
        <div className="vitima-form">
            <h3 style={{ fontSize: '40px' }}>Vítima {index + 1}</h3>
            
            <div className="form-group">
                <label style={{ fontSize: '30px' }}>Apelido:</label>
                <input 
                    type="text"
                    value={apelido}
                    onChange={(e) => setApelido(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label style={{ fontSize: '30px' }}>Idade:</label>
                <div className="checkbox-group">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            value="Bebê"
                            checked={idade === 'Bebê'}
                            onChange={(e) => setIdade(e.target.value)}
                        />
                        Bebê
                    </label>
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            value="Criança"
                            checked={idade === 'Criança'}
                            onChange={(e) => setIdade(e.target.value)}
                        />
                        Criança
                    </label>
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            value="Adolescente"
                            checked={idade === 'Adolescente'}
                            onChange={(e) => setIdade(e.target.value)}
                        />
                        Adolescente
                    </label>
                </div>
            </div>

            <div className="form-group">
                <label>Gênero:</label>
                <div className="radio-group">
                    <label className="radio-label">
                        <input
                            type="radio"
                            name={`genero-${index}`}
                            value="Masculino"
                            checked={genero === 'Masculino'}
                            onChange={(e) => setGenero(e.target.value)}
                        />
                        Masculino
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name={`genero-${index}`}
                            value="Feminino"
                            checked={genero === 'Feminino'}
                            onChange={(e) => setGenero(e.target.value)}
                        />
                        Feminino
                    </label>
                </div>
            </div>

            <button className="remove-button" onClick={() => handleRemove(index)}>Remover Vítima</button>
        </div>
    );
};

export default VitimaForm;
