// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const response = await fetch(
        `https://api.thingspeak.com/channels.json?api_key=OVE9Q2S2S33RE0U3`
    );
    const resJson= await response.json()
    await console.log("result api",resJson)
    await res.status(200).json(resJson)

}
