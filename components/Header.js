import React from 'react';

import { Cross as Hamburger } from 'hamburger-react'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Backdrop, Box, AppBar, Grid, Toolbar } from '@mui/material';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    //const [menuVisible, setMenuVisible] = useState(true);
    const router = useRouter();
    const [isOpen, setOpen] = useState(false);
    console.log('Header', router.query);
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <AppBar
                sx={{
                    zIndex: 2100,
                    backgroundColor: '#2473FF',
                }}
                elevation={0}
            >
                <Box display='flex'>
                    <Box sx={{ flexGrow: 1 }} p={1}>
                        <Link href='/'>
                            <a>
                                <Box sx={{ zIndex: 2000 }}>
                                    <img
                                        src='/static/images/SpreeBerlin_Logo2.svg'
                                        loading='lazy'
                                        width='480'
                                        height='80px'
                                        alt=''
                                        className='logo-image'
                                        marginleft={16}
                                        zIndex={1000000}
                                    ></img>
                                </Box>
                            </a>
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            marginTop: '32px',
                            marginRight: '16px',
                            zIndex: 1000,
                        }}
                        display={{ xs: 'none', lg: 'inline' }}
                    >
                        <Link href='/'>
                            <a
                                className={`menuLink ${
                                    router.pathname == '/' ? `current` : ''
                                }`}
                            >
                                KARTE
                            </a>
                        </Link>
                        <Link href='/geschichte'>
                            <a
                                className={`menuLink ${
                                    router.asPath == '/geschichte'
                                        ? `current`
                                        : ''
                                }`}
                            >
                                GESCHICHTE
                            </a>
                        </Link>
                        <Link href='/aktuelles'>
                            <a
                                className={`menuLink ${
                                    router.query.type == 'aktuelles'
                                        ? `current`
                                        : ''
                                }`}
                            >
                                AKTUELLES
                            </a>
                        </Link>

                        <Link href='/visionen'>
                            <a
                                className={`menuLink ${
                                    router.asPath == '/visionen'
                                        ? `current`
                                        : ''
                                }`}
                            >
                                VISIONEN
                            </a>
                        </Link>
                        <Link href='/info'>
                            <a
                                className={`menuLink ${
                                    router.pathname == '/info' ? `current` : ''
                                }`}
                            >
                                Info
                            </a>
                        </Link>
                    </Box>

                    <Box
                        display={{ xs: 'block', lg: 'none' }}
                        sx={{
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            marginRight: '16px',
                            zIndex: 1000000,
                        }}
                    >
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                        {/* <div
                                data-is-ix2-target='1'
                                className='lottie-animation'
                                data-w-id='68b847b0-6442-084c-8200-708cd136ca6b'
                                data-animation-type='lottie'
                                data-src='documents/lottieflow-menu-nav-07-ffffff-easey.json'
                                data-loop='0'
                                data-direction='1'
                                data-autoplay='0'
                                data-renderer='svg'
                                data-default-duration='2.4791666666666665'
                                data-duration='0'
                            ></div> */}
                    </Box>
                </Box>

                <Backdrop
                    sx={{
                        color: '#fff',
                        backgroundColor: 'rgba(36, 115, 255, 1)',
                        zIndex: - 1,
                    }}
                    open={isOpen}
                    onClick={handleClose}
                >
                    
                    <Box>
                        <Link href='/'>
                            <a
                                className={`mobileMenuLink  ${
                                    router.pathname == '/' ? `current` : ''
                                }`}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                Karte
                            </a>
                        </Link>

                        <Link href='/geschichte'>
                            <a
                                href='/static/history/geschichte.html'
                                layout='fill'
                                className={`mobileMenuLink  ${
                                    router.asPath == '/geschichte'
                                        ? `current`
                                        : ''
                                }`}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                Geschichte
                            </a>
                        </Link>
                        <Link href='/aktuelles'>
                            <a
                                href='news/news-overview.html'
                                className={`mobileMenuLink  ${
                                    router.asPath == '/aktuelles'
                                        ? `current`
                                        : ''
                                }`}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                Aktuelles
                            </a>
                        </Link>
                        <Link href='/visionen'>
                            <a
                                href='vision/vision.html'
                                className={`mobileMenuLink  ${
                                    router.asPath == '/visionen'
                                        ? `current`
                                        : ''
                                }`}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                VISIONEN
                            </a>
                        </Link>
                        <Link href='/info'>
                            <a
                                href='info.html'
                                className={`mobileMenuLink  ${
                                    router.asPath == '/info' ? `current` : ''
                                }`}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                info
                            </a>
                        </Link>
                    </Box>
                </Backdrop>
            </AppBar>
        </>
    );
};

export default Header;
