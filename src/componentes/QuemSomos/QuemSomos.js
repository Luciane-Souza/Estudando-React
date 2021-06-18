import React, { Component } from 'react'
import { Card, Container, Row, Col } from "react-bootstrap";

class QuemSomos extends Component{
    render(){
        return (
            <Container fluid style={{backgroundColor: 'orange'}}>

                <Container style={{border: '1px solid white', borderRadius: '5px', padding: '5px'}}>
                    <Container style={{backgroundColor: '#e4e1d1', padding: '5px'}}>
                        <Row>
                            <Col lg={12}>
                                <Card.Title style={{textAlign: 'center', fontSize: '36px', margin: '0'}}>QUEM SOMOS</Card.Title>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <Container style={{border: '1px solid white', borderRadius: '5px', padding: '5px', margin: '35px auto'}}>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card>
                                    <Card.Title style={{fontSize: '23px', textAlign: 'center'}}>Luciane De Souza</Card.Title>
                                </Card>

                                <Card>
                                    <Card.Text style={{fontSize: '16px', textAlign: 'center'}}> Formada em Odontologia, onde trabalhou inicialmente com Endodontia e posteriormente com Ortodontia.
                                    Gosta de ler, viajar e ama os animais. <br /> Interessou-se pela área de tecnologia e pretende seguir carreira. </Card.Text>
                                </Card>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container style={{border: '1px solid white', borderRadius: '5px', padding: '5px', margin: '35px auto'}}>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card>
                                    <Card.Title style={{fontSize: '23px', textAlign: 'center'}}>Edgar Vieira</Card.Title>
                                </Card>

                                <Card>
                                    <Card.Text style={{fontSize: '16px', textAlign: 'center'}}>Gosta de desenhar, pintar, jogar e aprender coisas novas, e também ama a tecnologia.</Card.Text>
                                </Card>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container style={{border: '1px solid white', borderRadius: '5px', padding: '5px', margin: '35px auto'}}>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card>
                                    <Card.Title style={{fontSize: '23px', textAlign: 'center'}}>Luiz Guilherme</Card.Title>
                                </Card>

                                <Card>
                                    <Card.Text style={{fontSize: '16px', textAlign: 'center'}}>Cursando Educação Física, mas amante da tecnologia, ama praticar esportes, viajar e aprender sobre tecnologia.</Card.Text>
                                </Card>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container style={{border: '1px solid white', borderRadius: '5px', padding: '5px', margin: '35px auto'}}>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card>
                                    <Card.Title style={{fontSize: '23px', textAlign: 'center'}}>Gabriel Camacam</Card.Title>
                                </Card>

                                <Card>
                                    <Card.Text style={{fontSize: '16px', textAlign: 'center'}}>Cursando Arquitetura e Urbanismo, apaixonado por tecnologia e desenho. Adora praticar esportes, escutar música e estar com os amigos e a família.</Card.Text>
                                </Card>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container style={{border: '1px solid white', borderRadius: '5px', padding: '5px', margin: '35px auto'}}>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card>
                                    <Card.Title style={{fontSize: '23px', textAlign: 'center'}}>João Lucas</Card.Title>
                                </Card>

                                <Card>
                                    <Card.Text style={{fontSize: '16px', textAlign: 'center'}}>Gosta de games, jogar futebol, e também se interessa cada vez mais por tecnologia, além de possuir formação técnica de AutoCad.</Card.Text>
                                </Card>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container style={{border: '1px solid white', borderRadius: '5px', padding: '5px', margin: '35px auto 0'}}>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card>
                                    <Card.Title style={{fontSize: '23px', textAlign: 'center'}}>Douglas Neves</Card.Title>
                                </Card>

                                <Card>
                                    <Card.Text style={{fontSize: '16px', textAlign: 'center'}}>Cursando Ciência da Computação. Cinéfilo e apaixonado por música, gosta de ler, jogar e estar com a família.</Card.Text>
                                </Card>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default QuemSomos;