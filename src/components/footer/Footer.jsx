import React from "react";

import {
  FaTelegramPlane,
} from "react-icons/fa";

import {
  VscMail,
}  from "react-icons/vsc";

const SocialShare = [
  { Social: <VscMail />, link: "mailto:contato@luova.dev.br" },
  { Social: <FaTelegramPlane />, link: "https://t.me/vitorfleite" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p> Luova
            © 2022 - {new Date().getFullYear()}
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
