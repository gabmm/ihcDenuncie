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
                <h1 id="page-title">Sistema de Denúncia de Vulnerabilidade Social</h1>
                <nav>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/report" className="nav-link">Denunciar</Link>
                </nav>
            </header>
        </>
    );
};

export default Header;