import React from 'react';
import Helmet from 'react-helmet';

const HelmetTitle = ({ title }) => {
    return (
        <Helmet>
            <title>{title} - LA Customs</title>
        </Helmet>
    );
};

export default HelmetTitle;