import React from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { bojen } from '../../../bojen';

import Fade from 'react-reveal/Fade';

import { useEffect, useState } from 'react';

const Modal = ({ data }) => {
    const router = useRouter();
    const { id, latitude, longitude,name } = router.query;
    // const { name } = router.query;

    //const [data, setData] = useState({});

    return (
        <>
            <div className='content'>
                <Fade>
                    <div className='boje_overlay'>
                        <div className='boje-container-2'>
                            <div className='boje-control'>
                                <div className='boje-control-icon-2'>&lt;</div>
                                <Link href='/' passHref>
                                    <div className='boje-control-icon-2'>X</div>
                                </Link>
                                <div className='boje-control-icon-2'>&gt;</div>
                            </div>
                            <h1 className='boje-text headline'>
                                „HEUTE FÜHLE ICH MICH GESUND“
                            </h1>
                            <div className='boje-text'>{id} {name} {data.date}
                            </div>
                            <div className='boje-diagramm-messdaten'>
                                <div className='boje-daten'>
                                    <div
                                        id='w-node-_91d5a031-e56a-aad6-8365-73030d696ae2-a5759fef'
                                        className='boje-ph-wert-2'
                                    >
                                        <div className='ph-text-2'>
                                            {data.field1}
                                        </div>
                                        <div className='boje-info-footer-2'>
                                            pH
                                        </div>
                                    </div>
                                    <div
                                        id='w-node-_91d5a031-e56a-aad6-8365-73030d696ad8-a5759fef'
                                        className='boje-t-wert'
                                    >
                                        <div className='t-text-2'>
                                            {data.field2}°
                                        </div>
                                    </div>
                                    <div
                                        id='w-node-_91d5a031-e56a-aad6-8365-73030d696ad3-a5759fef'
                                        className='boje-mg-wert-2'
                                    >
                                        <div className='mg-text-2'>
                                            {data.field3}
                                        </div>
                                        <div className='boje-info-footer-2 blue'>
                                            mg/l
                                        </div>
                                    </div>
                                    <div
                                        id='w-node-_91d5a031-e56a-aad6-8365-73030d696add-a5759fef'
                                        className='boje-s-wert'
                                    >
                                        <div className='s-text-2'>
                                            {data.field4}
                                        </div>
                                        <div className='boje-info-footer-2'>
                                            µS/cm
                                        </div>
                                    </div>
                                </div>
                                <div className='boje-inner-container'>
                                    <div className='time-control-diagram'>
                                        <a
                                            href='#'
                                            className='button-messdaten-time w-button'
                                        >
                                            Day
                                        </a>
                                        <a
                                            href='#'
                                            className='button-messdaten-time w-button'
                                        >
                                            Week
                                        </a>
                                        <a
                                            href='#'
                                            className='button-messdaten-time w-button'
                                        >
                                            Month
                                        </a>
                                        <a
                                            href='#'
                                            className='button-messdaten-time w-button'
                                        >
                                            All
                                        </a>
                                    </div>
                                    <div
                                        data-duration-in='300'
                                        data-duration-out='100'
                                        data-current='Temperatur'
                                        data-easing='ease'
                                        className='tabs w-tabs'
                                    >
                                        <div className='w-tab-content'>
                                            <div
                                                data-w-tab='PH-Wert'
                                                className='w-tab-pane'
                                            >
                                                <Image
                                                    sizes='(max-width: 479px) 88vw, (max-width: 767px) 96vw, (max-width: 967px) 97vw, (max-width: 991px) 938px, 48vw'
                                                    srcSet='images/Screenshot-2021-11-18-at-17.37.19.png 500w, images/Screenshot-2021-11-18-at-17.37.19.png 800w, images/Screenshot-2021-11-18-at-17.37.19.png 938w'
                                                    src='/images/Screenshot-2021-11-18-at-17.37.19.png'
                                                    loading='lazy'
                                                    alt=''
                                                    layout='fill'
                                                ></Image>
                                            </div>
                                            <div
                                                data-w-tab='Temperatur'
                                                className='w-tab-pane w--tab-active'
                                            >
                                                <Image
                                                    sizes='(max-width: 479px) 88vw, (max-width: 767px) 96vw, (max-width: 938px) 97vw, (max-width: 991px) 910px, 48vw'
                                                    srcSet='images/Screenshot-2021-11-18-at-17.36.49.png 500w, images/Screenshot-2021-11-18-at-17.36.49.png 800w, images/Screenshot-2021-11-18-at-17.36.49.png 910w'
                                                    src='/images/Screenshot-2021-11-18-at-17.36.49.png'
                                                    loading='lazy'
                                                    alt=''
                                                    layout='fill'
                                                ></Image>
                                            </div>
                                            <div
                                                data-w-tab='Sauerstoffgehalt'
                                                className='w-tab-pane'
                                            ></div>
                                            <div
                                                data-w-tab='Leitfähigkeit'
                                                className='w-tab-pane'
                                            ></div>
                                        </div>
                                        <div className='tabs-menu w-tab-menu'>
                                            <a
                                                data-w-tab='PH-Wert'
                                                className='button-global-2 is-boje w-inline-block w-tab-link'
                                            >
                                                <div className='button-boje-container'>
                                                    <div className='small-circle'></div>
                                                    <div className='description boje'>
                                                        PH - Wert
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                data-w-tab='Temperatur'
                                                className='button-global-2 is-boje red w-inline-block w-tab-link w--current'
                                            >
                                                <div className='button-boje-container'>
                                                    <div className='small-circle red'></div>
                                                    <div className='description boje'>
                                                        Temperatur
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                data-w-tab='Sauerstoffgehalt'
                                                className='button-global-2 is-boje white w-inline-block w-tab-link'
                                            >
                                                <div className='button-boje-container'>
                                                    <div className='small-circle white'></div>
                                                    <div className='description boje'>
                                                        Sauerstoffgehalt
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                data-w-tab='Leitfähigkeit'
                                                className='button-global-2 is-boje black w-inline-block w-tab-link'
                                            >
                                                <div className='button-boje-container'>
                                                    <div className='small-circle black'></div>
                                                    <div className='description boje'>
                                                        Leitfähigkeit
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </>
    );
};

export default Modal;

export const getServerSideProps = async (context) => {
    const response = await fetch(
        `https://api.thingspeak.com/channels/${
            context.query.id
        }/feeds/last.json?api_key=${bojen[context.query.id]}`
    );

    const result = await response.json();
    console.log('result from ts api: ', result);

    return {
        props: {
            data: {
                field1: result.field1,
                field2: result.field2,
                field3: result.field3,
                field4: result.field4,
                date: result.created_at,
                
            },
        },
    };
};
