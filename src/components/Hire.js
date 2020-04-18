import React, { Component } from "react";
import Email from "./images/gmail.png";
import Wa from './images/whatsapp.png'
import Lcard from './images/card-hire.png'
import './style.css'

export default class Hire extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          {/* <div className="row">
            <img src={Bg} alt=".." style={{ width: "100%" }} />
          </div> */}
          <div className="col-12 mt-5">
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src={Lcard} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h1 class="card-title">Are you intresting ?</h1>
                    <p class="card-text " style={{fontSize : "30px"}}>
                     If you intresting ,You can contact me with the contact I left below and I will directly approach you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid mb-0 mt-5 pt-2 pb-2">
            <div className="container ">
                <div className="row d-flex align-items-center">
                    <div className="col  text-center">
                        <img src={Wa} alt="..." style={{width : "60px"}}/>
                        <h6>(+62) 85646303062</h6>
                    </div>
                    <div className="col text-center">
                        <img src={Email} alt="..." style={{width : "60px"}}/>
                        <h6>sonynurdianto445@gmail.com</h6>
                    </div>
                    <div className="col text-center ">
                        <h5 >Here I'am :</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0467225748175!2d104.04891431415965!3d1.1268433625667114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d9891daa2580a7%3A0x9cb34451d9b2c7a7!2sRuang%20Kreasi!5e0!3m2!1sid!2sid!4v1587231415089!5m2!1sid!2sid" style={{ width :"600", height:"450" ,frameborder:"10%", border:"0" ,allowullscreen:"", ariaHidden:"false", tabindex:"0"}}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
