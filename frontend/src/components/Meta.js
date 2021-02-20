import React from "react";
import Helmet from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "KhaShop",
  description: "Key is to Hold on to Anything",
  keywords: "online shop, e-commerce",
};

export default Meta;
