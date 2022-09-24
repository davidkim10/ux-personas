import React from "react";
import ReactTooltip from "react-tooltip";
import { Card } from "../Card/Card";

import Facebook from "./img/facebook.svg";
import Instagram from "./img/instagram.svg";
import LinkedIn from "./img/linkedin.svg";
import Pinterest from "./img/pinterest.svg";
import SnapChat from "./img/snapchat.svg";
import TikTok from "./img/tiktok.svg";
import Twitter from "./img/twitter.svg";
import Tumblr from "./img/tumblr.png";
import "./SocialMedia.scss";

const config = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: LinkedIn,
  pinterest: Pinterest,
  snapchat: SnapChat,
  tiktok: TikTok,
  tumblr: Tumblr,
  twitter: Twitter,
};

export const SocialMedia = ({ data }) => {
  const { socialMedia } = data;
  return (
    <Card padding="2rem" center>
      <div className="social-media-container">
        {socialMedia.sort().map((platform, index) => (
          <img
            data-tip={platform}
            style={{ maxWidth: "35px" }}
            className="social-media-icon img-fluid"
            src={config[platform.toLowerCase()]}
            alt={platform}
            key={index}
          />
        ))}
        <ReactTooltip />
      </div>
    </Card>
  );
};
