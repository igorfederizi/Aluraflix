import React from 'react';
import Logo from '../../assets/img/logo.png';
import '../Menu/Menu.css';
import Button from '../Button/index'
//import ButtonLink from '../components/ButtonLink';

function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>    
    );
}

export default Menu;