// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mariadb = require('mariadb');

import config from '../../../config';
const { Client } = require('pg')

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
    // const result = db.getGeschichteMarker();

    ;

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'spreewater',
        password: 'postgres',
        port: 5432,
    });

    await client.connect();

    const result = await client.query('SELECT * from marker_geschichte');

    //console.log("postgres result", result.fields); // Hello world!

    await client.end();

    // const conn = await mariadb.createConnection({
    //     host: connData.host,
    //     user: connData.user,
    //     password: connData.password,
    //     database: connData.database,
    // });

    // const result = await conn.query('select * from marker_geschichte');

    return res.status(200).json(result.rows);
}
