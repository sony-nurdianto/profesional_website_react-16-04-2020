import React from "react"
import "./Contact.css"
import { Parallax } from 'react-parallax';
import Tilt from 'react-parallax-tilt';


export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: "",
            scale: 1.3
        };
    }

    render() {
        const { status } = this.state;
        return (
            <section>
                {/* <Tilt
                    className="parallax-effect-img"
                    tiltMaxAngleX={40}
                    tiltMaxAngleY={40}
                    perspective={800}
                    transitionSpeed={1500}
                    scale={1.1}
                    gyroscope={true}
                > */}
                <Parallax
                    // blur={10}
                    bgImage={require('../../images/geometry.jpg')}
                    bgImageAlt="the cat"
                    strength={300}

                >
                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={35}
                        tiltMaxAngleY={35}
                        perspective={900}
                        scale={1.1}
                        transitionSpeed={2000}
                        gyroscope={true}
                    >
                        <div className="contact inner-element">

                            <div className="card p-3 rounded shadow masukan-card" >
                                <Tilt tiltEnable={false} scale={this.state.scale} transitionSpeed={2500}>
                                    <form
                                        onSubmit={this.submitForm}
                                        action="https://formspree.io/xrgyyjgq"
                                        method="POST"
                                    >
                                        <div className="jarak">
                                            <h2 className="masukan-title" >Contact</h2>
                                            <hr className="masukan-line" />
                                            <h6>Have a question or want to work together?</h6>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="name"
                                                name="email"
                                                placeholder="email"
                                            //   value={data.name}
                                            //   onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                id="message"
                                                name="message"
                                                placeholder="Pesan"
                                            //   value={data.email}
                                            //   onChange={handleChange}
                                            />
                                        </div>

                                        <div className="form-group form-check"></div>
                                        {status === "SUCCESS" ? <p style={{ color: "green" }}>Thanks!</p> : <button type="submit" className="btn  btn-primary">
                                            submit
                            </button>}
                                        {status === "ERROR" && <p style={{ color: "blue" }}>Ooops! There was an error.</p>}

                                    </form>
                                </Tilt>
                            </div>

                        </div>
                    </Tilt>
                    {/* </Tilt> */}
                </Parallax>
            </section>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}