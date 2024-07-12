import React from "react";

const LazyImage = ({ src,alt,width,height }) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};

export default LazyImage;
