import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To AlyShop',
  description: 'We sell the best products for cheap',
  keywords: 'electronics, buy cheap electronics, best selling ecommerce',
};

export default Meta;
