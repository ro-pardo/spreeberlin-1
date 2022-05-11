import React from 'react';
import Layout from '../components/Layout';


import '../styles/globals.css';
import '../styles/normalize.css';
import '../styles/webflow.css';
import '../styles/MyCss.css';

import '../styles/spreeberlin2.css';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
