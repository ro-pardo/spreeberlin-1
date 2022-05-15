import Head from 'next/head';
import Image from 'next/image';

import Article from '../components/Article';

import prisma from '../../../lib/prisma.tsx';

export default function Aktuelles(props) {
    return (
        <>
            <div className='content'>
                <div className='container-rubriken'>
                    <h1 className='heading-3'>GESCHICHTE</h1>
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
                            <div className='text-block-5'>WEITERES</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div-block-20'></div>
        </>
    );
}

export async function getServerSideProps(context) {
    const article = await prisma.aktuelles.findMany();

    const posts = JSON.parse(JSON.stringify(article.reverse()));

    console.log('getting static props', posts);
    return {
        props: { posts }, // will be passed to the page component as props
    };
}
