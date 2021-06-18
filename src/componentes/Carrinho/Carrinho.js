import React from 'react';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import Calabresa from './img/cardapio/calabresa.jpg';
import Fettuccine from './img/cardapio/fettuccine.jpg';
import Lasanha from './img/cardapio/lasanha.jpg';
import Nhoque from './img/cardapio/nhoque.jpg';
import { IoMdCart } from 'react-icons/io';



class Carrinho extends React.Component {
    render() {
        return (
            <Container fluid style={{margin: '5px auto', backgroundColor: 'orange'}}>
                

                <Container style={{border: '1px solid white', borderRadius: '5px', padding: '5px'}}>
                    <Container style={{backgroundColor: '#e4e1d1', padding: '5px'}}>
                        <Row>
                            <Col lg={12}>
                                <Card.Title style={{textAlign: 'center', fontSize: '36px', margin: '0'}}><IoMdCart /> CARRINHO</Card.Title>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <Container  style={{border: '1px solid white', borderRadius: '5px', backgroundColor: '#e4e1d1', padding: '5px', margin: '35px auto'}}>
                    <Container>
                        <Row>
                            <Col lg={2}>
                                <Card.Img src={Calabresa} alt='Imagem de Pizza Calabresa' style={{marginTop: '35px'}}/>
                            </Col>
                            <Col  lg={4}>
                                <Container style={{border: '3px solid orangered', borderRadius: '5px'}}>
                                    <Row style={{padding: '15px 0', justifyContent: 'center'}}>
                                        <Container style={{textAlign: 'center'}}>
                                            <h1>PIZZAS</h1>
                                        </Container>
                                        <Form style={{borderTop: '1px solid orangered'}}>
                                            <label htmlFor='pedido-qtde-1'>Qtde.: </label>
                                            <Col lg={4}>
                                                <input type='number' id='pedido-qtde-1' placeholder='Ex: 1'/>
                                            </Col>
                                        </Form>
                                        <Form>
                                            <label htmlFor='pedido-item-01'>Escolha o sabor:</label>
                                            <Col lg={4}>
                                                <input type='text' id='pedido-item-01' placeholder='Ex: Calabresa'/>
                                            </Col>
                                        </Form>
                                    </Row>
                                </Container>
                            </Col>

                            <Col lg={2}>
                                <Card.Img src={Lasanha} alt='Imagem de Lasanhas' style={{marginTop: '35px'}}/>
                            </Col>
                            <Col  lg={4}>
                                <Container style={{border: '3px solid orangered', borderRadius: '5px'}}>
                                    <Row style={{padding: '15px 0', justifyContent: 'center'}}>
                                        <Container style={{textAlign: 'center'}}>
                                            <h1>LASANHAS</h1>
                                        </Container>
                                        <Form style={{borderTop: '1px solid orangered'}}>
                                            <label htmlFor='pedido-qtde-2'>Qtde.: </label>
                                            <Col lg={4}>
                                                <input type='number' id='pedido-qtde-2' placeholder='Ex: 1'/>
                                            </Col>
                                        </Form>
                                        <Form>
                                            <label htmlFor='pedido-item-02'>Escolha o sabor:</label>
                                            <Col lg={4}>
                                                <input type='text' id='pedido-item-02' placeholder='Ex: Lasanha de Camarão'/>
                                            </Col>
                                        </Form>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <Container style={{border: '1px solid white', borderRadius: '5px', backgroundColor: '#e4e1d1', padding: '5px', margin: '35px auto'}}>
                    <Container>
                        <Row>
                            <Col lg={2}>
                                <Card.Img src={Fettuccine} alt='Imagem de Fettuccines' style={{marginTop: '35px'}}/>
                            </Col>
                            <Col  lg={4}>
                                <Container style={{border: '3px solid orangered', borderRadius: '5px'}}>
                                    <Row style={{padding: '15px 0', justifyContent: 'center'}}>
                                        <Container style={{textAlign: 'center'}}>
                                            <h1>FETTUCCINES</h1>
                                        </Container>
                                        <Form style={{borderTop: '1px solid orangered'}}>
                                            <label htmlFor='pedido-qtde-3'>Qtde.:</label>
                                            <Col lg={4}>
                                                <input type='number' id='pedido-qtde-3' placeholder='Ex: 1'/>
                                            </Col>
                                        </Form>
                                        <Form>
                                            <label htmlFor='pedido-item-03'>Escolha o sabor:</label>
                                            <Col lg={4}>
                                                <input type='text' id='pedido-item-03' placeholder='Ex: Fettuccine Vegetariano'/>
                                            </Col>
                                        </Form>
                                    </Row>
                                </Container>
                            </Col>

                            <Col lg={2}>
                                <Card.Img src={Nhoque} alt='Imagem de Nhoques' style={{marginTop: '35px'}}/>
                            </Col>
                            <Col  lg={4}>
                                <Container style={{border: '3px solid orangered', borderRadius: '5px'}}>
                                    <Row style={{padding: '15px 0', justifyContent: 'center'}}>
                                        <Container style={{textAlign: 'center'}}>
                                            <h1>NHOQUES</h1>
                                        </Container>
                                        <Form style={{borderTop: '1px solid orangered'}}>
                                            <label htmlFor='pedido-qtde-4'>Qtde.: </label>
                                            <Col lg={4}>
                                                <input type='number' id='pedido-qtde-4' placeholder='Ex: 1'/>
                                            </Col>
                                        </Form>
                                        <Form>
                                            <label htmlFor='pedido-item-04'>Escolha o sabor:</label>
                                            <Col lg={4}>
                                                <input type='text' id='pedido-item-04' placeholder='Ex: Nhoque à Matricana'/>
                                            </Col>
                                        </Form>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <Container style={{border: '1px solid white', borderRadius: '5px', padding: '5px'}}>
                    <Container style={{backgroundColor: '#e4e1d1', padding: '5px'}}>
                        <Row>
                            <Col lg={12}>
                                <Card.Title style={{textAlign: 'center', fontSize: '36px', margin: '0'}}>
                                    PARA CONFIRMAR SEU PEDIDO VOCÊ DEVE FAZER O <Button href="/entrar"eventKey="/entrar" variant='success'>Log In</Button>{' '}
                                </Card.Title>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <Container style={{border: '1px solid white', borderRadius: '5px', padding: '5px', margin: '35px auto'}}>
                    <Container style={{backgroundColor: '#e4e1d1', padding: '5px'}}>
                        <Row>
                            <Col lg={12}>
                                <Card.Title style={{textAlign: 'center', fontSize: '36px', margin: '0'}}>
                                    CONFORME FEITO O LOG IN, CONFIRME SEU PEDIDO <Button variant='success' onClick={() => {alert('Pedido confirmado, bom apetite!')}}>Confirmar Pedido</Button>{' '}
                                </Card.Title>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <Container style={{border: '1px solid white', borderRadius: '5px', padding: '5px', margin: '35px auto'}}>
                    <Container style={{backgroundColor: '#e4e1d1', padding: '5px'}}>
                        <Row>
                            <Col lg={12}>
                                <Card.Title style={{textAlign: 'center', fontSize: '36px', margin: '0'}}>
                                    SE NÃO TIVER UM CADASTRO EM NOSSO SITE <Button  href="/cadastrar"eventKey="/cadastrar" variant='success'>Cadastrar</Button>{''}
                                   
                                   
                                </Card.Title>
                            </Col>
                        </Row>
                    </Container>
                </Container>

            </Container>
        );
    }
}

export default Carrinho;