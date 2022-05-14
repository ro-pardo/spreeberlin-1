// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mariadb = require('mariadb');

import config from '../../../config';

import prisma from '../../../lib/prisma.tsx';


export default async function handler(req, res) {
    const article = await prisma.geschichte.findMany();

    //const feed = await prisma.post.findMany();

    console.log('prisma feed', article);

    return res.status(200).json(article);
}
