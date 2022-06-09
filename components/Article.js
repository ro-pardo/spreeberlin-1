import React from 'react';

import Link from 'next/link';

import Image from 'next/image';
import { Fade } from 'react-reveal';
7;

const Article = (props) => {
    return (
        <>
            <Fade>
                <Link href={props.link} passHref>
                    <div className='card_content'>
                        <img
                            src={`/static/images/${props.pic_url}`}
                            // width='600px'
                            // height='450px'
                            // layout="fill"
                            z-index={101}
                            className='content_image'
                            opacity={0.5}
                            alt=''
                        ></img>
                        <div className='mid noHover'>
                            <h3>{props.name}</h3>
                            <h4>{props.subheading1}</h4>
                        </div>
                    </div>
                </Link>
            </Fade>
        </>
    );
};

export default Article;
