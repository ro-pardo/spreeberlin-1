// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from '../../../lib/prisma.tsx';

export default async function handler(req, res) {
    const article = await prisma.geschichte.findMany({
        where: { id: 1 },
    });

    console.log('prisma feed article', article);

    return res.status(200).json(article);
}
