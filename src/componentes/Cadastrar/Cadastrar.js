import React from "react";
import useForm from "./useForm";
import {  Form,Container } from "./stylesCad";

export default () => {
  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  const Cadastrar = () => {
    console.log(values);
  };

  return (
<Container>
  <Form id="formulario-cadastro" onSubmit={handleSubmit(Cadastrar)}>
    <div>
      <h1>Cadastro</h1>
      <div className="input-group">
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          required
        />
        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Digite o seu e-mail"
          required
        />
        <input
          onChange={handleChange}
          type="password"
          name="senha"
          placeholder="senha"
          required
        />
        </div>
        <div className="colunas">
        <div className="input-group">
          
          <input
          onChange={handleChange} 
          type="text" 
          name="telefone" 
          placeholder="Insira seu Telefone" 
          required
          />
        </div>
        <div className="input-group">
          
          <input
            onChange={handleChange}
            type="text"
            name="cep" 
            placeholder="Insira seu CEP" 
            required
          />
        </div>
      </div>
      <div className="input-group">
        
        <input
        onChange={handleChange}
        type="text" 
        name="endereco"
        placeholder="Insira seu endereco " 
        required
        />
      </div>
      <div>
      </div>
        <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>
      
    </div>
    </Form>
    </Container>
  );
};