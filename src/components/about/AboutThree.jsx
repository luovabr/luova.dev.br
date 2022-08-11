import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";

const AboutThree = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me-3.jpg" alt="about" />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  {/*<p></p> */}
                  <h3>Лuova</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Um pouco de nós</h3>
                </div>
                <div className="about-text">
                  <p>
                    A Luova tem como objetivo criar soluções inovadoras e 
                    competitivas na área de engenharia e tecnologia da informação.
                    Nós somos apaixonados em criar.
                  </p>
                  <p>
                    
                  </p>
                </div>
                {/*
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Nairobi Gadot</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>4th April 1994</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>26 years</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>San Francisco</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>(+38) 469 2344 2364</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>info@domainname.com</span>
                        </li>
                        <li>
                          <label>Skype: </label>
                          <span>nairob.40</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                */}
              </div>
            </div>
            
            
          </div>
          
          

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
          <div className="title">
            <h3>O que fazemos?</h3>
          </div>
          <Services />
          {/* End .row */}
          {/*
          
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
           
          
          <div className="title">
            <h3>Awards.</h3>
          </div>
          <Awards />
         
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
         

          <div className="title">
            <h3>Testimonials.</h3>
          </div>
          <Testimonials />
          
        */}
        </div>
      </section>
    </>
  );
};

export default AboutThree;
