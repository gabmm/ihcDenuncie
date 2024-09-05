import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <>
            <header className='cabecalho'>
                <a href=''>
                    <img 
                        src="./src/assets/logo_escudo.png"
                        alt="logo do escudo"
                        className="logo"
                    />
                </a>
                <h1 id="page-title">Sistema de Denúncia de Vulnerabilidade Social</h1>
                <nav>
                    <a href= "#home" className="nav-link">Home</a>
                    <a href= "#report" className="nav-link">Denunciar</a>
                    <a href= "#resources" className="nav-link">Recursos</a>
                    <a href= "#contact" className="nav-link">Contato</a>
                </nav>
            </header>
        </>
    );
};

export default Header;