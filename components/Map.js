import ReactMapGL, {
    NavigationControl,
    Marker,
    Popup,
    StyledPopup,
    FlyToInterpolator,
} from 'react-map-gl';

import ClickAwayListener from 'react-click-away-listener';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
//import 'mapbox-gl/dist/mapbox-gl.css';

const navControlStyle = {
    right: 30,
    bottom: 40,
};

const Map = (props) => {
    //console.log('props bojen: ', props);
    //console.log('markerVisible: ', markerVisible);
    const [bojen, setBojen] = useState([]);

    const [bojenIds, setBojenIds] = useState([]);

    const [aktuelles, setAktuelles] = useState([]);

    const [aktuellesIds, setAktuellesIds] = useState([]);

    const [geschichte, setGeschichte] = useState([]);

    const [geschichteIds, setGeschichteIds] = useState([]);

    const [visionen, setVisionen] = useState([]);

    const [visionenIds, setVisionenIds] = useState([]);

    const [smallPopUp, setSmallPopUp] = useState({
        smallPopUp: false,
    });

    const [smallPopUpObj, setSmallPopUpObj] = useState({
        smallPopUpObj: undefined,
    });

    const [bojenVisible, setBojenVisible] = useState(true);
    const [aktuellesVisible, setAktuellesVisible] = useState(true);
    const [geschichteVisible, setGeschichteVisible] = useState(true);
    const [visionenVisible, setVisionenVisible] = useState(true);

    const [viewport, setViewport] = useState({
        latitude: 52.5,
        longitude: 13.4376,
        zoom: 11,
    });

    const zoomToLocation = function (id) {
        if (!bojen[bojenIds.indexOf(id)]) {
            return;
        }
        setViewport({
            longitude: parseFloat(bojen[bojenIds.indexOf(id)].longitude),
            latitude: parseFloat(bojen[bojenIds.indexOf(id)].latitude),
            zoom: 13,
            transitionDuration: 1000,
            transitionInterpolator: new FlyToInterpolator(),
        });
    };

    const toggleSmallPopUp = function (id, type) {
        //console.log('opening small popUp', id);
        let smallPopUpObj = {};
        if (type == 'bojen') {
            smallPopUpObj.latitude = parseFloat(
                bojen[bojenIds.indexOf(id)].latitude
            );
            smallPopUpObj.longitude = parseFloat(
                bojen[bojenIds.indexOf(id)].longitude
            );
            smallPopUpObj.name = bojen[bojenIds.indexOf(id)].name;
            smallPopUpObj.url = `/bojen/${id}`;
        } else if (type == 'aktuelles') {
            smallPopUpObj.latitude =
                aktuelles[aktuellesIds.indexOf(id)].latitude;
            smallPopUpObj.longitude =
                aktuelles[aktuellesIds.indexOf(id)].longitude;
            smallPopUpObj.name = aktuelles[aktuellesIds.indexOf(id)].name;
            smallPopUpObj.excerpt = aktuelles[aktuellesIds.indexOf(id)].excerpt;
            smallPopUpObj.url = aktuelles[aktuellesIds.indexOf(id)].url;
        } else if (type == 'geschichte') {
            smallPopUpObj.latitude =
                geschichte[geschichteIds.indexOf(id)].latitude;
            smallPopUpObj.longitude =
                geschichte[geschichteIds.indexOf(id)].longitude;
            smallPopUpObj.name = geschichte[geschichteIds.indexOf(id)].name;
            smallPopUpObj.excerpt =
                geschichte[geschichteIds.indexOf(id)].excerpt;
            smallPopUpObj.url = geschichte[geschichteIds.indexOf(id)].url;
        } else if (type == 'visionen') {
            smallPopUpObj.latitude = visionen[visionenIds.indexOf(id)].latitude;
            smallPopUpObj.longitude =
                visionen[visionenIds.indexOf(id)].longitude;
            smallPopUpObj.name = visionen[visionenIds.indexOf(id)].name;
            smallPopUpObj.excerpt = visionen[visionenIds.indexOf(id)].excerpt;
            smallPopUpObj.url = visionen[visionenIds.indexOf(id)].url;
        }
        setSmallPopUpObj(smallPopUpObj);
        setSmallPopUp(true);

        console.log('popUpstate', smallPopUp);
    };

    const closeSmallPopUp = function (id) {
        setSmallPopUp(false);
    };
    const fetchData = async () => {
        console.log('fetching data in Map Component');
        const thingspeakResult = await fetch(
            `https://api.thingspeak.com/channels.json?api_key=OVE9Q2S2S33RE0U3`
        );

        const thingspeakResult2 = await thingspeakResult.json();

        console.log('thingspeak', thingspeakResult2);

        const aktuellesResult = await fetch(`/api/aktuelles`);
        const geschichteResult = await fetch(`/api/geschichte`);
        const visionenResult = await fetch(`/api/visionen`);

        const result_geschichte = await geschichteResult.json();
        const result_aktuelles = await aktuellesResult.json();
        const result_visionen = await visionenResult.json();

        //console.log('result: ', result_geschichte);

        setBojen(thingspeakResult2);
        const bojenIds = [];
        thingspeakResult2.map((item) => {
            bojenIds.push(item.id);
        });
        setBojenIds(bojenIds);

        setAktuelles(result_aktuelles);
        const aktuellesIds = [];
        result_aktuelles.map((item) => {
            aktuellesIds.push(item.id);
        });
        setAktuellesIds(aktuellesIds);

        setGeschichte(result_geschichte);
        const geschichteIds = [];
        result_geschichte.map((item) => {
            geschichteIds.push(item.id);
        });
        setGeschichteIds(geschichteIds);

        setVisionen(result_visionen);
        const visionenIds = [];
        result_visionen.map((item) => {
            visionenIds.push(item.id);
        });
        setVisionenIds(visionenIds);
    };
    useEffect(() => {
        console.log('map mounting new');
        fetchData();
        setGeschichteVisible(true);
        setBojenVisible(true);
        setAktuellesVisible(true);
        setVisionenVisible(true);
    }, []);

    // useEffect(() => {
    //     console.log('bojen updated');
    // }, [bojen]);
    return (
        <>
            <ReactMapGL
                {...viewport}
                width='100vw'
                height='96vh'
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
                mapboxApiAccessToken={
                    'pk.eyJ1IjoianVsaXVzYm9ybiIsImEiOiJja3pjczM2cXQyMmlwMnZueGZpcWw5ZmM2In0.hJKj_m9lxXdIN0EOws_CYA'
                }
                mapStyle='mapbox://styles/juliusborn/cktei1ivp0lom17phbvuexxfb'
                className='map-container'
            >
                {bojenVisible == true &&
                    bojen.map((item, index) => {
                        return (
                            <Marker
                                latitude={parseFloat(item.latitude)}
                                longitude={parseFloat(item.longitude)}
                                offsetLeft={-20}
                                offsetTop={-10}
                                key={item.id}
                            >
                                <Image
                                    src='/Marker1.svg'
                                    height={'20em'}
                                    width={'20em'}
                                    alt=''
                                    onClick={() => {
                                        //console.log(item);
                                        toggleSmallPopUp(item.id, 'bojen');
                                        zoomToLocation(item.id);
                                    }}
                                ></Image>
                            </Marker>
                        );
                    })}

                {aktuellesVisible == true &&
                    aktuelles.map((item, index) => {
                        return (
                            <Marker
                                latitude={parseFloat(item.latitude)}
                                longitude={parseFloat(item.longitude)}
                                offsetLeft={-20}
                                offsetTop={-10}
                                key={item.id}
                            >
                                <Image
                                    src='/Marker2.svg'
                                    height={'20em'}
                                    width={'20em'}
                                    alt=''
                                    onClick={() => {
                                        //console.log(item);
                                        toggleSmallPopUp(item.id, 'aktuelles');
                                        zoomToLocation(item.id);
                                    }}
                                ></Image>
                            </Marker>
                        );
                    })}

                {geschichteVisible == true &&
                    geschichte.map((item, index) => {
                        return (
                            <Marker
                                latitude={parseFloat(item.latitude)}
                                longitude={parseFloat(item.longitude)}
                                offsetLeft={-20}
                                offsetTop={-10}
                                key={item.id}
                            >
                                <Image
                                    src='/Marker3.svg'
                                    width={'20em'}
                                    height={'20em'}
                                    alt=''
                                    onClick={() => {
                                        //console.log(item);
                                        toggleSmallPopUp(item.id, 'geschichte');
                                        zoomToLocation(item.id);
                                    }}
                                ></Image>
                            </Marker>
                        );
                    })}
                {visionenVisible &&
                    visionen.map((item, index) => {
                        return (
                            <Marker
                                latitude={parseFloat(item.latitude)}
                                longitude={parseFloat(item.longitude)}
                                offsetLeft={-20}
                                offsetTop={-10}
                                key={item.id}
                            >
                                <Image
                                    src='/Marker4.svg'
                                    width={'20em'}
                                    height={'20em'}
                                    alt=''
                                    onClick={() => {
                                        //console.log(item);
                                        toggleSmallPopUp(item.id, 'visionen');
                                        zoomToLocation(item.id);
                                    }}
                                ></Image>
                            </Marker>
                        );
                    })}
                {smallPopUp == true && (
                    <Popup
                        latitude={smallPopUpObj.latitude}
                        longitude={smallPopUpObj.longitude}
                        closeOnClick={true}
                        closeButton={true}
                    >
                        <ClickAwayListener onClickAway={closeSmallPopUp}>
                            <div className='markerPopUp'>
                                <h2 className='markerPopUp'>
                                    {smallPopUpObj.name}
                                </h2>
                                <h5 className='markerPopUp'>
                                    {smallPopUpObj.excerpt}
                                </h5>
                                <Link href={smallPopUpObj.url} passHref>
                                    <a className='infos'>INFOS</a>
                                </Link>
                            </div>
                        </ClickAwayListener>
                    </Popup>
                )}

                <NavigationControl
                    style={navControlStyle}
                    showCompass={false}
                />
            </ReactMapGL>
            <div className='map-control-overlay'>
                <div className='map-control-container'>
                    <div
                        className={`map-control-item-buoys${
                            bojenVisible ? `` : `_toggled`
                        }`}
                        onClick={() => setBojenVisible(!bojenVisible)}
                    >
                        <div
                            className={`map-control-buoys${
                                bojenVisible ? `` : `_toggled`
                            }`}
                        >
                            Bojen
                        </div>
                    </div>
                    <div
                        className={`map-control-item-history${
                            geschichteVisible ? `` : `_toggled`
                        }`}
                        onClick={() => setGeschichteVisible(!geschichteVisible)}
                    >
                        <div
                            className={`map-control-history${
                                geschichteVisible ? `` : `_toggled`
                            }`}
                        >
                            History
                        </div>
                    </div>
                    <div
                        className='map-control-item-aktuelles'
                        onClick={() => setAktuellesVisible(!aktuellesVisible)}
                    >
                        <div className='map-control-projects'>Projekte</div>
                    </div>

                    <div
                        className='map-control-item-future'
                        onClick={() => setVisionenVisible(!visionenVisible)}
                    >
                        <div className='map-control'>Visionen</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Map;
