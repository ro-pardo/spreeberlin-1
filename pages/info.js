import Head from 'next/head';
import Image from 'next/image';

export default function Info() {
    return (
        <>
            <div className='content'>
                <Image
                    src='/static/public/images/Stroke-1.svg'
                    loading='lazy'
                    layout='fill'
                    style={{ zIndex: 3000 }}
                    //width="100%"
                    alt=''
                    className='divider info'
                ></Image>
                <div
                    data-hover='false'
                    data-delay='0'
                    data-w-id='99263c60-1238-d19b-e78c-88a9cb6a1abb'
                    style={{ height: '80px' }}
                    //  {{marginRight: spacing + 'em'}}
                    className='accordion-item w-dropdown'
                ></div>
                <div className='accordion-toggle w-dropdown-toggle'></div>
                <div className='text-block-4'>INFO </div>
            </div>
        </>
    );
    1;
}
