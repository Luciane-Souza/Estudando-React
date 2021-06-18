import React from 'react';
import {
  Nav,
  Navbar
} from 'react-bootstrap';
import './styles.css'
import logo from './logo.png';
import { BiLogIn} from 'react-icons/bi';
import { ImUser } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";



const Menu = () => {
  return (
    <Navbar fixed="top" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href='/'><img src={logo} alt='Logo' /></Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant="pills" defaultActiveKey="/home"></Nav> 
        <Nav.Link  href='/' eventKey="disabled">Casa de Massas Napolli</Nav.Link>
        <Nav className="mr-auto">
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href="/cardapio" eventKey="/cardapio">Cardápio</Nav.Link>
          <Nav.Link href="/quemsomos" eventKey="/quemsomos">Quem Somos</Nav.Link>
          <Nav.Link href="/contatos" eventKey="/contatos">Contatos</Nav.Link>
        </Nav>
        <Nav className="mr-auto" id="right">
          <Nav.Link href="/carrinho"eventKey="/carrinho"><FaShoppingCart />Carrinho</Nav.Link>
          <Nav.Link href="/cadastrar"eventKey="/cadastrar"><ImUser />Cadastrar</Nav.Link>
          <Nav.Link href="/entrar"eventKey="/entrar"><BiLogIn />Entrar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );

}

export default Menu;