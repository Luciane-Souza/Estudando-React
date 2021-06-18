import React, {useState} from 'react';

import { Container } from "./stylesEntrar";
import { Form, Button } from 'react-bootstrap';

const Entrar = () => {
  
    let [email] = useState();
    let [senha] = useState();

    const handleEnvio = (event) => {
      event.preventDefault();
      
      console.log('usuário logado!!')
  }

  const handleChange = ({target}) => {
      
      let novo = {
          [target.id]: target.value
      }

      console.log ('mudou o campo', novo)
  }
   
    return(
        
        <Container>
        <div>
       
        <title>Casa de Massas Napolli</title>
        
        <div>
          <div>
            <div>
              <img src="img/logo-pizza.png" id="icon" alt="User Icon" />
            </div>
            
            <Form onSubmit={handleEnvio} id="login" method="POST">
                    
                    <Form.Group controlId="email" >
                        <Form.Control type="email" value={email} onChange={handleChange} placeholder="Email" required />
                    </Form.Group>
                    
                    <Form.Group controlId="senha" >
                        <Form.Control type="password" value={senha} onChange={handleChange} placeholder="Senha" required/>
                    </Form.Group>

                    <center>

                    <Button variant="light"id="button" type="submit" >Enviar</Button>
                    </center>
                </Form>
            <div className="w-full text-center">
              <a href="/cadastrar" className="txt3">
                cadastrar-se
              </a>
            </div>
          </div>
        </div>
      </div>
      </Container>
    );
}

export default Entrar