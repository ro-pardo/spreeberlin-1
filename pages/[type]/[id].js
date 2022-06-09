import Image from 'next/image';
import Link from 'next/link';
import prisma from '../../lib/prisma.tsx';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Article from '../../components/Article';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

export default function Artikel(props) {
    const router = useRouter();
    console.log(router.pathname.slice(0, 11));

    const [moreOpen, setMoreOpen] = useState(false);

    return (
        <>
            
                <Grid container p={1}>
                    <Grid item xs={1} md={2}></Grid>
                    <Grid item xs={10} md={8}>
                        <h1 className='heading-4'>{props.name}</h1>
                        <div className='description'>
                            <strong>{props.subheading}</strong>
                        </div>
                        <p className='articleText'>{props.text}</p>
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
                    </Grid>
                    <Grid item xs={1} md={2}></Grid>
                </Grid>
                <div
                    className='moreButton'
                    onClick={() => {
                        setMoreOpen(!moreOpen);
                    }}
                >
                    WEITERES
                </div>
                {moreOpen && (
                    <Box display='flex' alignItems='center'  m={1}>
                        <Grid container spacing={1}>
                            {props.more.map((item) => {
                                return (
                                    <>
                                        <Grid item xs={12} md={4}>
                                            <Article
                                                name={item.name}
                                                pic_url={item.pic_url}
                                                subheading1={item.subheading1}
                                                subheading2={item.subheading2}
                                                link={`/aktuelles/${item.id}`}
                                            />
                                        </Grid>
                                    </>
                                );
                            })}
                        </Grid>
                    </Box>
                )}{' '}
                <div className='mySpacer'></div>
           
        </>
    );
}

export async function getServerSideProps(context) {
    console.log('context', context);
    //console.log('loading article context', context.query.id);
    const article = await prisma.geschichte.findMany({
        where: { id: parseInt(context.query.id) },
    });

    const images = await prisma.images.findMany({
        where: { type: 'geschichte', article_id: parseInt(context.query.id) },
    });

    //console.log('images', images);

    const post = article[0];

    const moreCount = await prisma.aktuelles.count();
    const skip = Math.floor(Math.random() * moreCount);

    const moreArticle = await prisma.aktuelles.findMany({
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
