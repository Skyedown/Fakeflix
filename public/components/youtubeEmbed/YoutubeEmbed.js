import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({
  embedId
}) => /*#__PURE__*/React.createElement("div", {
  className: "video-responsive"
}, /*#__PURE__*/React.createElement("iframe", {
  width: "100%",
  height: "900px",
  src: `https://www.youtube.com/embed/${embedId}`,
  frameBorder: "0",
  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  allowFullScreen: true,
  title: "Embedded youtube"
}));

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};
export default YoutubeEmbed;