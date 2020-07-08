import React, { useEffect } from "react"
import "./Skills.css"
import Aos from "aos"
import "aos/dist/aos.css"
import ProgressBar from 'react-animated-progress-bar';
import { Parallax } from 'react-parallax';

const Skills = () => {

    useEffect(() => {
        Aos.init({ duration: 500, disable: false })

    }, [])

    return (
        <section>
            <Parallax
                bgImage={require('../../images/fantasy-4063619_1280.jpg')}
                bgImageAlt="the cat"
                strength={300}


            >
                <div className="skills" data-aos="zoom-in">
                    <h1>Skills<hr className="line" /></h1>
                    <div className="skills-set mt-2">
                        <span data-aos="flip-left">
                            <h5>HTML5</h5>
                            <ProgressBar
                                width="500px"
                                height="15px"
                                rect
                                fontColor="white"
                                percentage="70"
                                rectPadding="3px"
                                rectBorderRadius="20px"
                                trackPathColor="transparent"
                                bgColor="#333333"
                                trackBorderColor="blue"
                                className="color"
                            />
                        </span>
                        <span data-aos="flip-right">
                            <h5>CSS3</h5>
                            <ProgressBar
                                width="500px"
                                height="15px"
                                rect
                                fontColor="white"
                                percentage="70"
                                rectPadding="3px"
                                rectBorderRadius="20px"
                                trackPathColor="transparent"
                                bgColor="#333333"
                                trackBorderColor="blue"
                                className="color"
                            />
                        </span>
                    </div>
                    <div className="skills-set mt-1">
                        <span data-aos="flip-left">
                            <h5>java Script</h5>
                            <ProgressBar
                                width="500px"
                                height="15px"
                                rect
                                fontColor="white"
                                percentage="70"
                                rectPadding="3px"
                                rectBorderRadius="5px"
                                trackPathColor="transparent"
                                bgColor="#333333"
                                trackBorderColor="blue"

                            />
                        </span>
                        <span data-aos="flip-right">
                            <h5>Python</h5>
                            <ProgressBar
                                width="500px"
                                height="15px"
                                rect
                                fontColor="white"
                                percentage="30"
                                rectPadding="1px"
                                rectBorderRadius="20px"
                                trackPathColor="transparent"
                                bgColor="#333333"
                                trackBorderColor="blue"

                            />
                        </span>
                    </div>
                    <div className="center">
                        <h4>Stack <hr className="line" /></h4>
                    </div>
                    <div className="Stack mt-3">

                        <span data-aos="flip-up">
                            <ProgressBar width="230" trackWidth="13" percentage="60" fontColor="white" />
                            <h6>React.Js</h6>
                        </span>
                        <span data-aos="flip-down">
                            <ProgressBar width="230" trackWidth="13" percentage="60" fontColor="white" />
                            <h6>Node JS</h6>
                        </span>
                        <span data-aos="flip-up">
                            <ProgressBar width="230" trackWidth="13" percentage="60" fontColor="black" />
                            <h6>Express JS</h6>
                        </span>
                        <span data-aos="flip-down">
                            <ProgressBar width="230" trackWidth="13" percentage="60" fontColor="black" />
                            <h6>Mongo Db</h6>
                        </span>
                    </div>
                </div>
            </Parallax>
        </section>
    )
}

export default Skills