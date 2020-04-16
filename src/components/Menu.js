import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from './images/logo.png'
import './style.css'


export default class Menu extends Component {
    render() {
        return (
            
                <div className="jumbotron jumbotron-fluid  " >
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col pd-0">
                                <img src={Logo} style={{width : "7em" , height:"7em"}} alt="..."/>
                            </div>
                            <div className="col pd-0 ">
                                <Link to="/"><h1>Home</h1></Link>
                            </div>
                            <div className="col pd-0">
                                <Link to="#"><h1>Portofolio</h1></Link>
                            </div>
                            <div className="col pd-0">
                                <Link to="#"><h1>Article</h1></Link>
                            </div>
                            <div className="col pd-0">
                                <Link to="#"><h1>Hire me</h1></Link>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}
