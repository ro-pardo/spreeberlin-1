import React from 'react';

import Link from 'next/link';

import Image from 'next/image';

const Article = (props) => {
    return (
        <>
            <Link href={props.link} passHref>
                <div className='card_content'>
                    <Image
                        src={`/static/images/${props.pic}`}
                        //  width='468px'
                        //  height='100%'
                        layout='fill'
                        z-index={101}
                        className='content_image'
                        opacity={0.5}
                        alt=''
                    ></Image>
                    <div className='mid noHover'>
                        <h3>{props.name}</h3>
                        <h3>{props.subheading1}</h3>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Article;
