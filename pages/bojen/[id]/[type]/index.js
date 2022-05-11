import React from 'react';

import { useRouter } from 'next/router';

import { bojen } from '../../../../bojen';

import { Line } from 'react-chartjs-2';

import 'chartjs-adapter-date-fns';
import { de } from 'date-fns/locale';
import axios from 'axios';

const genChart = (timeData, title, color) => {
    // const now = new Date();
    // console.log('generating Chart Data', now);

    return {
        labels: timeData.map((d) => {
            return d.x;
        }),
        height: '15',
        datasets: [
            {
                label: title,
                data: timeData.map((d) => {
                    return d.y;
                }),
                backgroundColor: [color],
                borderColor: color,
                fill: false,
                tension: 0.3,
            },
        ],
    };
};

const options = {
    elements: {
        point: {
            radius: 3,
        },
    },
    scales: {
        xAxes: [
            {
                type: 'time',

                time: {
                    unit: 'month',
                },
            },
        ],
    },

    adapters: {
        date: {
            locale: de,
        },
    },
    parsing: {
        xAxisKey: 't',
    },
    plugins: {
        legend: {
            display: true,
            labels: {
                color: 'rgb(255, 255, 255)',
            },
        },
        tooltip: {
            titleColor: 'rgb(0, 255, 0)',
            title: 'tooltip',
        },
    },
};

const Chart = (props) => {
    const router = useRouter();
    console.log('router.query in [type]', router.query);
    const { id, type } = router.query;

    console.log('Chartdata in Client', props.chartData);
    return (
        <div className='content'>
            <div className='chart'>
                <h3>Chart {id}</h3>
                <h3>Chart {type}</h3>

                <Line data={props.chartData} height={120} options={options} />
            </div>
        </div>
    );
};
export default Chart;

export const getServerSideProps = async (context) => {
    console.log('context: ', context.query);

    let type = undefined;

    if (context.query.type == 'ph-wert') {
        type = 1;
    } else if (context.query.type == 'temperatur') {
        //console.log('temperatur selected');
        type = 2;
    } else if (context.query.type == 'sauerstoffgehalt') {
        type = 3;
    } else if (context.query.type == 'leitfaehigkeit') {
        type = 4;
    }

    const api_key = bojen[context.query.id];
    console.log('api_key', api_key);

    const url = `https://api.thingspeak.com/channels/${context.query.id}/fields/${context.query.type}.json?api_key=${api_key}/`;

    console.log('fetching from: ', url);
    const response = await axios.get(`${url}`);

    console.log('DATA!!! response.data.feeds', response.data.feeds);
    const result = await response.data.feeds;

    console.log('DATA!!!', result.length);

    let dataComplete = [];

    for (let i = 0; i < result.length; i++) {
        let dataPiece = {};
        dataPiece.x = result[i].created_at;
        dataPiece.y = result[i][`field${context.query.type}`];

        dataComplete.push(dataPiece);
    }
    console.log('dataComplete', dataComplete);


    let title;
    let color;
    if (context.query.type == 1) {
        title = 'PH-Wert';
        color = '#201f47'; //#e82b39
    } else if (context.query.type == 2) {
        title = 'Temperatur';
        color = '#e82b39'; //#201f47 //#e82b39
    } else if (context.query.type == 3) {
        title = 'Sauerstoffgehalt';
        color = '#28ff7d'; //#28ff7d
    } else if (context.query.type == 4) {
        title = 'Leitfähigkeit';
        color = '#00f'; //#00f
    }

    //const dataJson = dataComplete
    const chartData = genChart(dataComplete, title, color);

    return {
        props: { chartData: chartData },
    };
};
