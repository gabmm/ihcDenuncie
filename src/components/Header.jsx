import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return(
        <>
            <header className='cabecalho'>
                    <img 
                        src="./src/assets/logo_escudo.png"
                        alt="logo do escudo"
                        className="logo"
                    />
                <div className='text-container'>
                    <h1 id="page-title">Sistema de Denúncia de Vulnerabilidade Social</h1>
                    <p>Faça sua parte, Denuncie casos de Vulnerabilidade social de menores de forma segura. </p>
                </div>
                
                <nav>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/report" className="nav-link">Denunciar</Link>
                    <Link to="/componentTesting" className="nav-link">Ver componentes</Link>
                </nav>
            </header>
        </>
    );
};

export default Header;