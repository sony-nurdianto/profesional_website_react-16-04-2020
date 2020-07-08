import React from "react"
import Landing from "../components/Landing/index"
import About from "../components/About/index"
import Skills from "../components/Skills/index"
import Project from "../components/Project/index"
import Contact from "../components/Contact/index"
import Footer from "../components/Footer/index"
import "./Home.css"



const Home = () => {

    return (
        <div className="HomePage">
            <section>
                <Landing />
            </section>
            <section>
                <About />
            </section>
            <section>
                <Skills />
            </section>
            <section>
                <Project />
            </section>
            <section >
                <Contact />
            </section>
            <section>
                <Footer id="footer" />
            </section>
        </div>
    )

}

export default Home