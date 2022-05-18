import React from 'react';

import Link from 'next/link';

import Image from 'next/image';

const Article = (props) => {


    return (
        <>
            <Link href={props.link} passHref>
                <div className='card_content'>
                    <Image
                        src={`/static/images/${props.pic_url}`}
                         width='600x'
                         height='400x'
                        layout='intrinsic'
                        z-index={101}
                        className='content_image'
                        opacity={0.5}
                        alt=''
                    ></Image>
                    <div className='mid noHover'>
                        <h3>{props.name}</h3>
                        <h4>{props.subheading1}</h4>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Article;
