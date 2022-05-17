import Image from 'next/image';

import Article from '../components/Article';

import Fade from 'react-reveal/Fade';
import { useEffect, useState } from 'react';

import prisma from '../lib/prisma.tsx';

export default function Aktuelles(props) {
    const [moreOpen, setMoreOpen] = useState(false);
    return (
        <>
            <div className='content'>
                <div className='container-rubriken'>
                    <h1 className='heading-3'>AKTUELLES</h1>
                    <div className='w-layout-grid grid'>
                        {props.posts.map((item) => {
                            return (
                                <>
                                    <Article
                                        name={item.name}
                                        pic_url={item.pic_url}
                                        subheading1={item.subheading1}
                                        subheading2={item.subheading2}
                                        link={`/aktuelles/${item.id}`}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>
                <div className='container-rubriken'>
                    <div
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
                            <Fade>
                                <div className='w-layout-grid grid'>
                                    {props.more.map((item) => {
                                        return (
                                            <>
                                                <Article
                                                    name={item.name}
                                                    pic_url={item.pic_url}
                                                    subheading1={
                                                        item.subheading1
                                                    }
                                                    subheading2={
                                                        item.subheading2
                                                    }
                                                    link={`/geschichte/${item.id}`}
                                                />
                                            </>
                                        );
                                    })}
                                </div>
                            </Fade>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps(context) {
    const article = await prisma.aktuelles.findMany();

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
