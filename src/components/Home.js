import React, { Component } from "react";
import { Link } from "react-router-dom";
import Html from "./images/html5.png";
import Css from "./images/css3.png";
import Nodejs from "./images/nodejs.png";
import Lreact from "./images/logo.svg";
import Js from "./images/jjs.png";
import Mongodb from "./images/mongodb.png";
import Sql from "./images/sql.png";
import "./style.css";

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
            <div
              className="col text-center mt-5 mb-5"
              style={{ width: " 50px" }}
            >
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
                  <img
                    src={Lreact}
                    className="card-img-top "
                    alt="..."
                    style={{ width: " 20em" }}
                  />
                </div>
                <div className="card-body  text">
                  <h1 className="card-title text-center">
                    do you need someone who can use react js ? , hey i can
                    hendle it for you
                  </h1>
                  <p className="card-text text-center text-white">
                    What is React.js?. React.js is an open-source JavaScript
                    library that is used for building user interfaces
                    specifically for single-page applications. It’s used for
                    handling the view layer for web and mobile apps. React also
                    allows us to create reusable UI components. React was first
                    created by Jordan Walke, a software engineer working for
                    Facebook. React first deployed on Facebook’s newsfeed in
                    2011 and on Instagram.com in 2012. React allows developers
                    to create large web applications that can change data,
                    without reloading the page. The main purpose of React is to
                    be fast, scalable, and simple. It works only on user
                    interfaces in the application. This corresponds to the view
                    in the MVC template. It can be used with a combination of
                    other JavaScript libraries or frameworks, such as Angular JS
                    in MVC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-5 mt-5 pb-5 text">
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <img src={Nodejs} style={{ width: " 20em" }} />
            </div>
            <div className="col-6 float-left bg-dark pt-3 pb-3 card-body">
              <h4 className="text-center">
                if you need a React developer you definitely need someone who
                can handle nodes too, and I can complete it
              </h4>
              <p className="text-white text-center">
                What is exactly node.js ? .Node. js is a platform built on
                Chrome's JavaScript runtime for easily building fast and
                scalable network applications. Node. js uses an event-driven,
                non-blocking I/O model that makes it lightweight and efficient,
                perfect for data-intensive real-time applications that run
                across distributed devices.
              </p>
            </div>
          </div>
        </div>
        <div className="container mb-5 mt-5 pb-5 text">
          <div className="row d-flex align-items-center">
            <div className="col-6  bg-dark card-body">
              <h4 className="text-center">javascript is the basis of my abilities</h4>
              <p className="text-white text-center">
                What is JavaScript and why it is used?.JavaScript. JavaScript is
                a programming language commonly used in web development. It was
                originally developed by Netscape as a means to add dynamic and
                interactive elements to websites. ... Like server-side scripting
                languages, such as PHP and ASP, JavaScript code can be inserted
                anywhere within the HTML of a webpage
              </p>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <img src={Js} style={{ width: " 20em", height: "19em" }} />
            </div>
          </div>
        </div>
        <div className="container mb-5 mt-5 pb-5 text">
          <div className="row d-flex align-items-center">
            <div className="col-6">
              <img src={Html} style={{ width: " 20em", height: "19em" }} />
            </div>
            <div className="col-6 card bg-dark card-body">
              <h4 className="text text-center">
              not only JavaScript, I also have HTML
              </h4>
              <p className="text-white">
                HTML stands for Hypertext Markup Language. It allows the user to
                create and structure sections, paragraphs, headings, links, and
                blockquotes for web pages and applications.
              </p>
            </div>
          </div>
        </div>
        <div className="container mb-5 mt-5 pb-5 text">
          <div className="row d-flex align-items-center">
            <div className="col-6 bg-dark card-body">
              <h4 className="text-center">A website without Css is like a vegetable that has less salt</h4>
              <p className="text-white">
              CSS3 is used with HTML to create and format content structure. It is responsible for colors, font properties, text alignments, background images, graphics, tables, etc. It provides the positioning of various elements with the values being fixed, absolute and relative.
              </p>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <img src={Css} style={{ width: " 20em", height: "19em" }} />
            </div>
          </div>
        </div>
        <div className="container mb-5 mt-5 pb-5 text">
          <div className="row d-flex align-items-center">
            <div className="col-6 ">
              <img src={Mongodb} style={{ width: " 20em", height: "19em" }} />
            </div>
            <div className="col-6 bg-dark card-body">
              <h4 className="text-center">so you have a lot of data , MongoDb is the answer</h4>
              <p className="text-white">
              MongoDB is an object-oriented, simple, dynamic, and scalable NoSQL database. It is based on the NoSQL document store model. The data objects are stored as separate documents inside a collection — instead of storing the data into the columns and rows of a traditional relational database
              </p>
            </div>
          </div>
        </div>
        <div className="container mb-5 mt-5 pb-5 text">
          <div className="row d-flex align-items-center">
            <div className="col-6 bg-dark card-body ">
              <h1 className="text-center">if the data is related to numbers i think sqlite is better</h1>
              <p className="text-white">
              SQLite is a popular choice as embedded database software for local/client storage in application software such as web browsers. It is arguably the most widely deployed database engine, as it is used today by several widespread browsers, operating systems, and embedded systems (such as mobile phones), among others.
              </p>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <img src={Sql} style={{ width: " 20em", height: "19em" }} />
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron fluid bg-dark ">
          <div className="container  ">
            <div className="row ">
              <div className="col-md left">
                <h3>Thanks to</h3>
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
    );
  }
}
