import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Desenvolvimento de sites e aplicativos",
    descriptions: `Desenvolvemos sites e aplicativos com ferramentas modernas e utilizando metodologias de desenvolvimento ágil `,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "A definir",
    descriptions: `Desenvolvemos sites de alto impacto, visando o menor custo de manutenção.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "Automatização de Processos",
    descriptions: `Realizamos a transformação digital de seus processos: obtendo dados de forma automática e execução de tarefas de forma autônomaSS.`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
