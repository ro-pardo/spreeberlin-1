import Image from 'next/image';

import Article from '../../components/Article';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

import prisma from '../../lib/prisma.tsx';

import { useRouter } from 'next/router';

export default function Geschichte(props) {
    const [moreOpen, setMoreOpen] = useState(false);

    const router = useRouter();

    useEffect(() => {
        //console.log('content type udated');

        setMoreOpen(false);
    }, [router.asPath]);

    return (
        <>
            <Box sx={{ minHeight: '132px' }}></Box>
            {router.query.type == 'geschichte' && (
                <h1 className='heading-3'>GESCHICHTE</h1>
            )}
            {router.query.type == 'aktuelles' && (
                <h1 className='heading-3'>AKTUELLES</h1>
            )}
            {router.query.type == 'visionen' && (
                <h1 className='heading-3'>VISIONEN</h1>
            )}
            <Box display='flex' alignItems='center' margin={2}>
                <Grid container spacing={1}>
                    {props.posts.map((item) => {
                        return (
                            <>
                                <Grid item xs={12} md={4}>
                                    <Article
                                        name={item.name}
                                        pic_url={item.pic_url}
                                        subheading1={item.subheading1}
                                        subheading2={item.subheading2}
                                        link={`/${router.query.type}/${item.id}`}
                                    />
                                </Grid>
                            </>
                        );
                    })}
                </Grid>{' '}
            </Box>
            <div>
                <div
                    className='moreButton'
                    onClick={() => {
                        setMoreOpen(!moreOpen);
                    }}
                >
                    WEITERES
                </div>
                <div className='mySpacer'></div>
            </div>
            {moreOpen && (
                <Box display='flex' alignItems='center' margin={2}>
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
    //console.log('context', context.query.type);

    let article = [];

    let moreCount = 0;
    let moreArticle = [];
    let moreType = '';

    if (context.query.type == 'geschichte') {
        article = await prisma.geschichte.findMany();
        moreCount = await prisma.aktuelles.count();
        const skip = Math.floor(Math.random() * moreCount);
        moreArticle = await prisma.aktuelles.findMany({
            skip: skip,
            take: 3,
        });
        moreType = 'aktuelles';
    }

    if (context.query.type == 'aktuelles') {
        article = await prisma.aktuelles.findMany();
        moreCount = await prisma.visionen.count();
        const skip = Math.floor(Math.random() * moreCount);
        moreArticle = await prisma.visionen.findMany({
            skip: skip,
            take: 3,
        });
        moreType = 'visionen';
    }

    if (context.query.type == 'visionen') {
        article = await prisma.visionen.findMany();
        moreCount = await prisma.geschichte.count();
        const skip = Math.floor(Math.random() * moreCount);
        moreArticle = await prisma.geschichte.findMany({
            skip: skip,
            take: 3,
        });
        moreType = 'geschichte';
    }

    const posts = JSON.parse(JSON.stringify(article.reverse()));

    //console.log('getting static props', posts);

    const more = JSON.parse(JSON.stringify(moreArticle.reverse()));

    return {
        props: { posts, more, moreType }, // will be passed to the page component as props
    };
}
