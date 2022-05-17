import Head from 'next/head';
import Image from 'next/image';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

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
                <Accordion className='heading-4' elevation={0}>
                    <AccordionSummary>INFO</AccordionSummary>
                    <AccordionDetails>
                        <div className='infoBox'>
                            <div className='section-2'>
                                <p className='flowing-text'>
                                    Im Kontext der Klimakrise und des damit
                                    einhergehenden gesellschaftlichen Wandels
                                    untersucht das Projekt die Beziehung
                                    zwischen Berlin und der Spree, dem
                                    städtischen Raum, den Bürgern und dem
                                    Gewässer. Wie kann dem Fluss eine eigene
                                    "politische" Stimme gegeben werden und was
                                    kann dazu beitragen, mehr Bewusstsein für
                                    die Spree und den Einfluss des Menschen zu
                                    schaffen? Mit Hilfe der Bojen macht das
                                    Gewässer auf die Verschmutzung aufmerksam.
                                    Digitale Werkzeuge und Medien, wie
                                    Messgeräte und App, erfassen den aktuellen
                                    Zustand des Flusses und vermitteln ihn den
                                    Bürgern auf zugängliche Weise. Spannende
                                    historische und aktuelle Artikel rund um das
                                    Thema werden ebenfalls kommuniziert. Eine
                                    Zukunftsebene auf der Website zeigt die
                                    ungenutzten Potenziale auf und
                                    veranschaulicht, wie sich die Stadt mit
                                    Hilfe des Flusses zum Besseren verändern
                                    könnte, und regt Bürger und Politiker zum
                                    Handeln an. In den heißen Sommermonaten
                                    pumpt die Boje Sauerstoff in den Fluss und
                                    versorgt die Spree und ihre Lebewesen damit.
                                    Der planetenzentrierte Ansatz bietet eine
                                    ganzheitliche und "grüne" Lösung für die
                                    verschiedenen Probleme und sorgt für ein
                                    gesünderes Gleichgewicht zwischen den
                                    beteiligten Akteuren.
                                </p>
                                <div className='myContainer'>
                                    <div className='myContainerItem'>
                                        <img
                                            src={`/static/images/SpreeBerlin_DASBILD_klein.jpg`}
                                            // width='490px'
                                            // height='420px'
                                            //  layout='intrinsic'
                                            className='infoImage'
                                        ></img>
                                    </div>
                                    <div className='myContainerItem'>
                                        <img
                                            src={`/static/images/Bouye03.jpg`}
                                            //   width='490px'
                                            // height='420px'
                                            //  layout='intrinsic'
                                            className='infoImage'
                                        ></img>
                                    </div>
                                </div>
                                <div className='myContainer'>
                                    <div className='myContainerItem'>
                                        <img
                                            src={`/static/images/HC-PCDesign-p-500.png`}
                                            // width='375px'
                                            // height='250px'
                                            // layout='fill'
                                            // layout='intrinsic'
                                            className='infoImage'
                                        ></img>
                                    </div>
                                    <div className='myContainerItem'>
                                        <img
                                            src={`/static/images/SpreeVision01.png`}
                                            // width='375px'
                                            // height='250px'
                                            // layout='fill'
                                            //layout='intrinsic'
                                            className='infoImage'
                                        ></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='heading-4' elevation={0}>
                    <AccordionSummary>Relevanz</AccordionSummary>
                    <AccordionDetails>
                        <div className='infoBox'>
                            <div className='section-2'>
                                <p className='flowing-text'>
                                    Während der umfangreichen Recherchen wurden
                                    viele Probleme identifiziert. Das Projekt
                                    SpreeBerlin konzentriert sich auf die
                                    Beziehung zwischen uns und dem Wasser und
                                    geht konkret auf das Sauerstoffproblem der
                                    Spree im innerstädtischen Bereich ein. Durch
                                    die Bildung über Probleme wie
                                    Kanalisationsüberläufe, die
                                    Flussarchitektur, die Nutzung der Gewässer
                                    durch Schifffahrt und Verkehr,
                                    Reifenverschleiß, Düngereintrag aus der
                                    Landwirtschaft, Sulfatbelastung aus dem
                                    Kohlebergbau oder Klimawandel kann ein
                                    Bewusstsein der Bürger*innen gestärkt
                                    werden. Im besten Fall inspiriert,
                                    mobilisiert und führt SpreeBerlin zu einer
                                    neuen Sichtweise auf unsere wertvolle
                                    Stadtnatur. Die Sensibilisierung durch Daten
                                    zur Wasserqualität lässt eine breite Masse
                                    von Menschen zu kleinen
                                    "Wissenschaftlern*innen" werden. Das Projekt
                                    ist auch ein praktischer Lösungsvorschlag
                                    für das Problem des Sauerstoffmangels in den
                                    Kanälen und des dadurch verursachten
                                    Fischsterbens. Derzeit ist eine der einzigen
                                    Lösungen das Sauerstoffpumpboot "Rudolf
                                    Kloos". Doch wie sinnvoll ist der
                                    kostspielige, arbeitsintensive, zeitraubende
                                    und umweltschädliche Einsatz des Bootes? Die
                                    Bojen könnten eine Alternative sein, die mit
                                    nachhaltiger Energie betrieben werden kann.
                                </p>
                                <div className='myContainer'>
                                    <div className='myContainerItem'>
                                        <img
                                            src={`/static/images/Blaualgen_Kanal-p-500.jpeg`}
                                            // width='490px'
                                            // height='420px'
                                            //  layout='intrinsic'
                                            className='infoImage'
                                        ></img>
                                    </div>
                                    <div className='myContainerItem'>
                                        <img
                                            src={`/static/images/Fischsterben.jpg`}
                                            //   width='490px'
                                            // height='420px'
                                            //  layout='intrinsic'
                                            className='infoImage'
                                        ></img>
                                    </div>
                                </div>
                                <div className='myContainer'>
                                    <div className='myContainerItem'>
                                        <img
                                            src={`/static/images/Rudolf_Kloos.png`}
                                            // width='375px'
                                            // height='250px'
                                            // layout='fill'
                                            // layout='intrinsic'
                                            className='infoImage'
                                        ></img>
                                    </div>
                                    <div className='myContainerItem'>
                                        <img
                                            src={`/static/images/Reederei-Riedel.png`}
                                            // width='375px'
                                            // height='250px'
                                            // layout='fill'
                                            //layout='intrinsic'
                                            className='infoImage'
                                        ></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='heading-4' elevation={0}>
                    <AccordionSummary>Buoys</AccordionSummary>
                    <AccordionDetails>
                        <div className='infoBox'>
                            <div className='section-2'>
                                <p className='flowing-text'>
                                    Im Kontext der Klimakrise und des damit
                                    einhergehenden gesellschaftlichen Wandels
                                    untersucht das Projekt die Beziehung
                                    zwischen Berlin und der Spree, dem
                                    städtischen Raum, den Bürgern und dem
                                    Gewässer. Wie kann dem Fluss eine eigene
                                    "politische" Stimme gegeben werden und was
                                    kann dazu beitragen, mehr Bewusstsein für
                                    die Spree und den Einfluss des Menschen zu
                                    schaffen? Mit Hilfe der Bojen macht das
                                    Gewässer auf die Verschmutzung aufmerksam.
                                    Digitale Werkzeuge und Medien, wie
                                    Messgeräte und App, erfassen den aktuellen
                                    Zustand des Flusses und vermitteln ihn den
                                    Bürgern auf zugängliche Weise. Spannende
                                    historische und aktuelle Artikel rund um das
                                    Thema werden ebenfalls kommuniziert. Eine
                                    Zukunftsebene auf der Website zeigt die
                                    ungenutzten Potenziale auf und
                                    veranschaulicht, wie sich die Stadt mit
                                    Hilfe des Flusses zum Besseren verändern
                                    könnte, und regt Bürger und Politiker zum
                                    Handeln an. In den heißen Sommermonaten
                                    pumpt die Boje Sauerstoff in den Fluss und
                                    versorgt die Spree und ihre Lebewesen damit.
                                    Der planetenzentrierte Ansatz bietet eine
                                    ganzheitliche und "grüne" Lösung für die
                                    verschiedenen Probleme und sorgt für ein
                                    gesünderes Gleichgewicht zwischen den
                                    beteiligten Akteuren.
                                </p>
                                <div className='myContainer'>
                                    <div className='myContainerItem'>
                                        <img
                                            src={`/static/images/SpreeBerlin_DASBILD_klein.jpg`}
                                            // width='490px'
                                            // height='420px'
                                            //  layout='intrinsic'
                                            className='infoImage'
                                        ></img>
                                    </div>
                                    <div className='myContainerItem'>
                                        <img
                                            src={`/static/images/Bouye03.jpg`}
                                            //   width='490px'
                                            // height='420px'
                                            //  layout='intrinsic'
                                            className='infoImage'
                                        ></img>
                                    </div>
                                </div>
                                <div className='myContainer'>
                                    <div className='myContainerItem'>
                                        <img
                                            src={`/static/images/HC-PCDesign-p-500.png`}
                                            // width='375px'
                                            // height='250px'
                                            // layout='fill'
                                            // layout='intrinsic'
                                            className='infoImage'
                                        ></img>
                                    </div>
                                    <div className='myContainerItem'>
                                        <img
                                            src={`/static/images/SpreeVision01.png`}
                                            // width='375px'
                                            // height='250px'
                                            // layout='fill'
                                            //layout='intrinsic'
                                            className='infoImage'
                                        ></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <div
                    className='heading-4'
                    onClick={() => {
                        console.log('clicked');
                        setInfo4_Open(!info4_Open);
                    }}
                >
                    Open Source
                </div>
                {info4_Open && (
                    <div className='infoBox'>
                        <div className='section-2'>
                            <p className='flowing-text'>
                                Im Kontext der Klimakrise und des damit
                                einhergehenden gesellschaftlichen Wandels
                                untersucht das Projekt die Beziehung zwischen
                                Berlin und der Spree, dem städtischen Raum, den
                                Bürgern und dem Gewässer. Wie kann dem Fluss
                                eine eigene "politische" Stimme gegeben werden
                                und was kann dazu beitragen, mehr Bewusstsein
                                für die Spree und den Einfluss des Menschen zu
                                schaffen? Mit Hilfe der Bojen macht das Gewässer
                                auf die Verschmutzung aufmerksam. Digitale
                                Werkzeuge und Medien, wie Messgeräte und App,
                                erfassen den aktuellen Zustand des Flusses und
                                vermitteln ihn den Bürgern auf zugängliche
                                Weise. Spannende historische und aktuelle
                                Artikel rund um das Thema werden ebenfalls
                                kommuniziert. Eine Zukunftsebene auf der Website
                                zeigt die ungenutzten Potenziale auf und
                                veranschaulicht, wie sich die Stadt mit Hilfe
                                des Flusses zum Besseren verändern könnte, und
                                regt Bürger und Politiker zum Handeln an. In den
                                heißen Sommermonaten pumpt die Boje Sauerstoff
                                in den Fluss und versorgt die Spree und ihre
                                Lebewesen damit. Der planetenzentrierte Ansatz
                                bietet eine ganzheitliche und "grüne" Lösung für
                                die verschiedenen Probleme und sorgt für ein
                                gesünderes Gleichgewicht zwischen den
                                beteiligten Akteuren.
                            </p>
                            <div className='myContainer'>
                                <div className='myContainerItem'>
                                    <img
                                        src={`/static/images/SpreeBerlin_DASBILD_klein.jpg`}
                                        // width='490px'
                                        // height='420px'
                                        //  layout='intrinsic'
                                        className='infoImage'
                                    ></img>
                                </div>
                                <div className='myContainerItem'>
                                    <img
                                        src={`/static/images/Bouye03.jpg`}
                                        //   width='490px'
                                        // height='420px'
                                        //  layout='intrinsic'
                                        className='infoImage'
                                    ></img>
                                </div>
                            </div>
                            <div className='myContainer'>
                                <div className='myContainerItem'>
                                    <img
                                        src={`/static/images/HC-PCDesign-p-500.png`}
                                        // width='375px'
                                        // height='250px'
                                        // layout='fill'
                                        // layout='intrinsic'
                                        className='infoImage'
                                    ></img>
                                </div>
                                <div className='myContainerItem'>
                                    <img
                                        src={`/static/images/SpreeVision01.png`}
                                        // width='375px'
                                        // height='250px'
                                        // layout='fill'
                                        //layout='intrinsic'
                                        className='infoImage'
                                    ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div
                    className='heading-4'
                    onClick={() => {
                        console.log('clicked');
                        setInfo1_Open(!info1_Open);
                    }}
                >
                    Partner
                </div>
                {info5_Open && (
                    <div className='infoBox'>
                        <div className='section-2'>
                            <p className='flowing-text'>
                                Im Kontext der Klimakrise und des damit
                                einhergehenden gesellschaftlichen Wandels
                                untersucht das Projekt die Beziehung zwischen
                                Berlin und der Spree, dem städtischen Raum, den
                                Bürgern und dem Gewässer. Wie kann dem Fluss
                                eine eigene "politische" Stimme gegeben werden
                                und was kann dazu beitragen, mehr Bewusstsein
                                für die Spree und den Einfluss des Menschen zu
                                schaffen? Mit Hilfe der Bojen macht das Gewässer
                                auf die Verschmutzung aufmerksam. Digitale
                                Werkzeuge und Medien, wie Messgeräte und App,
                                erfassen den aktuellen Zustand des Flusses und
                                vermitteln ihn den Bürgern auf zugängliche
                                Weise. Spannende historische und aktuelle
                                Artikel rund um das Thema werden ebenfalls
                                kommuniziert. Eine Zukunftsebene auf der Website
                                zeigt die ungenutzten Potenziale auf und
                                veranschaulicht, wie sich die Stadt mit Hilfe
                                des Flusses zum Besseren verändern könnte, und
                                regt Bürger und Politiker zum Handeln an. In den
                                heißen Sommermonaten pumpt die Boje Sauerstoff
                                in den Fluss und versorgt die Spree und ihre
                                Lebewesen damit. Der planetenzentrierte Ansatz
                                bietet eine ganzheitliche und "grüne" Lösung für
                                die verschiedenen Probleme und sorgt für ein
                                gesünderes Gleichgewicht zwischen den
                                beteiligten Akteuren.
                            </p>
                            <div className='myContainer'>
                                <div className='myContainerItem'>
                                    <img
                                        src={`/static/images/SpreeBerlin_DASBILD_klein.jpg`}
                                        // width='490px'
                                        // height='420px'
                                        //  layout='intrinsic'
                                        className='infoImage'
                                    ></img>
                                </div>
                                <div className='myContainerItem'>
                                    <img
                                        src={`/static/images/Bouye03.jpg`}
                                        //   width='490px'
                                        // height='420px'
                                        //  layout='intrinsic'
                                        className='infoImage'
                                    ></img>
                                </div>
                            </div>
                            <div className='myContainer'>
                                <div className='myContainerItem'>
                                    <img
                                        src={`/static/images/HC-PCDesign-p-500.png`}
                                        // width='375px'
                                        // height='250px'
                                        // layout='fill'
                                        // layout='intrinsic'
                                        className='infoImage'
                                    ></img>
                                </div>
                                <div className='myContainerItem'>
                                    <img
                                        src={`/static/images/SpreeVision01.png`}
                                        // width='375px'
                                        // height='250px'
                                        // layout='fill'
                                        //layout='intrinsic'
                                        className='infoImage'
                                    ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div
                    className='heading-4'
                    onClick={() => {
                        console.log('clicked');
                        setInfo1_Open(!info1_Open);
                    }}
                >
                    Kontakt
                </div>
                {info6_Open && (
                    <div className='infoBox'>
                        <div className='section-2'>
                            <p className='flowing-text'>
                                Im Kontext der Klimakrise und des damit
                                einhergehenden gesellschaftlichen Wandels
                                untersucht das Projekt die Beziehung zwischen
                                Berlin und der Spree, dem städtischen Raum, den
                                Bürgern und dem Gewässer. Wie kann dem Fluss
                                eine eigene "politische" Stimme gegeben werden
                                und was kann dazu beitragen, mehr Bewusstsein
                                für die Spree und den Einfluss des Menschen zu
                                schaffen? Mit Hilfe der Bojen macht das Gewässer
                                auf die Verschmutzung aufmerksam. Digitale
                                Werkzeuge und Medien, wie Messgeräte und App,
                                erfassen den aktuellen Zustand des Flusses und
                                vermitteln ihn den Bürgern auf zugängliche
                                Weise. Spannende historische und aktuelle
                                Artikel rund um das Thema werden ebenfalls
                                kommuniziert. Eine Zukunftsebene auf der Website
                                zeigt die ungenutzten Potenziale auf und
                                veranschaulicht, wie sich die Stadt mit Hilfe
                                des Flusses zum Besseren verändern könnte, und
                                regt Bürger und Politiker zum Handeln an. In den
                                heißen Sommermonaten pumpt die Boje Sauerstoff
                                in den Fluss und versorgt die Spree und ihre
                                Lebewesen damit. Der planetenzentrierte Ansatz
                                bietet eine ganzheitliche und "grüne" Lösung für
                                die verschiedenen Probleme und sorgt für ein
                                gesünderes Gleichgewicht zwischen den
                                beteiligten Akteuren.
                            </p>
                            <div className='myContainer'>
                                <div className='myContainerItem'>
                                    <img
                                        src={`/static/images/SpreeBerlin_DASBILD_klein.jpg`}
                                        // width='490px'
                                        // height='420px'
                                        //  layout='intrinsic'
                                        className='infoImage'
                                    ></img>
                                </div>
                                <div className='myContainerItem'>
                                    <img
                                        src={`/static/images/Bouye03.jpg`}
                                        //   width='490px'
                                        // height='420px'
                                        //  layout='intrinsic'
                                        className='infoImage'
                                    ></img>
                                </div>
                            </div>
                            <div className='myContainer'>
                                <div className='myContainerItem'>
                                    <img
                                        src={`/static/images/HC-PCDesign-p-500.png`}
                                        // width='375px'
                                        // height='250px'
                                        // layout='fill'
                                        // layout='intrinsic'
                                        className='infoImage'
                                    ></img>
                                </div>
                                <div className='myContainerItem'>
                                    <img
                                        src={`/static/images/SpreeVision01.png`}
                                        // width='375px'
                                        // height='250px'
                                        // layout='fill'
                                        //layout='intrinsic'
                                        className='infoImage'
                                    ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div
                    className='heading-4'
                    onClick={() => {
                        console.log('clicked');
                        setInfo1_Open(!info1_Open);
                    }}
                >
                    Impressum
                </div>
                {info7_Open && (
                    <div className='infoBox'>
                        <div className='section-2'>
                            <p className='flowing-text'>
                                Im Kontext der Klimakrise und des damit
                                einhergehenden gesellschaftlichen Wandels
                                untersucht das Projekt die Beziehung zwischen
                                Berlin und der Spree, dem städtischen Raum, den
                                Bürgern und dem Gewässer. Wie kann dem Fluss
                                eine eigene "politische" Stimme gegeben werden
                                und was kann dazu beitragen, mehr Bewusstsein
                                für die Spree und den Einfluss des Menschen zu
                                schaffen? Mit Hilfe der Bojen macht das Gewässer
                                auf die Verschmutzung aufmerksam. Digitale
                                Werkzeuge und Medien, wie Messgeräte und App,
                                erfassen den aktuellen Zustand des Flusses und
                                vermitteln ihn den Bürgern auf zugängliche
                                Weise. Spannende historische und aktuelle
                                Artikel rund um das Thema werden ebenfalls
                                kommuniziert. Eine Zukunftsebene auf der Website
                                zeigt die ungenutzten Potenziale auf und
                                veranschaulicht, wie sich die Stadt mit Hilfe
                                des Flusses zum Besseren verändern könnte, und
                                regt Bürger und Politiker zum Handeln an. In den
                                heißen Sommermonaten pumpt die Boje Sauerstoff
                                in den Fluss und versorgt die Spree und ihre
                                Lebewesen damit. Der planetenzentrierte Ansatz
                                bietet eine ganzheitliche und "grüne" Lösung für
                                die verschiedenen Probleme und sorgt für ein
                                gesünderes Gleichgewicht zwischen den
                                beteiligten Akteuren.
                            </p>
                            <div className='myContainer'>
                                <div className='myContainerItem'>
                                    <img
                                        src={`/static/images/SpreeBerlin_DASBILD_klein.jpg`}
                                        // width='490px'
                                        // height='420px'
                                        //  layout='intrinsic'
                                        className='infoImage'
                                    ></img>
                                </div>
                                <div className='myContainerItem'>
                                    <img
                                        src={`/static/images/Bouye03.jpg`}
                                        //   width='490px'
                                        // height='420px'
                                        //  layout='intrinsic'
                                        className='infoImage'
                                    ></img>
                                </div>
                            </div>
                            <div className='myContainer'>
                                <div className='myContainerItem'>
                                    <img
                                        src={`/static/images/HC-PCDesign-p-500.png`}
                                        // width='375px'
                                        // height='250px'
                                        // layout='fill'
                                        // layout='intrinsic'
                                        className='infoImage'
                                    ></img>
                                </div>
                                <div className='myContainerItem'>
                                    <img
                                        src={`/static/images/SpreeVision01.png`}
                                        // width='375px'
                                        // height='250px'
                                        // layout='fill'
                                        //layout='intrinsic'
                                        className='infoImage'
                                    ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
