import React from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { bojen } from '../../../bojen';

import Fade from 'react-reveal/Fade';

import { useEffect, useState } from 'react';

const Modal = ({ data }) => {
    const router = useRouter();
    const { id, latitude, longitude, name } = router.query;
    // const { name } = router.query;

    //const [data, setData] = useState({});

    return (
        <>
            <div className='content'>
                <div className='boje_overlay-2'>
                    <div className='boje-container-3'>
                        <div className='boje-control-2'>
                            <div className='boje-control-icon-3'>&lt;</div>
                            <div className='boje-control-icon-3'>X</div>
                            <div className='boje-control-icon-3'>&gt;</div>
                        </div>
                        <h1 className='boje-text-2 headline'>
                            „HEUTE FÜHLE ICH MICH GESUND“
                        </h1>
                        <div className='boje-text-2'>
                            Boje 25, Fischerinsel: Friday, 22.8.21, 17:30
                        </div>
                        <div className='boje-diagramm-messdaten'>
                            <div className='boje-daten'>
                                <div
                                    id='w-node-_9ee6c07b-d823-8a56-cdd5-e22d148cccc6-c59f1401'
                                    className='boje-ph-wert-3'
                                >
                                    <div className='ph-text-2'>{data.field1}</div>
                                    <div className='boje-info-footer-2'>pH</div>
                                </div>
                                <div
                                    id='w-node-_9ee6c07b-d823-8a56-cdd5-e22d148ccccb-c59f1401'
                                    className='boje-t-wert'
                                >
                                    <div className='t-text-2'>{data.field2}</div>
                                </div>
                                <div
                                    id='w-node-_9ee6c07b-d823-8a56-cdd5-e22d148cccce-c59f1401'
                                    className='boje-mg-wert-3'
                                >
                                    <div className='mg-text-3'>{data.field3}</div>
                                    <div className='boje-info-footer-2 blue'>
                                        mg/l
                                    </div>
                                </div>
                                <div
                                    id='w-node-_9ee6c07b-d823-8a56-cdd5-e22d148cccd3-c59f1401'
                                    className='boje-s-wert'
                                >
                                    <div className='s-text-2'>{data.field4}</div>
                                    <div className='boje-info-footer-2'>µS/cm</div>
                                </div>
                            </div>
                            <div className='boje-inner-container'>
                                <div className='time-control-diagram'>
                                    <a
                                        href='#'
                                        className='button-messdaten-time-2 w-button'
                                    >
                                        Day
                                    </a>
                                    <a
                                        href='#'
                                        className='button-messdaten-time-2 w-button'
                                    >
                                        Week
                                    </a>
                                    <a
                                        href='#'
                                        className='button-messdaten-time-2 w-button'
                                    >
                                        Month
                                    </a>
                                    <a
                                        href='#'
                                        className='button-messdaten-time-2 w-button'
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
                                                sizes='(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, 48vw'
                                                srcSet='static/images/Screenshot-2021-11-18-at-17.37.19-p-500.png 500w, images/Screenshot-2021-11-18-at-17.37.19-p-800.png 800w, images/Screenshot-2021-11-18-at-17.37.19.png 938w'
                                                src='/static/images/Screenshot-2021-11-18-at-17.37.19.png'
                                                loading='lazy'
                                                alt=''
                                                layout="fill"
                                            ></Image>
                                        </div>
                                        <div
                                            data-w-tab='Temperatur'
                                            className='w-tab-pane w--tab-active'
                                        >
                                            <Image
                                                sizes='(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1919px) 48vw, 910px'
                                                srcSet='static/images/Screenshot-2021-11-18-at-17.36.49-p-500.png 500w, images/Screenshot-2021-11-18-at-17.36.49-p-800.png 800w, images/Screenshot-2021-11-18-at-17.36.49.png 910w'
                                                src='/static/images/Screenshot-2021-11-18-at-17.36.49.png'
                                                loading='lazy'
                                                alt=''
                                                layout="fill"
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
                                    <div className='tabs-menu-2 w-tab-menu'>
                                        <a
                                            data-w-tab='PH-Wert'
                                            className='button-global-4 is-boje w-inline-block w-tab-link'
                                        >
                                            <div className='button-boje-container'>
                                                <div className='small-circle-2'></div>
                                                <div className='description-3 boje'>
                                                    PH - Wert
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            data-w-tab='Temperatur'
                                            className='button-global-4 is-boje red w-inline-block w-tab-link w--current'
                                        >
                                            <div className='button-boje-container'>
                                                <div className='small-circle-2 red'></div>
                                                <div className='description-3 boje'>
                                                    Temperatur
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            data-w-tab='Sauerstoffgehalt'
                                            className='button-global-4 is-boje white w-inline-block w-tab-link'
                                        >
                                            <div className='button-boje-container'>
                                                <div className='small-circle-2 white'></div>
                                                <div className='description-3 boje'>
                                                    O2
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            data-w-tab='Leitfähigkeit'
                                            className='button-global-4 is-boje black w-inline-block w-tab-link'
                                        >
                                            <div className='button-boje-container'>
                                                <div className='small-circle-2 black'></div>
                                                <div className='description-3 boje'>
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
