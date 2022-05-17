import Image from 'next/image';
import Link from 'next/link';
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
                    <p className='flowing-text'>{props.text}</p>
                    <div>
                        {props.images != undefined &&
                            props.images.map((item) => {
                                return (
                                    <>
                                        <Image
                                            src={`/static/images/${item.pic_url}`}
                                            loading='lazy'
                                            sizes='100vw'
                                            // layout="fill"
                                            width='100%'
                                            height='66%'
                                            alt=''
                                            key={item.id}
                                        ></Image>
                                        <div className=' myImageSpacer'></div>
                                    </>
                                );
                            })}
                    </div>
                    <div className='quellen'>{props.quellen}</div>
                    <div className='quellen'>
                        Bilder:
                        {props.images != undefined &&
                            props.images.map((item) => {
                                return (
                                    <>
                                        <Link
                                            href={`/static/images/${item.pic_url}`}
                                        >
                                            <a className='quellen'>
                                                {` Weblink ${item.id} `}{' '}
                                            </a>
                                        </Link>
                                    </>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    //console.log('loading article context', context.query.id);
    const article = await prisma.geschichte.findMany({
        where: { id: parseInt(context.query.id) },
    });

    //console.log(article[0]);
    //const post = article[0];

    //console.log('resulting post data', post);

    const images = await prisma.images.findMany({
        where: { type: 'geschichte', article_id: parseInt(context.query.id) },
    });

    //console.log('images', images);

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
