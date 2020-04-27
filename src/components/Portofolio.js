import React, { Component } from 'react'
import './cv.css'
import Me from './images/me.jpeg'


export default class Portofolio extends Component {
    render() {
        return (
            <div>
        <div id="cv" className="instaFade">
          <div className="mainDetails">
            <div id="headshot" className="quickFade">
              <img src={Me} alt="Me" />
            </div>
            <div id="name">
              <h1 className="quickFade delayTwo">Sony Nurdianto</h1>
              <h2 className="quickFade delayThree">Web Developer</h2>
            </div>
            <div id="contactDetails" className="quickFade delayFour">
              <ul>
                <li>email: <a href="mailto:joe@bloggs.com" target="_blank">sonynurdianto445@gmail.com</a></li>
                <li>phone: (+62) 85646303062</li>
              </ul>
            </div>
            <div className="clear" />
          </div>
          <div id="mainArea" className="quickFade delayFive">
            <section>
              <article>
                <div className="sectionTitle">
                  <h1>Personal Profile</h1>
                </div>
                <div className="sectionContent">
                  <p>Hi nice to meet you, i'm javascript coding enthusiastic, i used to work on javascript ecosystems like react and express. give me an assignment and I will be responsible for completing it well</p>
                </div>
              </article>
              <div className="clear" />
            </section>
            <section>
              <div className="sectionTitle">
                <h1>Experience</h1>
              </div>
              <div className="sectionContent">
                <article>
                  <h2>Full Stack JavaScript Developer Student at Impact Byte</h2>
                  <p className="subDetails">16 March 2020 - 16 Mei 2020</p>
                  <p>Learn to be profesional programer , which is work in Javascript ecosystems like React Js , Express Js . hi nice to meet you, i'm javascript coding enthusiastic, i used to work on javascript ecosystems like react and express. give me an assignment and I will be responsible for completing it well</p>
                </article>
                <article>
                  <h2>Student at Glints Academy</h2>
                  <p className="subDetails">16 Mei 2020 - 20 juni 2020</p>
                  <p>Learnt to be profesional person ,learn how to work well together in teams, how to take responsibility for the tasks given and others</p>
                </article>
                {/* <article>
                  <h2>Job Title at Company</h2>
                  <p className="subDetails">October 2004 - December 2006</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                </article> */}
              </div>
              <div className="clear" />
            </section>
            <section>
              <div className="sectionTitle">
                <h1>Key Skills</h1>
              </div>
              <div className="sectionContent">
                <ul className="keySkills">
                  <li>JavaScript</li>
                  <li>Html5</li>
                  <li>Css3</li>
                  <li>React JS</li>
                  <li>Express js</li>
                  <li>Node Js</li>
                  <li>Python</li>
                  <li>Django</li>
                </ul>
              </div>
              <div className="clear" />
            </section>
            <section>
              <div className="sectionTitle">
                <h1>Education</h1>
              </div>
              <div className="sectionContent">
                <article>
                  <h2>widya mandala surabaya catholic university</h2>
                  <p className="subDetails">bachelor degree majoring in electronics (not graduated)</p>
                  <p>non scholae set vitadidicimus , if i am not wrong :) , that is the motto of my university, meaning that the school not only seeks knowledge but also for a better life. from there I was interested to enter this university because it was in accordance with my principles. I entered the faculty of engineering majoring in electronics, my biggest achievement while studying there might not be much, just won a slogan among the faculties that had not been won for 7 years.I stopped for a moment not stopped forever, because of financial problems</p>
                </article>
                <article>
                  <h2>Vocational High School Kartika 2 Surabaya</h2>
                  <p className="subDetails">majoring in light vehicle engineering</p>
                  <p>go to school here we are not only taught lessons in general but are also taught to be virtuous human beings who know what is right and wrong</p>
                </article>
              </div>
              <div className="clear" />
            </section>
          </div>
        </div>
      </div>
        )
    }
}
