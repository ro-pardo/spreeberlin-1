import Head from 'next/head';


export default function Home() {
    return (
        <div>
            <Head>
                <title>Spreeberlin</title>
                <meta
                    name='description'
                    content='Spreeberlin'
                />
                <link rel='icon' href='/favicon.ico' />

                <link
                    href='https://api.mapbox.com/mapbox-gl-js/v2.5.1/mapbox-gl.css'
                    rel='stylesheet'
                />
            </Head>

            
        </div>
    );
}
