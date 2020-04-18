import React, { Component } from 'react'
import './cv.css'


export default class Portofolio extends Component {
    render() {
        return (
            <div>
        <div id="cv" className="instaFade">
          <div className="mainDetails">
            <div id="headshot" className="quickFade">
              <img src="headshot.jpg" alt="Alan Smith" />
            </div>
            <div id="name">
              <h1 className="quickFade delayTwo">Sony Nurdianto</h1>
              <h2 className="quickFade delayThree">Job Title</h2>
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor metus, interdum at scelerisque in, porta at lacus. Maecenas dapibus luctus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
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
                  <h2>Job Title at Company</h2>
                  <p className="subDetails">April 2011 - Present</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                </article>
                <article>
                  <h2>Job Title at Company</h2>
                  <p className="subDetails">Janruary 2007 - March 2011</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                </article>
                <article>
                  <h2>Job Title at Company</h2>
                  <p className="subDetails">October 2004 - December 2006</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                </article>
              </div>
              <div className="clear" />
            </section>
            <section>
              <div className="sectionTitle">
                <h1>Key Skills</h1>
              </div>
              <div className="sectionContent">
                <ul className="keySkills">
                  <li>A Key Skill</li>
                  <li>A Key Skill</li>
                  <li>A Key Skill</li>
                  <li>A Key Skill</li>
                  <li>A Key Skill</li>
                  <li>A Key Skill</li>
                  <li>A Key Skill</li>
                  <li>A Key Skill</li>
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
                  <h2>College/University</h2>
                  <p className="subDetails">Qualification</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                </article>
                <article>
                  <h2>College/University</h2>
                  <p className="subDetails">Qualification</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
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
