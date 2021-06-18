import React, {useState} from 'react';
import mapa from './mapa.png';
import './contatos.css';
import contatos from './contatos.jpg';
import { Form, Button } from 'react-bootstrap';

const Contatos = () => {

    //let[] = useState(0);

    let [nome] = useState();
    let [email,] = useState();
    let [telefone] = useState();
    let [assunto] = useState();
    let [mensagem] = useState();


    const handleEnvio = (event) => {
        event.preventDefault();
        
        console.log('envio')
    }

    const handleChange = ({target}) => {
        
        let novo = {
            [target.id]: target.value
        }

        console.log ('mudou o campo', novo)
    }

    return (
        <div className="ff">

            <div className="img-principal">
                <img className="img-principal" src={contatos} alt='imagem de uma de nossas pizzas' />

                <h2>CONTATO</h2>

                <h4>ENDEREÇO</h4>
                <ul>
                    <li>R. Manoel José Lebrão, 459 - Várzea | Teresópolis | RJ</li>
                    <li>21 2742-1234</li>
                    <li>contato@casademassasnapolli.com.br</li>
                </ul>
            </div>

            <div className="nossa-localizacao">
                <h3>NOSSA LOCALIZAÇÃO</h3>
                <div className="pagina-mapa-imagem">
                    
                    <a href="https://goo.gl/maps/M5yJ6RCiTSowfZhv8" rel="noopener noreferrer" target="_blank">
                    <img src={mapa} alt="Mapa do Local" /> </a>
                </div>
            </div>

            <div className="fale-conosco">
                <h3>FALE CONOSCO</h3>
            </div>
            <div >
                <Form onSubmit={handleEnvio} id="formulario" method="POST">
                    <Form.Group controlId="nome">
                    
                        <Form.Control type="text" value={nome} onChange={handleChange}  placeholder="Nome" required />
                    </Form.Group>

                    <Form.Group controlId="email" >
                        <Form.Control type="email" value={email} onChange={handleChange} placeholder="Email" required />
                    </Form.Group>
                    
                    <Form.Group controlId="telefone" >
                        <Form.Control type="tel" value={telefone} onChange={handleChange} placeholder="Telefone" />
                    </Form.Group>

                    <Form.Group controlId="assunto" >
                        <Form.Control type="text" value={assunto} onChange={handleChange} placeholder="Assunto" />
                    </Form.Group>
                    <Form.Group controlId="mensagem" >
                    <Form.Control as="textarea" rows="10" value={mensagem} onChange={handleChange} placeholder="Mensagem" required /> 
                    
                    </Form.Group>
                    <center>

                    <Button variant="light"id="botao" type="submit" >Enviar Mensagem</Button>
                    </center>
                </Form>

            </div>





        </div>

        



    );
}

export default Contatos;