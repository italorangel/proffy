import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

export default function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/7786881?s=460&u=e64a8f24b1ba95eb82f283be8ab90892e40c5465&v=4" alt="Ítalo Rangel"/>
                <div>
                    <strong>Ítalo Rangel</strong>
                    <span>Biologia</span>
                </div>
            </header>
            <p>
                Entusiata das melhores tecnologias de biologia avançada.
                <br/><br/>
                Apaxionado por clonagem de animal
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>

            </footer>
        </article>
    )
}