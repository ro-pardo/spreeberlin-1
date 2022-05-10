// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mariadb = require("mariadb");

const MODE = 'development';

let connData = {};
if (MODE == 'production') {
    connData = {
        host: 'localhost',
        user: 'spreeadmin',
        password: 'bSl2@j28',
        database: 'jk6787681093_',
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
    mariadb
    .createConnection({
        host: connData.host,
        user: connData.user,
        password: connData.password,
        database: connData.database,
    })

    .then((conn) => {
        conn.query('select * from marker_projekte')
            .then((rows) => {
                //console.log('Result', rows);
                res.status(200).json(rows);
                conn.end();
            })
            .catch((err) => {
                console.log("mariadb connection error",err);
            });
    })
    .catch((err) => {
        console.log("mariadb connection error",err);
        //handle connection error
    });


}
