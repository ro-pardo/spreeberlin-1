import Head from 'next/head';
import Image from 'next/image';

//import Article from '../components/Article';

//import styles from '../styles/Home.module.css';

export default function Artikel(props) {
    return (
        <>
            <div className='content'>
                <div className='container-11 w-container'>
                    <h1 className='heading-4'>{props.name}</h1>
                    <div className='description'>
                        <strong>{props.subheading}</strong>
                    </div>
                    <div className='flowing-text'>{props.text}</div>

                    <Image
                        src='/static/images/HistorischesFlussbad02.jpg'
                        loading='lazy'
                        sizes='100vw'
                        // layout="fill"
                        width='100%'
                        height='66%'
                        srcSet='/images/HistorischesFlussbad02-p-500.jpeg 500w, ../images/HistorischesFlussbad02-p-800.jpeg 800w, ../images/HistorischesFlussbad02-p-1080.jpeg 1080w, ../images/HistorischesFlussbad02.jpg 1200w'
                        alt=''
                        className='image-14'
                    ></Image>

                    <Image
                        src='/images/Historische-Fussbäder03.jpg'
                        loading='lazy'
                        sizes='100vw'
                        layout='fill'
                        srcSet='/images/Historische-Fussbäder03-p-500.jpeg 500w, ../images/Historische-Fussbäder03-p-800.jpeg 800w, ../images/Historische-Fussbäder03-p-1080.jpeg 1080w, ../images/Historische-Fussbäder03.jpg 1200w'
                        alt=''
                        className='image-14'
                    ></Image>
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    //console.log('Article loaded, ID: ', context.query.id);

    const server = 'http://localhost:3000';

    const res = await fetch(`${server}/api/geschichte/${context.query.id}`);

    console.log("response", res.json);
    const post = res;

    return {
        props: {
            id: post.id,
            name: post.name,
            subheading1: post.subheading1,
            subheading2: post.subheading2,
            text: post.text,
        },
    };
}
