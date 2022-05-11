// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { bojen } = require('../../../bojen');

const axios = require('axios');

export default async function handler(req, res) {
    //console.log("bojen data", bojen,req.query, res)
    const response = await fetch(
        `https://api.thingspeak.com/channels/${
            req.query.id
        }/feeds/last.json?api_key=${bojen[req.query.id]}`
    );

    const result = await response.json();

    //await console.log("data from thingsspeak: ",response,"data",response.data)

    await console.log('data from thingsspeak: result ', result);

    await res.status(200).json(result);
    return(result)
}
// const response = await fetch(
//     `https://api.thingspeak.com/channels.json?api_key=OVE9Q2S2S33RE0U3`
// );
//const resJson = await response.json();
//await console.log('result api', resJson);
//
