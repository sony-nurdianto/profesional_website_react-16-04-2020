import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Html from './images/html5.png'
import Css from './images/css3.png'
import Nodejs from './images/nodejs.png'
import Lreact from './images/logo.svg'
import Js from './images/jjs.png'
import Mongodb from './images/mongodb.png'
import Sql from './images/sql.png'
import './style.css'



export default class Home extends Component {
   
    render() {
        return (
            <div className="text-white  bg">
                {/* <div className="jumbotron jumbotron-fluid bg-transparent " style={{height : "30px"}}>
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col pd-0">
                                <img src={Py} style={{width : "7em" , height:"7em"}} alt="..."/>
                            </div>
                            <div className="col pd-0 ">
                                <Link to="/"><h1>Home</h1></Link>
                            </div>
                            <div className="col pd-0">
                                <Link to="/portofolio"><h1>Portofolio</h1></Link>
                            </div>
                            <div className="col pd-0">
                                <Link to="/article"><h1>Article</h1></Link>
                            </div>
                            <div className="col pd-0">
                                <Link to="/contact"><h1>Hire me</h1></Link>
                            </div>
                        </div>
                    </div>
                </div> */}
                    {/* <div className="jumbptron jumbotron-fluid mb-5 mt-5 pb-5 "> */}
                        <div className="container ">
                            <div className="row">
                                <div className="col text-center mt-5 mb-5" style={{width :" 50px"}}>
                                    <h1 className="Title">Are you looking for Web Developer</h1>
                                    <h1 className="Title2">I'am here Ready to help you</h1>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                    <div className="container mb-5 mt-5 pb-5">
                       <div className="row">
                           <div className="col">
                            <div className="card   bg-dark">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={Lreact} className="card-img-top " alt="..." style={{width :" 20em"}}/>
                                    </div>
                                    <div className="card-body  text">
                                        <h1 className="card-title text-center">Card title</h1>
                                        <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text text-center"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                           </div>
                       </div>
                    </div>
                    <div className="container mb-5 mt-5 pb-5 text">
                        <div className="row">
                            <div className="col d-flex align-items-center">
                                <img src={Nodejs} style={{width :" 20em"}}/>
                            </div>
                            <div className="col float-left bg-dark ">
                            <h1>Lorem ipsum</h1>
                                <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>  
                            </div>
                        </div>
                    </div>
                    <div className="container mb-5 mt-5 pb-5 text">
                        <div className="row">
                                <div className="col bg-dark">
                            <h1 className="text">Lorem ipsum</h1>
                                <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <img src={Js} style={{width :" 20em", height :"19em"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="container mb-5 mt-5 pb-5 text">
                        <div className="row">
                            <div className="col">
                                <img src={Html} style={{width :" 20em", height :"19em"}}/>
                            </div>
                            <div className="col bg-dark">
                                <h1 className="text">Lorem ipsum</h1>
                                <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mb-5 mt-5 pb-5 text">
                        <div className="row">
                            <div className="col bg-dark">
                                <h1 className="text">Lorem ipsum</h1>
                                <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <img src={Css} style={{width :" 20em", height :"19em"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="container mb-5 mt-5 pb-5 text">
                        <div className="row">
                            <div className="col">
                                <img src={Mongodb} style={{width :" 20em", height :"19em"}}/>
                            </div>
                            <div className="col bg-dark">
                                <h1 className="text">Lorem ipsum</h1>
                                <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mb-5 mt-5 pb-5 text">
                        <div className="row">
                            <div className="col bg-dark">
                                <h1 className="text">Lorem ipsum</h1>
                                <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <img src={Sql} style={{width :" 20em", height :"19em"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="jumbotron jumbotron fluid bg-dark ">
                       
                    <div className="container  ">
                        <div className="row ">
                                <div className="col-md left">
                                <h3 >Thanks to</h3>
                                <ul>
                                    <li>Pak seto (Impact Byte)</li>
                                    <li>amirul fatah(Impact Byte)</li>
                                    <li>michael tamsil (Impact Byte)</li>
                                    <li>derek tsoi (glints)</li>
                                    <li>jeff (glints)</li>
                                    <li>andi (glints)</li>
                                    {/* <l1>ori (zeal)</l1>
                                    <l1>yosha (wanderlink)</l1>
                                    <l1>and all staff (glints and impact byte)</l1> */}
                                </ul>  
                            </div>
                            <div className="col-md text-center right">
                                <h2>Suport by</h2>
                                <h1>Impact Byte</h1>
                                <h1>Glints</h1>
                            </div>
                            <div className="col-md ">
                                <h3>contact</h3>
                                <ul>
                                    <li>email</li>
                                    <li>address</li>
                                    <li>contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

