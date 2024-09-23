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
                    <h1 id="page-title">Proteja o futuro, denuncie o presente</h1>
                    <p>Faça sua parte, denuncie casos de Vulnerabilidade social de menores de forma rápida e segura. </p>
                </div>
                
                <nav>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/report" className="nav-link">Denunciar</Link>
                    <Link to="/record" className="nav-link">Relatório</Link>
                </nav>
            </header>
        </>
    );
};

export default Header;