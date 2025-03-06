import React, { useState, useEffect, useRef } from 'react';

/* <--- CSS'S ---> */
import styles from './Styles/Header.module.css';

/* <--- ASSETS ---> */
import LogoSales from '../../Assets/Logo&Foto/Sales..png';
import Menu from '../../Assets/Icons/VectorMenu.svg';
import Close from '../../Assets/Icons/VectorClose.svg';
/* <--- ICONES HEADER RESPONSIVA ---> */
import LinkedIn from '../../Assets/Icons/Icons Redes - Header/LinkedIn.svg';
import Instagram from '../../Assets/Icons/Icons Redes - Header/Instagram.svg';
import Github from '../../Assets/Icons/Icons Redes - Header/GitHub.svg';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null); // Referência para o menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    // Fecha o menu ao clicar fora
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className={styles.header}>
            <img
                src={LogoSales}
                onClick={() => scrollToSection('home')}
                alt="Logo"
                className={styles.logo}
            />
            <nav
                ref={menuRef}
                className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
            >
                <ul>
                    <li onClick={() => scrollToSection('home')}>Home</li>
                    <li onClick={() => scrollToSection('projetos')}>Projetos</li>
                    <li onClick={() => scrollToSection('sobre')}>Sobre</li>
                    <li onClick={() => scrollToSection('habilidades')}>Habilidades</li>
                    <li onClick={() => scrollToSection('contatos')}>Contatos</li>
                </ul>
                <div className={styles.Redes}>
                    <a
                        href="https://www.linkedin.com/in/emerson-sales-9a5a49277/"
                        target="_blank"
                    >
                        <img src={LinkedIn} />
                    </a>
                    <a
                        href="https://www.instagram.com/sxlesz_/"
                        target="_blank"
                    >
                        <img src={Instagram} />
                    </a>
                    <a
                        href="https://github.com/emersonslls"
                        target="_blank"
                    >
                        <img src={Github} />
                    </a>
                </div>
            </nav>
            <button className={styles.hamburger} onClick={toggleMenu}>
                {isMenuOpen ? (
                    <img src={Close} className={styles.closeIcon} />
                ) : (
                    <img src={Menu} alt="Menu Icon" className={styles.menuIcon} />
                )}
            </button>
        </header>
    );
}

export default Header;
