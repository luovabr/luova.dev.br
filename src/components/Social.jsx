import React from "react";
import {
  FaGithub,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaGithub />, link: "https://github.com/luovabr/" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
