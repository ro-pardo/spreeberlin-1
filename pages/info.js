import Head from 'next/head';
import Image from 'next/image';

import Grid from '@mui/material/Grid';
import B from '@mui/material/Box';
import Link from 'next/link';

import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

import { useEffect, useState } from 'react';

export default function Info(props) {
    const [info1_Open, setInfo1_Open] = useState(false);
    const [info2_Open, setInfo2_Open] = useState(false);
    const [info3_Open, setInfo3_Open] = useState(false);
    const [info4_Open, setInfo4_Open] = useState(false);
    const [info5_Open, setInfo5_Open] = useState(false);
    const [info6_Open, setInfo6_Open] = useState(false);
    const [info7_Open, setInfo7_Open] = useState(false);

    return (
        <>
            <div className='content'>
                <div className='container-rubriken'>
                    <img
                        src='/static/images/Stroke-1.svg'
                        className='divider info'
                    />
                    <Accordion
                        className='heading-4'
                        sx={{
                            backgroundColor: '#2473ff',
                            color: '#ffffff',
                            '&:before': {
                                display: 'none',
                            },
                        }}
                        elevation={0}
                    >
                        <AccordionSummary elevation={0}>INFO</AccordionSummary>
                        <AccordionDetails elevation={0}>
                            <Grid container spacing={2}>
                                <Grid
                                    item
                                    xs={12}
                                    md={4}
                                    className='flowing-text'
                                >
                                    <p className='flowing-text'>
                                        Im Kontext der Klimakrise und des damit
                                        einhergehenden gesellschaftlichen
                                        Wandels untersucht das Projekt die
                                        Beziehung zwischen Berlin und der Spree,
                                        dem städtischen Raum, den Bürgern und
                                        dem Gewässer. Wie kann dem Fluss eine
                                        eigene "politische" Stimme gegeben
                                        werden und was kann dazu beitragen, mehr
                                        Bewusstsein für die Spree und den
                                        Einfluss des Menschen zu schaffen? Mit
                                        Hilfe der Bojen macht das Gewässer auf
                                        die Verschmutzung aufmerksam. Digitale
                                        Werkzeuge und Medien, wie Messgeräte und
                                        App, erfassen den aktuellen Zustand des
                                        Flusses und vermitteln ihn den Bürgern
                                        auf zugängliche Weise. Spannende
                                        historische und aktuelle Artikel rund um
                                        das Thema werden ebenfalls kommuniziert.
                                        Eine Zukunftsebene auf der Website zeigt
                                        die ungenutzten Potenziale auf und
                                        veranschaulicht, wie sich die Stadt mit
                                        Hilfe des Flusses zum Besseren verändern
                                        könnte, und regt Bürger und Politiker
                                        zum Handeln an. In den heißen
                                        Sommermonaten pumpt die Boje Sauerstoff
                                        in den Fluss und versorgt die Spree und
                                        ihre Lebewesen damit. Der
                                        planetenzentrierte Ansatz bietet eine
                                        ganzheitliche und "grüne" Lösung für die
                                        verschiedenen Probleme und sorgt für ein
                                        gesünderes Gleichgewicht zwischen den
                                        beteiligten Akteuren.
                                    </p>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={4}
                                    className='flowing-text'
                                    container
                                    spacing={2}
                                >
                                    <Grid item xs={12}>
                                        <img src='/static/images/SpreeBerlin_DASBILD_klein.jpg'></img>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <img src='/static/images/Bouye03.jpg'></img>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={4}
                                    className='flowing-text'
                                    container
                                >
                                    <Grid item xs={12}>
                                        <img src='/static/images/HC-PCDesign-p-500.png'></img>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <img src='/static/images/SpreeVision01.png'></img>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <img
                        src='/static/images/Stroke-1.svg'
                        className='divider info'
                    />
                    <Accordion
                        className='heading-4'
                        sx={{
                            backgroundColor: '#2473ff',
                            color: '#ffffff',
                            '&:before': {
                                display: 'none',
                            },
                        }}
                        elevation={0}
                    >
                        <AccordionSummary elevation={0}>
                            Relevanz
                        </AccordionSummary>
                        <AccordionDetails elevation={0}>
                            <Grid container spacing={2}>
                                <Grid xs={12} md={4} className='flowing-text'>
                                    <p>
                                        Während der umfangreichen Recherchen
                                        wurden viele Probleme identifiziert. Das
                                        Projekt SpreeBerlin konzentriert sich
                                        auf die Beziehung zwischen uns und dem
                                        Wasser und geht konkret auf das
                                        Sauerstoffproblem der Spree im
                                        innerstädtischen Bereich ein. Durch die
                                        Bildung über Probleme wie
                                        Kanalisationsüberläufe, die
                                        Flussarchitektur, die Nutzung der
                                        Gewässer durch Schifffahrt und Verkehr,
                                        Reifenverschleiß, Düngereintrag aus der
                                        Landwirtschaft, Sulfatbelastung aus dem
                                        Kohlebergbau oder Klimawandel kann ein
                                        Bewusstsein der Bürger*innen gestärkt
                                        werden. Im besten Fall inspiriert,
                                        mobilisiert und führt SpreeBerlin zu
                                        einer neuen Sichtweise auf unsere
                                        wertvolle Stadtnatur. Die
                                        Sensibilisierung durch Daten zur
                                        Wasserqualität lässt eine breite Masse
                                        von Menschen zu kleinen
                                        "Wissenschaftlern*innen" werden. Das
                                        Projekt ist auch ein praktischer
                                        Lösungsvorschlag für das Problem des
                                        Sauerstoffmangels in den Kanälen und des
                                        dadurch verursachten Fischsterbens.
                                        Derzeit ist eine der einzigen Lösungen
                                        das Sauerstoffpumpboot "Rudolf Kloos".
                                        Doch wie sinnvoll ist der kostspielige,
                                        arbeitsintensive, zeitraubende und
                                        umweltschädliche Einsatz des Bootes? Die
                                        Bojen könnten eine Alternative sein, die
                                        mit nachhaltiger Energie betrieben
                                        werden kann.
                                    </p>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={4}
                                    className='flowing-text'
                                    container
                                    spacing={2}
                                >
                                    <Grid item xs={12}>
                                        <img src='/static/images/Blaualgen_Kanal.jpg'></img>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <img src='/static/images/Reederei_Riedel.jpeg'></img>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={4}
                                    className='flowing-text'
                                    container
                                >
                                    <Grid item xs={12}>
                                        <img src='/static/images/Fischsterben.jpg'></img>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <img src='/static/images/Rudolf_Kloos01.jpg'></img>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <img
                        src='/static/images/Stroke-1.svg'
                        className='divider info'
                    />
                    <Accordion
                        className='heading-4'
                        elevation={0}
                        sx={{
                            backgroundColor: '#2473ff',
                            color: '#ffffff',
                            '&:before': {
                                display: 'none',
                            },
                        }}
                    >
                        <AccordionSummary elevation={0}>Bojen</AccordionSummary>
                        <AccordionDetails elevation={0}>
                            <Grid container spacing={2}>
                                <Grid
                                    item
                                    xs={12}
                                    md={8}
                                    className='flowing-text'
                                    container
                                    spacing={2}
                                >
                                    <Grid item xs={12} md={6}>
                                        Die Boje schwimmt im Spreekanal und
                                        versorgt das Wasser mit Sauerstoff.
                                        Oberhalb der Wasseroberfläche wird die
                                        Wasserqualität reflektiert. Die
                                        Energieversorgung kann zum einen durch
                                        das Ökostromnetz der Stadt, zum anderen
                                        durch menschliche Kraft (Sportgeräte
                                        o.ä.) erfolgen.
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <img src='/static/images/SpreeBerlin_Bodemuseum.jpg'></img>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <img src='/static/images/Boje_Sideview.jpg'></img>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <img src='/static/images/Boje_Modellfunktion.jpg'></img>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={4}
                                    className='flowing-text'
                                    container
                                >
                                    <img src='/static/images/Boje_Descritpion-p-2000.jpeg'></img>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <img
                        src='/static/images/Stroke-1.svg'
                        className='divider info'
                    />
                    <Accordion
                        className='heading-4'
                        elevation={0}
                        sx={{
                            backgroundColor: '#2473ff',
                            color: '#ffffff',
                            '&:before': {
                                display: 'none',
                            },
                        }}
                    >
                        <AccordionSummary>Open Source</AccordionSummary>
                        <AccordionDetails elevation={0}>
                            <Grid container spacing={2}>
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    className='flowing-text'
                                >
                                    <h6>COMING SOON</h6>
                                    SpreeBerlin ist Mitglied des
                                    <Link href='https://opennext.eu/'>
                                        <a> OpenNext! </a>
                                    </Link>
                                    Formates. Derzeit werden Module für ein Open
                                    Source Zugang vorbereitet und schon bald zur
                                    Verfügung gestellt! Das Projekt hat den
                                    Anspruch der Open Source & Open Hardware
                                    gedanken zu verkörpern.
                                </Grid>
                                <Grid item xs={6}></Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <img
                        src='/static/images/Stroke-1.svg'
                        className='divider info'
                    />
                    <Accordion
                        className='heading-4'
                        elevation={0}
                        sx={{
                            backgroundColor: '#2473ff',
                            color: '#ffffff',
                            '&:before': {
                                display: 'none',
                            },
                        }}
                    >
                        <AccordionSummary>Partner</AccordionSummary>
                        <AccordionDetails elevation={0}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <img src='/static/images/BMBF_Logo_DE.jpg'></img>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <img src='/static/images/Logo_Biooekonomie.jpg'></img>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <img src='/static/images/WID_Logo_DE.jpg'></img>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <img src='/static/images/Logo_WID.jpg'></img>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <img src='/static/images/WID_Logo_DE.jpg'></img>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <img src='/static/images/TU_Logo.jpg'></img>
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <img src='/static/images/GDG_Preis_Logo.jpg'></img>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <img src='/static/images/BHT_Logo.jpg'></img>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <img src='/static/images/Logo_OpenNext.jpg'></img>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <img src='/static/images/Logo_CityLab.jpg'></img>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <img src='/static/images/Logo_TechnologieStiftung.jpg'></img>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <img src='/static/images/Logo_SustainALL.jpg'></img>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <img
                        src='/static/images/Stroke-1.svg'
                        className='divider info'
                    />
                    <Accordion
                        className='heading-4'
                        elevation={0}
                        sx={{
                            backgroundColor: '#2473ff',
                            color: '#ffffff',
                            '&:before': {
                                display: 'none',
                            },
                        }}
                    >
                        <AccordionSummary>Kontakt</AccordionSummary>
                        <AccordionDetails elevation={0}>
                            <div className='infoBox'>
                                <Grid container spacing={2}>
                                    <Grid
                                        item
                                        xs={12}
                                        
                                        className='myFlex'
                                    >
                                        <p className='flowing-text'>
                                            <strong>Symbiotic LAB</strong>
                                        </p>
                                        <Link href='mailto:info@symbiotic-lab.com'>
                                            <a className='flowing-text'>
                                                info(at)symbiotic-lab.com
                                            </a>
                                        </Link>
                                        <Link href='https://www.symbiotic-lab.com'>
                                            <a className='flowing-text'>
                                                www.symbiotic-lab.com
                                            </a>
                                        </Link>
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                 
                                        className='myFlex'
                                    >
                                        <p className='flowing-text'>
                                            <strong>JKUKULA</strong>
                                        </p>
                                        <Link href='mailto:info@jakobkukula.com'>
                                            <a className='flowing-text'>
                                                info(at)jakobkukula.com
                                            </a>
                                        </Link>
                                        <Link href='https://www.jakobkukula.com'>
                                            <a className='flowing-text'>
                                                www.jakobkukula.com
                                            </a>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <img
                        src='/static/images/Stroke-1.svg'
                        className='divider info'
                    />
                    <Accordion
                        className='heading-4'
                        elevation={0}
                        sx={{
                            backgroundColor: '#2473ff',
                            color: '#ffffff',
                            '&:before': {
                                display: 'none',
                            },
                        }}
                    >
                        <AccordionSummary>Impressum</AccordionSummary>
                        <AccordionDetails elevation={0}>
                            <div className='infoBox'>
                                <div>
                                    <p className='flowing-text'>
                                        {`
                                    JAKOB KUKULA 
                                    LINIENSTRßE 110 
                                    10115 BERLIN
                                    GERMANY 

                                    +ENTWICKLUNG GRÜNDER & KREATIV DIREKTION // JAKOB KUKULA 
                                    CI & WEBDESIGN // DAVID HEUER 
                                    TECHNISCHE WEB ENTWICKLUNG // SASCHA HOFFMANN & JULIUS BORN 
                                    TEXTE // MOANA WALDECK 
                                    
                                    + BESONDEREN DANK KH-WEIßENSEE, FAKULTÄT PRODUKT DESIGN 
                                    PROF. NILS KRUEGER &
                                    PROF. LUCY NORRIS 
                                    BMBF, WISSENSCHAFT IM DIALOG 
                                    STAATLICHE MUSEEN ZU BERLIN // DR CLAUDIA BANZ 
                                    IZT BERLIN // FELIX BEER
                                    CITYLAB // SARA REICHERT 
                                    OPEN NEXT! // DANIEL WIESSOLEK 
                                    MORGEN.JETZT // MARTHA STARKE 
                                    FLUSSBAD BERLIN // CARSTEN RIECHELMANN 
                                    RALF STEEG 
                                    NIKLAS LIEBETRAU`}
                                    </p>
                                    <div>
                                        <Link href='/datenschutz'>
                                            <a className='myTextLink'>
                                                + DATENSCHUTZ
                                            </a>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href='/impressum'>
                                            <a className='myTextLink'>
                                                + IMPRESSUM KOMPLETT
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </AccordionDetails>
                        <img
                            src='/static/images/Stroke-1.svg'
                            className='divider info'
                        />
                    </Accordion>
                </div>
            </div>
        </>
    );
}
