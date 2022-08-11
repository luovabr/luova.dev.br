import React from "react";
import { TextLoop } from "react-text-loop-next";

const sliderContent = {
  name: "Лuova",
  description: `Desenvolvemos projetos que vão da nuvem até a palma da sua mão.`,
  btnText: "ENTRAR EM CONTATO",
  btnText2: "MEU PORTFÓLIO",
};

const SliderFive = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner home-banner-two slider-four bg-normal"
      >
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <div className="type-box">
                <h6>Olá...</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <TextLoop interval={200}>
                  <p className="loop-text lead">Desenvolvendo</p>
                  <p className="loop-text lead">Evoluindo</p>
                  <p className="loop-text lead">Progredindo</p>
                  <p className="loop-text lead">Criando</p>
                </TextLoop> {" "}
                <p className="desc">{sliderContent.description}</p>
                <div className="d-flex btn-wrapper">
                  <a className="px-btn px-btn-theme mr-4" href="#work">
                    {sliderContent.btnText2}
                  </a>
                  <a className="px-btn btn-outline " href="#contactus">
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-md-6 order-1 order-md-2">
              <img src="img/slider/home-professional-2.png" alt="" />
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div className="go-to go-to-next">
          <a href="#about">
            <span></span>
          </a>
        </div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default SliderFive;
