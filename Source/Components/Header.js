import React, { Component } from 'react'
import { Navbar, NavLink, Container, Nav } from 'react-bootstrap'
import logo from './logo.png'
import { Routes, Route, HashRouter as Router} from 'react-router-dom'

import Home from "../Pages/Home";
import CV from "../Pages/CV";
import Contacts from "../Pages/Contacts";
import TicTacToe from "C:/Users/rosti/my-app/src/Pages/TicTacToe.js";

export var language = true


export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {lang : true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState => ({
            lang : !prevState.lang
        }))
    }
    
    render() {
        language = this.state.lang
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/#/home">
                            <img
                                src={logo}
                                heigth="35"
                                width="35"
                                className="d-inline-block align-top"
                                alt="logo"
                            />Rostislav
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <NavLink active href="/#/cv" >{language ? "Resume" : "Резюме"}</NavLink>
                                <NavLink active href="/#/contacts" >{language ? "Contacts" : "Контакты"}</NavLink>
                                <NavLink active id="responsive-navbar-nav" href="" onClick={this.handleClick}>{language ? "Русский" : "English"}</NavLink>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path="/home" element={ <Home /> } />
                        <Route exact path="/" element={ <Home /> } />
                        <Route exact path="/cv" element={ <CV/> } />
                        <Route exact path="/contacts" element={ <Contacts /> } />
                        <Route exact path="/tictactoe" element={ <TicTacToe /> } />
                    </Routes>
                </Router>
            </>
        )
    }  
}