import { useEffect, useState } from 'react';
import Header from './Header';
import HeaderBar from './HeaderBar';
import Footer from './Footer';

import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
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
        <>
            <CssBaseline />
            <div>
                <div>
                    <Header />
                    <div className='wrapper'>
                        {router.pathname == '/' && <Map />}

                        {children}
                        {/* <div className='push'></div> */}
                    </div>

                    <AppBar
                        position='fixed'
                        elevation={0}
                        sx={{
                            top: 'auto',
                            bottom: 0,
                            backgroundColor: '#ffffff',
                        }}
                    >
                        <Footer />
                    </AppBar>

                    <Script src='https://api.mapbox.com/mapbox-gl-js/v2.5.1/mapbox-gl.js'></Script>
                    <Script src='https://code.jquery.com/jquery-3.6.0.min.js' />
                    {/* <Script src='/webflow.js' /> */}
                </div>
            </div>
        </>
    );
};
export default Layout;
