import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardapio.css'
import { Link } from 'react-router-dom';

class Cardapio extends Component{
  render(){
    return(
      <div className="Principal">
        <div className="container-fluid">
          <div className="panel panel-warning">
            <div className="panel-text-title">
              <h1 className="text-center text-uppercase">Cardápio</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="panel panel-warning">
            <div className="panel-body">
              <div className="row">
                <div className="col-sm-5">
                  <div className="panel-img">
                    <Link to="/carrinho"><img className="img-responsive1" src="img/cardapio/calabresa.jpg" alt="Imagem da Pizza de Calabresa" /></Link>
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="panel-text">
                    <h1 className="text-uppercase">Calabresa</h1>
                    <hr />
                    <ol className="text-uppercase">
                      <li>Muçarela</li>
                      <li>Tomate</li>
                      <li>Calabresa</li>
                      <li>Orégano</li>
                    </ol>
                    <hr />
                    <div className="panel-informatiom">
                      <div className="container-fluid">
                        <strong>Preço(1 Pizza no sabor escolhido): </strong><button className="btn btn-warning" type="button">R$ 41,90</button>
                      </div>
                      <div className="container-fluid">
                        <strong>Preço(Acompanha 1 refrigerante de 600mL): </strong><button className="btn btn-warning" type="button">R$ 44,60</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="container-fluid">
            <div className="panel panel-warning">
              <div className="panel-body">
                <div className="row">
                  <div className="col-sm-5">
                    <div className="panel-img">
                    <Link to="/carrinho"><img className="img-responsive" src="img/cardapio/marguerita.jpg" alt="Imagem da Pizza de Marguerita" /></Link>
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="panel-text">
                      <h1 className="text-uppercase">Marguerita</h1>
                      <hr />
                        <ol className="text-uppercase">
                          <li>Muçarela</li>
                          <li>Manjericão</li>
                          <li>Tomate</li>
                          <li>Azeitona</li>
                          <li>Orégano</li>
                        </ol>
                      <hr />
                      <div className="panel-informatiom">
                        <div className="container-fluid">
                          <strong>Preço(1 Pizza no sabor escolhido): </strong><button className="btn btn-warning" type="button">R$ 47,90</button>
                        </div>
                        <div className="container-fluid">
                          <strong>Preço(Acompanha 1 refrigerante de 1.5L): </strong><button className="btn btn-warning" type="button">R$ 52,30</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        

        <div className="container-fluid">
        <div className="panel panel-warning">
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-5">
                <div className="panel-img">
                <Link to="/carrinho"><img className="img-responsive" src="img/cardapio/napolitana.jpg" alt="Imagem da Pizza de Napolitana" /></Link>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="panel-text">
                  <h1 className="text-uppercase">Napolitana</h1>
                  <hr />
                  <ol className="text-uppercase">
                    <li>Muçarela</li>
                    <li>Tomate</li>
                    <li>Presunto</li>
                    <li>Orégano</li>
                  </ol>
                    <hr />
                    <div className="panel-informatiom">
                      <div className="container-fluid">
                        <strong>Preço(1 Pizza no sabor escolhido): </strong><button className="btn btn-warning" type="button">R$ 55,90</button>
                      </div>
                      <div className="container-fluid">
                        <strong>Preço(Acompanha 1 refrigerante de 2.250L): </strong><button className="btn btn-warning" type="button">R$ 61,30</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-fluid">
        <div className="panel panel-warning">
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-5">
                <div className="panel-img">
                <Link to="/carrinho"><img className="img-responsive" src="img/cardapio/lasanha.jpg" alt="Imagem de um sabor de Lasanha" /></Link>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="panel-text">
                  <h1 className="text-uppercase">Lasanhas</h1>
                  <hr />
                  <ol className="text-uppercase">
                    <li>Lasanha à Bolonhesa</li>
                    <li>Lasanha Mexicana</li>
                    <li>Lasanha de Frango</li>
                    <li>Lasanha de Camarão</li>
                  </ol>
                  <hr />
                  <div className="panel-informatiom">
                    <div className="container-fluid">
                      <strong>Preço(1 Lasanha no sabor escolhido): </strong><button className="btn btn-warning" type="button">R$ 34,90</button>
                    </div>
                    <div className="container-fluid">
                      <strong>Preço(Acompanha 1 refrigerante de 600mL): </strong><button className="btn btn-warning" type="button">R$ 37,60</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="panel panel-warning">
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-5">
                <div className="panel-img">
                <Link to="/carrinho"><img className="img-responsive" src="img/cardapio/nhoque.jpg" alt="Imagem de um sabor de Nhoque" /></Link>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="panel-text1">
                  <h1 className="text-uppercase">Nhoques</h1>
                  <hr />
                  <ol className="text-uppercase">
                    <li>Nhoque à Matricana</li>
                    <li>Nhoque de Batata-Doce</li>
                    <li>Nhoque com Molho Pomodoro</li>
                    <li>Nhoque com Ragu de Rabada</li>
                  </ol>
                  <hr />
                  <div className="panel-informatiom">
                    <div className="container-fluid">
                      <strong>Preço(1 Nhoque no sabor escolhido): </strong><button className="btn btn-warning" type="button">R$ 34,90</button>
                    </div>
                    <div className="container-fluid">
                      <strong>Preço(Acompanha 1 refrigerante de 1.5L): </strong><button className="btn btn-warning" type="button">R$ 39,30</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="panel panel-warning">
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-5">
                <div className="panel-img">
                <Link to="/carrinho"><img className="img-responsive" src="img/cardapio/fettuccine.jpg" alt="Imagem da Pizza de Napolitana" /></Link>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="panel-text">
                  <h1 className="text-uppercase">Fettuccines</h1>
                  <hr />
                  <ol className="text-uppercase">
                    <li>Fettuccine aos 4 Queijos</li>
                    <li>Fettuccine Vegetariano</li>
                    <li>Fettuccine ao Gorgonzola</li>
                    <li>Fettuccine com Amêndoas</li>
                  </ol>
                  <hr />
                  <div className="panel-informatiom">
                    <div className="container-fluid">
                      <strong>Preço(1 Fettuccine no sabor escolhido): </strong><button className="btn btn-warning" type="button">R$ 34,90</button>
                    </div>
                    <div className="container-fluid">
                      <strong>Preço(Acompanha 1 refrigerante de 2.250L): </strong><button className="btn btn-warning" type="button">R$ 40,30</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="panel panel-warning">
          <div className="panel-text-title">
            <h1 className="text-center text-uppercase">Acesse o Carrinho aqui:<Link to="/carrinho"></Link></h1>
          </div>
        </div>
      </div>

      </div>

    )
  }
}

export default Cardapio;