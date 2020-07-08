import React, { useEffect } from "react"
import './About.css'
import Aos from "aos"
import "aos/dist/aos.css"




const About = () => {


    useEffect(() => {
        Aos.init({ duration: 500, disable: false })

    }, [])

    return (
        <section>
            <div className="About" data-aos="fade-down-right" data-aos-anchor-placement="top" >
                <h1 id="about">
                    About
                    <hr className="line" />
                </h1>
            </div>
            <div className="container About-description" data-aos="fade-down-left" data-aos-anchor-placement="top">
                <p className="description">
                    My Name is Sony Nurdianto. I am a coding enthusiast. creating, modifying and designing a program that can be useful for others is my own satisfaction.
                    I'am fast learning , easy to adapt and willing to learn .<span className="p-line"> give me a chance </span> and i will give my best contribution for you
               </p>
            </div>
        </section>


    )

}

export default About