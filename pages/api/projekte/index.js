// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mariadb = require('mariadb');

import config from '../../../config';

const MODE = config.mode;

let connData = {};
if (MODE == 'production') {
    connData = {
        host: 'localhost',
        user: '^G2sQG3}',
        password: '7h!1rwQ40',
        database: 'spreewater',
    };
} else if (MODE == 'development')
    connData = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'water',
    };

export default async function handler(req, res) {
    //console.log("mariadb api route");
    //console.log("ENV", process.env.NODE_ENV);
    // const conn = await mariadb.createConnection({
    //     host: connData.host,
    //     user: connData.user,
    //     password: connData.password,
    //     database: connData.database,
    // });
    // // const conn = await mariadb.createConnection({
    // //     host: 'localhost',
    // //     user: 'user',
    // //     password: '7h!1rwQ40',
    // //     database: 'spreewater',
    // // });
    // const result = await conn.query('select * from marker_projekte');

    // return res.status(200).json(result);


    console.log(process.env.DATABASE_URL);

    const client = new Client({
        user: 'rtknowvkwcapnb',
        host: 'ec2-176-34-211-0.eu-west-1.compute.amazonaws.com',
        database: 'd3o15bh1avgeaj',
        password:
            '0768373982233b574dca3037ac28178802ddedbd2ddcdab0f6397ac02f89384a',
        port: 5432,
    });

    await client.connect();

    const result = await client.query('SELECT * from marker_projekte');

    //console.log("postgres result", result.fields); // Hello world!

    await client.end();

    return res.status(200).json(result.rows);
}
