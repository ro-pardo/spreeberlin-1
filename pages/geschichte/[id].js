import Head from 'next/head';
import Image from 'next/image';

import prisma from '../../lib/prisma.tsx';

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

                    {props.images != undefined &&
                        props.images.map((index) => {
                            <Image
                                src={`/static/images/${props.images[index].pic_url}`}
                                loading='lazy'
                                sizes='100vw'
                                // layout="fill"
                                width='100%'
                                height='66%'
                                alt=''
                                className='image-14'
                            ></Image>;
                        })}
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const article = await prisma.geschichte.findMany({
        where: { id: parseInt(context.query.id) },
    });

    console.log(article[0]);
    //const post = article[0];

    //console.log('resulting post data', post);

    const images = await prisma.images.findMany({
        where: { type: 'geschichte', article_id: parseInt(context.query.id) },
    });

    console.log('images', images);

    const post = article[0];

    return {
        props: {
            id: post.id,
            name: post.name,
            subheading1: post.subheading1,
            subheading2: post.subheading2,
            text: post.text,
            images: images,
        },
    };
}
