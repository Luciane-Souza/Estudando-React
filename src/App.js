import React from 'react';
import Menu from './componentes/Menu/menu';
import Home from './componentes/Home/home';
import Cardapio from './componentes/Cardapio/cardapio';
import Contatos from './componentes/Contatos/contatos';
import Carrinho from './componentes/Carrinho/Carrinho';
import Cadastrar from './componentes/Cadastrar/Cadastrar';
import Entrar from './componentes/Entrar/Entrar';
import QuemSomos from './componentes/QuemSomos/QuemSomos';

import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Footer from './componentes/Menu/Footer';

function App() {
  return (
    <div className="App">
       <Menu/>
       <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cardapio' exact component={Cardapio} />
          <Route path='/quemsomos' exact component={QuemSomos} />  
          <Route path='/contatos' exact component={Contatos} /> 
          <Route path='/carrinho' exact component={Carrinho} /> 
          <Route path='/cadastrar' exact component={Cadastrar} />
          <Route path='/entrar' exact component={Entrar} />
          
     
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
