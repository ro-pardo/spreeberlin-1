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
    const conn = await mariadb.createConnection({
        host: connData.host,
        user: connData.user,
        password: connData.password,
        database: connData.database,
    });
    // const conn = await mariadb.createConnection({
    //     host: 'localhost',
    //     user: 'user',
    //     password: '7h!1rwQ40',
    //     database: 'spreewater',
    // });
    const result = await conn.query('select * from marker_projekte');

    return res.status(200).json(result);
}
