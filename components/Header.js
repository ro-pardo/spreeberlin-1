import React from 'react';

import Hamburger from 'hamburger-react';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    //const [menuVisible, setMenuVisible] = useState(true);

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div
                data-collapse='medium'
                data-animation='default'
                data-duration='400'
                data-w-id='68b847b0-6442-084c-8200-708cd136ca5c'
                data-easing='ease'
                data-easing2='ease'
                role='banner'
                className='navbar-2 is-map w-nav'
            >
                <div className='container-2 w-container'>
                    <Link href='/'>
                        <a
                            aria-current='page'
                            className='brand-2 w-nav-brand w--current'
                        >
                            <Image
                                src='/static/images/SpreeBerlin_Logo2.svg'
                                loading='lazy'
                                width='480'
                                height='65'
                                alt=''
                                className='logo-image'
                            ></Image>
                        </a>
                    </Link>
                    <div className='menu-filler'></div>
                    <div className='main-nav-menu'>
                        <Link href='/'>
                            <a
                                aria-current='page'
                                className='nav-link w-nav-link w--current'
                            >
                                KARTE
                            </a>
                        </Link>
                        <Link href='/geschichte'>
                            <a className='nav-link w-nav-link'>GESCHICHTE</a>
                        </Link>
                        <Link href='/aktuelles'>
                            <a className='nav-link w-nav-link'>AKTUELLES</a>
                        </Link>

                        <Link href='/visionen'>
                            <a className='nav-link w-nav-link'>VISIONEN</a>
                        </Link>
                        <Link href='/info'>
                            <a className='nav-link special w-nav-link'>Info</a>
                        </Link>
                    </div>

                    <div className='menu-button w-nav-button myMenu'>
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                        <div
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
                        ></div>
                    </div>
                    {isOpen && (
                        <nav
                            role='navigation'
                            className='myOpenMenu'
                           
                        >
                            <a
                                href='index.html'
                                aria-current='page'
                                className='mobile-nav-link-extra w-nav-link w--current'
                            >
                                Karte
                            </a>
                            <Image
                                src='/static/images/Stroke-1.svg'
                                loading='lazy'
                                layout='fill'
                                alt=''
                                className='divider'
                            ></Image>
                            <a
                                href='news/news-overview.html'
                                className='mobile-nav-link-extra w-nav-link'
                            >
                                Aktuelles
                            </a>
                            <Image
                                src='/static/images/Stroke-1.svg'
                                loading='lazy'
                                layout='fill'
                                alt=''
                                className='divider'
                            ></Image>
                            <a
                                href='/static/history/geschichte.html'
                                layout='fill'
                                className='mobile-nav-link-extra w-nav-link'
                            >
                                Geschichte
                            </a>
                            <Image
                                src='/static/images/Stroke-1.svg'
                                layout='fill'
                                loading='lazy'
                                alt=''
                                className='divider'
                            ></Image>
                            <a
                                href='vision/vision.html'
                                className='mobile-nav-link-extra w-nav-link'
                            >
                                VISION
                            </a>
                            <Image
                                src='/static/images/Stroke-1.svg'
                                layout='fill'
                                loading='lazy'
                                alt=''
                                className='divider'
                            ></Image>
                            <a
                                href='info.html'
                                className='mobile-nav-link-extra w-nav-link'
                            >
                                info
                            </a>
                        </nav>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;
