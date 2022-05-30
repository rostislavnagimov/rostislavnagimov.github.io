import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import face from 'C:/Users/rosti/my-app/src/assets/face.jpg'
import {ENhome} from './text.js'
import {RUhome} from './text.js'
import {language} from 'C:/Users/rosti/my-app/src/Components/Header.js'


var text = ENhome


export default class Home extends Component {
    render() {
        text = language ? ENhome : RUhome
        return (
            <>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <img src={face} width="100%" className="mt-3"/>
                     </Col>
                    <Col>
                        <div className="card mt-3" >
                            <div className="card-header">{text[0]}</div>
                            <div className="card-body">
                                {text[1][0]}<br/><br/>
                                {text[1][1]}<br/><br/>
                                {text[1][2]}<br/><br/>
                                {text[1][3]}<br/><br/>
                                {text[1][4]}<br/><br/>
                                </div>
                        </div>
                        <div className="card mt-3 mb-3">
                            <div className="card-header">{text[2]}</div>
                            <div className="card-body"><h4>{text[3]}</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}