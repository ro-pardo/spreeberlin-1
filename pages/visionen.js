import Image from 'next/image';

import Article from '../components/Article';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

import prisma from '../lib/prisma.tsx';

export default function Visionen(props) {
    const [moreOpen, setMoreOpen] = useState(false);

    return (
        <>
            <h1 className='heading-3'>VISIONEN</h1>

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
                                        link={`/visionen/${item.id}`}
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
                                            link={`/visionen/${item.id}`}
                                        />
                                    </Grid>
                                </>
                            );
                        })}
                    </Grid>
                </Box>
            )}
            <div className='mySpacer'></div>
        </>
    );
}

export async function getStaticProps(context) {
    const article = await prisma.visionen.findMany();

    const posts = JSON.parse(JSON.stringify(article.reverse()));

    //console.log('getting static props', posts);

    const moreCount = await prisma.geschichte.count();
    const skip = Math.floor(Math.random() * moreCount);

    const moreArticle = await prisma.geschichte.findMany({
        skip: skip,
        take: 3,
    });

    const more = JSON.parse(JSON.stringify(moreArticle.reverse()));

    return {
        props: { posts, more }, // will be passed to the page component as props
    };
}
