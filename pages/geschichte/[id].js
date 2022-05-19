import Image from 'next/image';
import Link from 'next/link';
import prisma from '../../lib/prisma.tsx';

import Grid from '@mui/material/Grid';
import Article from '../../components/Article';
import { useEffect, useState } from 'react';

export default function Artikel(props) {
    const [moreOpen, setMoreOpen] = useState(false);

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
                                            // layout="instrinsic"
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
<div className='containerRubriken'>                    <div
                        data-hover='false'
                        data-delay='0'
                        data-w-id='6d69fd2e-6599-3690-d5d8-89a8224017c4'
                        // style='height:80px'
                        className='accordion-item-2 w-dropdown'
                    >
                        <div className='accordion-toggle-2 w-dropdown-toggle'>
                            <div
                                className='heading-3'
                                onClick={() => {
                                    setMoreOpen(!moreOpen);
                                }}
                            >
                                WEITERES
                            </div>
                        </div>
                        {moreOpen && (
                            <div>
                                {props.more.map((item) => {
                                    return (
                                        <>
                                            <div className='w-layout-grid grid'>
                                                <Article
                                                    name={item.name}
                                                    pic_url={item.pic_url}
                                                    subheading1={
                                                        item.subheading1
                                                    }
                                                    subheading2={
                                                        item.subheading2
                                                    }
                                                    link={`/visionen/${item.id}`}
                                                />
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div></div>

            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    //console.log('loading article context', context.query.id);
    const article = await prisma.geschichte.findMany({
        where: { id: parseInt(context.query.id) },
    });

    const images = await prisma.images.findMany({
        where: { type: 'geschichte', article_id: parseInt(context.query.id) },
    });

    //console.log('images', images);

    const post = article[0];

    const moreCount = await prisma.visionen.count();
    const skip = Math.floor(Math.random() * moreCount);

    const moreArticle = await prisma.visionen.findMany({
        skip: skip,
        take: 3,
    });

    const more = JSON.parse(JSON.stringify(moreArticle.reverse()));
    console.log('more', more);
    return {
        props: {
            id: post.id,
            name: post.name,
            subheading1: post.subheading1,
            subheading2: post.subheading2,
            text: post.text,
            images: images,
            more: more,
        },
    };
}
