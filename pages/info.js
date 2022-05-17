import Head from 'next/head';
import Image from 'next/image';

export default function Info() {
    return (
        <>
            <div className='content'>
                <div class="heading-4">INFO</div>
                <div className='infoBox'>
                    <div className='section-2'>
                        <p className='flowing-text'>
                            Im Kontext der Klimakrise und des damit
                            einhergehenden gesellschaftlichen Wandels untersucht
                            das Projekt die Beziehung zwischen Berlin und der
                            Spree, dem städtischen Raum, den Bürgern und dem
                            Gewässer. Wie kann dem Fluss eine eigene
                            "politische" Stimme gegeben werden und was kann dazu
                            beitragen, mehr Bewusstsein für die Spree und den
                            Einfluss des Menschen zu schaffen? Mit Hilfe der
                            Bojen macht das Gewässer auf die Verschmutzung
                            aufmerksam. Digitale Werkzeuge und Medien, wie
                            Messgeräte und App, erfassen den aktuellen Zustand
                            des Flusses und vermitteln ihn den Bürgern auf
                            zugängliche Weise. Spannende historische und
                            aktuelle Artikel rund um das Thema werden ebenfalls
                            kommuniziert. Eine Zukunftsebene auf der Website
                            zeigt die ungenutzten Potenziale auf und
                            veranschaulicht, wie sich die Stadt mit Hilfe des
                            Flusses zum Besseren verändern könnte, und regt
                            Bürger und Politiker zum Handeln an. In den heißen
                            Sommermonaten pumpt die Boje Sauerstoff in den Fluss
                            und versorgt die Spree und ihre Lebewesen damit. Der
                            planetenzentrierte Ansatz bietet eine ganzheitliche
                            und "grüne" Lösung für die verschiedenen Probleme
                            und sorgt für ein gesünderes Gleichgewicht zwischen
                            den beteiligten Akteuren.
                        </p>
                        <div className='myContainer'>
                            <div className='myContainerItem'>
                            <Image
                                src={`/static/images/SpreeBerlin_DASBILD_klein.jpg`}
                                width='375px'
                                height='250px'
                                 layout='fill'
                            ></Image></div>
                            <div className='myContainerItem'>
                            <Image
                                src={`/static/images/Bouye03.jpg`}
                                width='375px'
                                height='250px'
                                layout='fill'
                                //layout='intrinsic'
                            ></Image></div>
                        </div>
                        <div className='myContainer'>
                            <div className='myContainerItem'>
                            <Image
                                src={`/static/images/HC-PCDesign-p-500.png`}
                                width='375px'
                                height='250px'
                                layout='fill'
                                // layout='intrinsic'
                            ></Image></div>
                            <div className='myContainerItem'>
                            <Image
                                src={`/static/images/SpreeVision01.png`}
                                width='375px'
                                height='250px'
                                layout='fill'
                                //layout='intrinsic'
                            ></Image></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
