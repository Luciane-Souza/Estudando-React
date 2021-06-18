import React from 'react';
import './styles.css'



const Footer = () => {
    return (
        <div className="footer">
        <footer>
          <div className="footer-logo">
            <a href="/"><img src="img/logo-pizza.png" alt="Logo da Pizzaria Napolli" /></a>
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <button><a href="/">Home</a>
                </button></li>
              <li>
                <button><a  href="/quemsomos">Quem Somos</a>
                </button></li>
              <li>
                <button><a href="/contatos">Contatos</a>
                </button></li>
            </ul>
          </div>
          <div className="footer-contatos">
            <ul>
              <li>
                <a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank"><img src="img/logo-instagram.png" alt="Link para nossa página no Instagram" /></a>
              </li>
              <li>
                <a href="https://www.facebook.com" rel="noopener noreferrer"target="_blank"><img src="img/logo-facebook.png" alt="Link para nossa página no Facebook" /></a>
              </li>
              <li>
                <a href="https://www.youtube.com" rel="noopener noreferrer" target="_blank"><img src="img/logo-youtube.png" alt="Link para nosso canal no Youtube" /></a>
              </li>
            </ul>
          </div>
          <div className="footer-copyright">
            <p>- 2020 © Copyright - Casa de Massas Napolli <br /> Todos os direitos reservados</p>
          </div>
        </footer>
      </div>
    )
}
export default Footer