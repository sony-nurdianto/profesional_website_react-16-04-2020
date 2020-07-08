import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap"
import "./Navbar.css"
// import "../../style.css"


const Navbars = () => {

    return (

        <Navbar className="animate__animated animate__bounceInUp" style={{ animationDuration: "2s", animationDelay: "1s" }} collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Navbar.Brand className="logo animate__animated animate__bounce"><Link to="/" style={{ textDecoration: "none" }}><strong className="span "><span className="brand1 ">H<span className="brand2">e</span>llo !</span></strong></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <a className="nav-link " href="#landing"><strong>Home</strong></a>
                    <a className="nav-link" href="#about"><strong>About</strong></a>
                    <a className="nav-link" href="#skills"><strong>skiils</strong></a>
                    <a className="nav-link" href="#project"><strong>project</strong></a>
                    <a className="nav-link" href="#contact"><strong>Kontak</strong></a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}




export default Navbars
