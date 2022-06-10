import Image from 'next/image';
import Link from 'next/link';
import prisma from '../../lib/prisma.tsx';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Article from '../../components/Article';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { Typography } from '@mui/material';

export default function Artikel(props) {
    const router = useRouter();
    console.log(router.pathname.slice(0, 11));

    const [moreOpen, setMoreOpen] = useState(false);

    useEffect(() => {
        console.log('content type udated');

        setMoreOpen(false);
    }, [router.asPath]);

    return (
        <>
            <Box sx={{ minHeight: '128px' }}></Box>
            <Grid container p={1}>
                <Grid item xs={0} md={2}></Grid>
                <Grid item xs={12} md={8}>
                    <p className='heading-4'>{props.name}</p>

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
                <Grid item xs={0} md={2}></Grid>
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
                <Box display='flex' alignItems='center' m={1}>
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
                                            link={`/${props.moreType}/${item.id}`}
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
    //console.log('loading article context', context.query.id);

    console.log('context', context.query.type);

    let article = [];

    let moreCount = 0;
    let moreArticle = [];
    let images = [];
    let moreType = '';

    if (context.query.type == 'geschichte') {
        article = await prisma.geschichte.findMany({
            where: { id: parseInt(context.query.id) },
        });
        images = await prisma.images.findMany({
            where: {
                type: 'geschichte',
                article_id: parseInt(context.query.id),
            },
        });
        moreCount = await prisma.aktuelles.count();
        const skip = Math.floor(Math.random() * moreCount);

        moreArticle = await prisma.aktuelles.findMany({
            skip: skip,
            take: 3,
        });
        moreType = 'aktuelles';
    }

    if (context.query.type == 'aktuelles') {
        article = await prisma.aktuelles.findMany({
            where: { id: parseInt(context.query.id) },
        });
        images = await prisma.images.findMany({
            where: {
                type: 'aktuelles',
                article_id: parseInt(context.query.id),
            },
        });
        moreCount = await prisma.visionen.count();
        const skip = Math.floor(Math.random() * moreCount);

        moreArticle = await prisma.visionen.findMany({
            skip: skip,
            take: 3,
        });
        moreType = 'visionen';
    }

    if (context.query.type == 'visionen') {
        article = await prisma.visionen.findMany({
            where: { id: parseInt(context.query.id) },
        });
        images = await prisma.images.findMany({
            where: {
                type: 'visionen',
                article_id: parseInt(context.query.id),
            },
        });
        moreCount = await prisma.geschichte.count();
        const skip = Math.floor(Math.random() * moreCount);

        moreArticle = await prisma.geschichte.findMany({
            skip: skip,
            take: 3,
        });
        moreType = 'geschichte';
    }

    const post = article[0];

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
            moreType: moreType,
        },
    };
}
