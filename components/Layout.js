import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import { useRouter } from 'next/router';

import dynamic from 'next/dynamic';
import Script from 'next/script';

const Map = dynamic(
    () => import('./Map'),
    //console.log('dynamic loading map');,
    {
        loading: () => 'Loading...',
        ssr: false,
    }
);

const Layout = ({ children }) => {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <div>
                <div>
                    <Header />
                    <div className='wrapper'>
                        {router.pathname == '/' && <Map />}

                        {children}
                        <div className='push'></div>
                    </div>
                    <div className='myFooter'>
                    <Footer /></div>
                    <Script src='https://api.mapbox.com/mapbox-gl-js/v2.5.1/mapbox-gl.js'></Script>
                    <Script src='https://code.jquery.com/jquery-3.6.0.min.js' />
                    {/* <Script src='/webflow.js' /> */}
                </div>
            </div>
        </div>
    );
};
export default Layout;
