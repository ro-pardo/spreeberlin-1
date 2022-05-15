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
                        <h4>{props.subheading1}</h4>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Article;
