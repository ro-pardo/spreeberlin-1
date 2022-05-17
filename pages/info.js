import Head from 'next/head';
import Image from 'next/image';

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
                <div
                    className='heading-4'
                    onClick={() => {
                        console.log('clicked');
                        setInfo1_Open(!info1_Open);
                    }}
                >
                    INFO
                </div>
                {info1_Open && (
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
                    Relevanz
                </div>
                {info2_Open && (
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
                    Buoys
                </div>
                {info3_Open && (
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
