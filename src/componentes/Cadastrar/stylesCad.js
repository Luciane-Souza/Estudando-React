
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  #formulario-cadastro {
    width: 500px;
    min-height: 400px;
    background: #fff;
    border-radius: 6px;
    padding: 20px 30px;
  }
  
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  .input-group {
    margin: 10px 0;
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: #393939;
    cursor: pointer
  }
  
  .input-group label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: #393939;
    cursor: pointer;
  }
  
  .input-group input:not([type="checkbox"]) {
    background: #dedddd;
    border: 1px solid #cccccc;
    border-radius: 2px;
    padding: 8px 10px;
    display: block;
    width: 100%;
  }
  
  .input-group input:focus {
    border-color: #20b2aa;
  }
  
  .input-group input::placeholder {
    color: #686868;
    font-weight: 300;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  .colunas {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .colunas .input-group {
    width: 48%;
  }
  
  button {
    color: #fff;
    font-size: 16px;
    background: #e95420;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  button:hover {
    background: #9e3916;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;

