import React from 'react';
import Layout from '../components/Layout';
import Map from '../components/Map';

import '../styles/globals.css'; ////Chechick for strange "/"-Bug OK!
import '../styles/normalize.css'; ////Chechick for strange "/"-Bug OK!
import '../styles/webflow.css'; ////Chechick for strange "/"-Bug OK!
 import '../styles/MyCss.css'; ////Chechick for strange "/"-Bug OK!
 //import '../styles/spreeberlin-5f27797deba49-45feb05d6a149.webflow.css';
 import '../styles/spreeberlin2.css';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
