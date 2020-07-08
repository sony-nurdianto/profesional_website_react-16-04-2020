import React, { useState, useEffect } from "react"
import "./Project.css"
import Aos from "aos"
import "aos/dist/aos.css"
import Tilt from 'react-parallax-tilt';
import Memoir from "../../images/Memoir.png"
import HTML5CSS3 from "../../images/HTMl5CSS3.png"
import BeliBaik from "../../images/Beli-Baik.png"



const Project = () => {

    const [scale] = useState(1.3);

    useEffect(() => {
        Aos.init({ duration: 500, disable: false })

    }, [])

    return (
        <section>

            <div className="title-Project" >
                <h1 >Project <hr className="line" /></h1>

            </div>

            <div className="myProject" >
                <Tilt scale={scale} transitionSpeed={2500}>
                    <div className="card shadow" data-aos="flip-up">
                        <img src={Memoir} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Memoir</h5>
                            <p className="card-text">Memoir is social Media platform where you can share your memories in there.</p>
                            <Tilt tiltEnable={true} scale={scale} transitionSpeed={2500} >
                                <a href="https://memoir-social.netlify.app" className="btn btn-primary" >See More</a>
                            </Tilt>
                        </div>
                    </div>
                </Tilt>
                <Tilt scale={scale} transitionSpeed={2500}>
                    <div className="card shadow" data-aos="flip-up">
                        <img src={BeliBaik} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Beli Baik</h5>
                            <p className="card-text">This project is company profile Web(Not Done Yet)</p>
                            <Tilt tiltEnable={true} scale={scale} transitionSpeed={2500}>
                                <a href="https://beli-baik.netlify.app" className="btn btn-primary" >See More</a>
                            </Tilt>
                        </div>
                    </div>
                </Tilt>
                <Tilt scale={scale} transitionSpeed={2500}>
                    <div className="card shadow" data-aos="flip-up">
                        <img src={HTML5CSS3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Html Css Web</h5>
                            <p className="card-text">This is my First Project simple website Html and Css.</p>
                            <Tilt tiltEnable={true} scale={scale} transitionSpeed={2500} >
                                <a href="https://sharp-noyce-bf67b6.netlify.app" className="btn btn-primary" >See More</a>
                            </Tilt>
                        </div>
                    </div>
                </Tilt>
            </div>

        </section>
    )

}

export default Project