import React from 'react';

import { useRouter } from 'next/router';

import { bojen } from '../../../../bojen';

import { Line } from 'react-chartjs-2';

import 'chartjs-adapter-date-fns';
import { de } from 'date-fns/locale';

const chart = (timeData, title, color) => {
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

                    <Line
                        data={props.chartData}
                        height={120}
                        options={options}
                    />
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
    const response = await fetch(
        `https://api.thingspeak.com/channels/${
            context.query.id
        }/fields/${type}.json?api_key=${
            bojen[context.query.id]
        }&average=daily&start=2021-01-01%2000:00:00`
    );

    const result = await response.json();
    console.log('DATA!!!', result.feeds);

    let dataComplete = [];
    for (let i = 0; i < result.feeds.length; i++) {
        let dataPiece = {};
        dataPiece.x = result.feeds[i].created_at;
        dataPiece.y = result.feeds[i][`field${type}`];

        dataComplete.push(dataPiece);
    }
    //console.log('dataComplete', dataComplete);

    let title;
    let color;
    if (type == 1) {
        title = 'PH-Wert';
        color = '#201f47'; //#e82b39
    } else if (type == 2) {
        title = 'Temperatur';
        color = '#e82b39'; //#201f47 //#e82b39
    } else if (type == 3) {
        title = 'Sauerstoffgehalt';
        color = '#28ff7d'; //#28ff7d
    } else if (type == 4) {
        title = 'Leitfähigkeit';
        color = '#00f'; //#00f
    }

    const chartData = chart(dataComplete, title, color);

    return {
        props: { chartData: chartData },
    };
};
