import React from 'react';
import { Container } from "./styles";



const Home = () => {
    return(
        <Container>
          <div className="Home">
              
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
              <link rel="icon" type="imagem.png" href=" public\img\logo-pizza.png" />
              <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet" />
              <title>Pizzaria Napolli</title>
         
          </div>
          <div className="container">
            <div className="mensagemInicial">
              <h2>---RECOMENDAMOS---</h2>
              <p>Mozzarela, Copa, Margherita (especial), Escarola e Parma.</p>
            </div>
            <div id="backgroudImagens">
              <div className="row row-no-gutters">
                <div className=" col-sm-12 col-md-8 ">
                  <a href="/cardapio">
                    <figure>
                      <img src="img/pizza02.jpg" alt="pizza02" id="imagemPrincipal" className="rounded" />
                    </figure>
                  </a></div><a href="/cardapio">
                  <div className="col-sm-6 col-md-4">
                    <figure className="text-justify">
                      <img src="img/pizza03.jpg" alt="pizza03" />
                    </figure>
                    <figure className="text-justify pizza04">
                      <img src="img/pizza04.jpg" alt="pizza04" />
                    </figure>
                  </div>
                </a></div><a href="/cardapio">
              </a><div className="row row-no-gutters"><a href="/cardapio">
                </a><div className="col-sm-6 col-md-4"><a href="/cardapio">
                  </a><figure className="text-right"><a href="/cardapio">
                      <img src="img/pizza05.jpg" alt="pizza05" className="rounded" />
                    </a><a href="/cardapio">
                    </a></figure><a href="/cardapio">
                  </a></div><a href="/cardapio">
                </a><div className="col-sm-6 col-md-4"><a href="/cardapio">
                  </a><figure className="text-justify"><a href="/cardapio">
                      <img src="img/pizza06.jpg" alt="pizza06" />
                    </a><a href="/cardapio">
                    </a></figure><a href="/cardapio">
                  </a></div><a href="/cardapio">
                </a><div className="col-sm-6 col-md-4"><a href="/cardapio">
                  </a><figure className="text-justify"><a href="/cardapio">
                      <img src="img/pizza07.jpg" alt="pizza07" />
                    </a><a href="/cardapio">
                    </a></figure><a href="/cardapio">
                  </a></div><a href="/cardapio">
                </a></div><a href="/cardapio">
              </a><div><a href="/cardapio">
                </a><a href="/cardapio"><button>Confira nosso cardápio</button></a>
              </div>
            </div>
            <div className="informacoes">
              <h3>Casa de Massas Napolli</h3>
              <p>Pizzas doces e salgadas, massas diversas, entradas especiais, sobremesas deliciosas
                <br />um ambiente aconchegante e agradável para te oferecer uma experiência inesquecível.
                <br />Nosso cardápio foi pensado com muito carinho pensando em lhe proporcionar o melhor.
                <br />
                <br />Diante do vírus COVID-19 estamos com algumas medidas preventivas:</p>
              <ul>
                <li>Higienização frequente de todas as superficies de contato com alimentos e mãos</li>
                <li>Alcool 70% disponivel em todas as lojas, além de práticas de higienização para colaboradores.</li>
                <li>Fornos operando a mais de 265°C, garantindo a segurança dos alimentos.</li>
              </ul>
            </div>
          </div>
         
          <section>
          </section>
        

          
          </Container>
         
    );
}

export default Home;