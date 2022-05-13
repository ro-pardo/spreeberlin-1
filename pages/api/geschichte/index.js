// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mariadb = require('mariadb');

import config from '../../../config';

const { Client } = require('pg');

const MODE = config.mode;

import { PrismaClient } from '@prisma/client';

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
    console.log(process.env.DATABASE_URL);

    const prisma = new PrismaClient();
    const marker_geschichte = await prisma.marker_geschichte.findMany();
    //const feed = await prisma.post.findMany();

    console.log('prisma feed', marker_geschichte);


    return res.status(200).json(marker_geschichte);
}
