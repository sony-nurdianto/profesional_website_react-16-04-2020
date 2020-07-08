import React from "react"
import "./Footer.css"




const Footer = () => {
    return (
        <section>

            <div className="footer">
                <div className="big mt-5">
                    <div className="footer-icon">
                        <a href="www.linkedin.com/in/sony-nurdianto-a831571a7"><i className="fa fa-linkedin-square h1 icon" aria-hidden="true" ></i></a >
                        <a href="https://github.com/sony-nurdianto"> <i className="fa fa-github-alt h1 icon" aria-hidden="true"></i></a>
                        <a href="https://wa.me/6285646303062"><i className="fa fa-whatsapp h1 icon" aria-hidden="true"></i></a>
                    </div>
                    <div className="waterMark mt-2">
                        <h6>Sony Nurdianto <span>@2020</span></h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer