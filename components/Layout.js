import { useEffect, useState } from 'react';
import Header from './Header';
import HeaderBar from './HeaderBar';
import Footer from './Footer';

import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider, createTheme } from '@mui/material/styles';

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

const myTheme = createTheme({
    palette: {
        background: {
            default: '#2473ff',
        },
        text: { primary: '#ffffff' },
    },
    accordion: {
        root: {
            maxHeight: '3px',
        },
    },
});

const Layout = ({ children }) => {
    const router = useRouter();
    //console.log('Layout', router);
    return (
        <>
            <ThemeProvider theme={myTheme}>
                <CssBaseline />
                <div>
                    <div>
                        <Header />
                        <div className='wrapper'>
                            {router.pathname == '/' && <Map />}

                            {children}
                        </div>

                        <AppBar
                            position='fixed'
                            elevation={0}
                            sx={{
                                top: 'auto',
                                bottom: 0,
                                backgroundColor: '#2473ff',
                            }}
                        >
                            <Footer />
                        </AppBar>

                        <Script src='https://api.mapbox.com/mapbox-gl-js/v2.5.1/mapbox-gl.js'></Script>
                        <Script src='https://code.jquery.com/jquery-3.6.0.min.js' />
                        {/* <Script src='/webflow.js' /> */}
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
};
export default Layout;
