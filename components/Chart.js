import React from 'react';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { bojen } from '../bojen';

import { Line } from 'react-chartjs-2';

import 'chartjs-adapter-date-fns';
import { de } from 'date-fns/locale';
import axios from 'axios';

const genChart = (timeData, title, color) => {
    console.log('generating Chart Data', timeData);

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
    //console.log('router.query in [type]', router.query);
    //console.log('props', props);

    const [chartData, setChartData] = useState(null);

    const fetchData = async () => {
        const api_key = bojen[router.query.id];
        //console.log('api_key', api_key);
        const url = `https://api.thingspeak.com/channels/${router.query.id}/fields/${props.type}.json?api_key=${api_key}/`;

        console.log('fetching from: ', url);
        const response = await axios.get(`${url}`);
        const result = response.data.feeds;

        //console.log("data in Chartjs result", result)
        //Restructure Data fro Chart
        let dataComplete = [];
        for (let i = 0; i < result.length; i++) {
            let dataPiece = {};
            dataPiece.x = result[i].created_at;
            dataPiece.y = result[i][`field${props.type}`];

            dataComplete.push(dataPiece);
        }

        let title;
        let color;
        if (props.type == 1) {
            title = 'PH-Wert';
            color = '#201f47'; //#e82b39
        } else if (props.type == 2) {
            title = 'Temperatur';
            color = '#e82b39'; //#201f47 //#e82b39
        } else if (props.type == 3) {
            title = 'Sauerstoffgehalt';
            color = '#28ff7d'; //#28ff7d
        } else if (props.type == 4) {
            title = 'Leitfähigkeit';
            color = '#00f'; //#00f
        }

        console.log(dataComplete);

        const chartData = genChart(dataComplete, title, color);
        console.log('generated chartdata', chartData);
        return chartData;
    };

    useEffect(() => {
        console.log('chart mounting new');
        setChartData(fetchData());
    }, []);

    useEffect(() => {
        console.log('chart updated');
    }, [chartData]);

    return (
        <>
            <h3>Chart {router.query.id}</h3>
            <h3>Chart {props.type}</h3>
            
                <Line data={chartData} height={120} options={options} />
            
        </>
    );
};
export default Chart;
