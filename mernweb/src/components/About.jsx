import React from 'react';

const About = () => {
    return (
        <div>
            <section id="about" className="pb-5">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/blog4.jfif" alt="About" className="w-75 mt-5" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="display-6 mb-2">WHO<b> ARE</b> WE</h1>
                            <hr className="w-50"/>
                            <p className="lead mb-4">After our around the world trip, we bought a house and settled down. We balanced work,school,and a handful of extracurricular activities with travel and the work of running this website. Our website has done so well that every one can quit the jobs for some days and enjoy the world trip.</p>
                            <a href='/recommend'><button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button></a>
                            <a href='/contact'><button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
