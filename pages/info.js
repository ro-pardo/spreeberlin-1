import Head from 'next/head';
import Image from 'next/image';

//import styles from '../styles/Home.module.css';
import Fade from 'react-reveal/Fade';

export default function Info() {
    return (
        <div className="content">
            <section className='section'>
                <div className='container'>
                    <h1 className='heading-3 info'>Info</h1>
                    <div className='description'>
                        In diesem Rahmen sind alle europäischen Länder
                        aufgefordert, ihre Gewässer in einem „guten Zustand“ zu
                        halten und zusätzlich einmal an den verschmutzten
                        Gewässern zu arbeiten. So kann ein gemeinsame Standard
                        auf dem ganzen Kontinent geschaffen werden. Das Programm
                        läuft derzeit und soll bis 2033 gehen.Bis dahin ist der
                        „gute Zustand“, per Definition: „Die Gewässer sind in
                        gutem Zustand, wenn ihre Lebensgemeinschaften, ihre
                        Struktur, die chemischen Bestandteile in den
                        Oberflächengewässern oder die chemischen Bestandteile
                        und ihre Menge im Grundwasser nur geringfügig vom
                        Menschen beeinflusst werden“. (4) erreicht sein.
                    </div>

                    <Image
                        src='/Stroke-1.svg'
                        loading='lazy'
                        alt=''
                        className='divider info'
                        layout="fill"
                    ></Image>
                    <h1 className='heading-3 info'>Boje</h1>
                    <Image
                        src='/Stroke-1.svg'
                        loading='lazy'
                        alt=''
                        className='divider info'
                        layout="fill"
                    ></Image>
                    <h1 className='heading-3 info'>Partner</h1>
                    <Image
                        src='/Stroke-1.svg'
                        loading='lazy'
                        alt=''
                        className='divider info'
                        layout="fill"
                    ></Image>
                    <h1 className='heading-3 info'>Kontakt</h1>
                    <Image
                        src='/Stroke-1.svg'
                        loading='lazy'
                        alt=''
                        className='divider info'
                        layout="fill"
                    ></Image>
                    <h1 className='heading-3 info'>Impressum</h1>
                </div>
            </section>
        </div>
    );
}
