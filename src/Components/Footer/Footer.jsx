/* <--- FUNCTIONS REACT ---> */
import React from "react";

/* <--- CSS'S ---> */
import styles from './Styles/Footer.module.css';

function Footer() {
    return (
        <footer>
            <div className={styles.InformacoesFooter}>
                <h1>
                    Todos direitos reservados
                </h1>
                <h2>
                    Desenvolvido por <a href="https://www.instagram.com/_sxlles/"
                        target="_blank">&nbsp;@_sxlles</a>
                </h2>
            </div>
        </footer>
    );
}

export default Footer;
