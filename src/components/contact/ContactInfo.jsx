import React from "react";

import {
  FaTelegramPlane,
} from "react-icons/fa";

import {
  VscMail,
}  from "react-icons/vsc";


const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>Qual a sua história? Entrar em contato</h4>
        <p>
          Sempre disponível para freelancer se o projeto certo aparecer,
          sinta-se livre para entrar em contato.
        </p>

        <ul>
          <li className="media">
            <i classname="icon"><VscMail /></i>
            <span className="media-body">contato@luova.dev.br</span>
          </li>
          <li className="media">
            <i className="icon"><FaTelegramPlane /></i>
            <span className="media-body">+55-11-985-735-266</span>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;
