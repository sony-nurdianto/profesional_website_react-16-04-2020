import React from "react"
import { Parallax } from 'react-parallax';
import "./Landing.css"


const Landing = () => {
    return (
        <div id="landing">
            {/* <section className="landing-page">
                <div >
                    <div>
                        <h1 className="title">Hi, I'm Sony . I'm FullStack Developer .</h1>
                    </div>
                </div>
            </section> */}
            <section >
                <Parallax
                    // blur={10}
                    bgImage={require('../../images/black.jpg')}
                    bgImageAlt="the cat"
                    strength={300}

                >
                    <div className="landing ">
                        <div className="animate__animated animate__backInRight">
                            <h1 className="title  ">Hello,I'm<span className="name"> Sony Nurdianto.</span> i'am FullStack Developer</h1>
                        </div>
                    </div>
                    {/* <div style={{ height: '85vh' }} /> */}
                </Parallax>
            </section>
        </div>
    )
}

export default Landing

