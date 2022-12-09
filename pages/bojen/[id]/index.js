import React from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { Box, Typography, Button, Grid } from '@mui/material';

import { bojen } from '../../../config/bojen';

import { Line } from 'react-chartjs-2';
import { Polar } from 'react-chartjs-2';
import { de } from 'date-fns/locale';

import { useEffect, useState } from 'react';
import axios from 'axios';
// title = 'PH-Wert';
// ylabel = "pH"
// color = '#9af25c'; //#e82b39
// title = 'Temperatur';
// ylabel = "ºC"
// color = '#ecf298'; //#201f47 //#e82b39
//
// title = 'Sauerstoffgehalt';
// ylabel = "mg/l"
// color = '#c6b1ed'; //#28ff7d
// title = 'Leitfähigkeit';
// ylabel = "µS/cm"
// color = '#1a4f93'; //#00f
export const asdfg = {
    labels: ['PH-Wert', 'Temperatur', 'O2', 'Leitfähigkeit'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 10, 17],
            backgroundColor: [
                "rgba(236,242,152,0.7)",
                "rgba(154,242,92,0.7)",
                "rgba(223,77,77,0.7)",
                "rgba(26,79,147,0.7)",
            ],
            borderWidth: 1,
        },
    ],
};

export const polar_options = {

    scales: {
        r: {
            ticks: {
                font: {
                    size: 16,
                },
                color:"white",
                backdropColor: "black"
            },

        },
    },
    legend: {
        position: 'top',
        fontColor: "#FFFFFF",
        labels: {
            fontColor: 'white'
        },
    },
    title: {
        display: true,
        text: 'Features Current Values',
        fontColor: 'white'
    },
    // layout: {
    //     autoPadding: true,
    //     padding: 10,
    // },
}

const genPolarChart = (data) => {
    return {
        labels: ['PH-Wert', 'Temperatur', 'O2', 'Leitfähigkeit'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 10, 17],
                //data: [data.field1, data.field2, data.field3, data.field4/15],
                backgroundColor: [
                    "rgba(236,242,152,0.7)",
                    "rgba(154,242,92,0.7)",
                    "rgba(223,77,77,0.7)",
                    "rgba(255,178,102,0.7)",
                ],
                borderWidth: 1,
            },
        ],
    }
}

//pure
const genChart = (timeData, title, color) => {
    //console.log('generating Chart Data', timeData);

    return {
        labels: timeData.map((d) => {
            return d.x;
        }),
        height: '15',
        datasets: [
            {
                label: title,
                display: false,
                data: timeData.map((d) => {
                    return d.y;
                }),
                backgroundColor: [color],
                //backgroundColor: "#000000",
                //borderColor: color,
                borderColor: color,
                fill: false,
                tension: 0.3,
            },
        ],
    };
};

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    fontColor: "#FFFFFF"
};

const genChart2 = (timeData, title, color) => {
    //console.log('generating Chart Data', timeData);

    // console.log("timeData");
    // console.log(timeData);

    return {
        labels: timeData.map((d) => {
            return d.x;
        }),
        height: '15',
        datasets: [
            {
                label: title,
                display: false,
                data: timeData.map((d) => {
                    return d.y;
                }),
                backgroundColor: [color],
                //backgroundColor: "#000000",
                //borderColor: color,
                borderColor: color,
                fill: false,
                tension: 0.3,

            },
        ],
    };
};

const genOptions = (ylabel) => {
    return {
        elements: {
            point: {
                radius: 3,
            },
        },
        scales: {

            xAxes: [
                {
                    ticks: {
                        fontColor: "white",
                        // fontSize: 18,
                        // stepSize: 1,
                        // beginAtZero: true
                    },
                    type: 'time',

                    time: {
                        unit: 'month',
                    },
                    gridLines: {
                        display: true,
                        color: "#FFFFFF",
                        zeroLineColor: "#FFFFFF"
                    },
                    labelFontColor: "red"
                },
            ],
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    // fontSize: 18,
                    // stepSize: 1,
                    // beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: ylabel,

                    fontColor: 'white',
                    fontSize: 14,

                },
                gridLines: {
                    display: true,
                    color: "#FFFFFF",
                    zeroLineColor: "#FFFFFF"
                }
            }],
            ticks:{
                beginAtZero: true,
                color: 'white',
                fontSize: 12,
                fontColor: 'white',
            },
            pointLabels: {
                fontColor: 'white' // labels around the edge like 'Running'
            },


        },

        adapters: {
            date: {
                locale: de,
            },
        },
        parsing: {
            xAxisKey: 't',
        },
        // legend: {
        //     display: false,
        // },
        legend: {
            position: 'top',
            fontColor: "#FFFFFF",
            labels: {
                fontColor: 'white'
            }
        },
        title: {
            display: true,
            text: 'Features Explorer',
            fontColor: 'white'
        },
        layout: {
            autoPadding: true,
            padding: 10,
        },
        defaults:{
            defaultFontColor: "#FFFFFF"
        }
    }
}

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
    // legend: {
    //     display: false,
    // },
    legend: {
        position: 'top',
    },
    title: {
        display: true,
        text: 'Feature Conditions Explorer',
    },
    layout: {
        autoPadding: true,
        padding: 10,
    },
};

const Modal = ({ data }) => {
    const router = useRouter();
    // const { name } = router.query;
    const [chartActive, setChartActive] = useState(0);



    const handleClick = (e) => {
        //console.log('chart clicked');
        //console.log(e);
        setChartActive(e);
    };
    return (
        <>
            <div className='content'>
                <div className='boje_overlay-2'>
                    <div className='boje-container-3'>
                        <div className='boje-control-2'>
                            <div className='boje-control-icon-3'>&lt;</div>
                            <Link href='/'>
                                <div className='boje-control-icon-3'>X</div>
                            </Link>

                            <div className='boje-control-icon-3'>&gt;</div>
                        </div>
                        <h1 className='boje-text-2 headline'>
                            „HEUTE FÜHLE ICH MICH GESUND“
                        </h1>
                        <div className='boje-text-2'>
                            Boje 25, Fischerinsel: Friday, 22.8.21, 17:30
                        </div>
                        <div className='boje-diagramm-messdaten'>

                            {/*    <div*/}
                            {/*        id='w-node-_9ee6c07b-d823-8a56-cdd5-e22d148cccc6-c59f1401'*/}
                            {/*        className='boje-ph-wert-3'*/}
                            {/*    >*/}
                            {/*        <div className='ph-text-2'>*/}
                            {/*            {data.field1}*/}
                            {/*        </div>*/}
                            {/*        <div className='boje-info-footer-2'>pH</div>*/}
                            {/*    </div>*/}
                            {/*    <div*/}
                            {/*        id='w-node-_9ee6c07b-d823-8a56-cdd5-e22d148ccccb-c59f1401'*/}
                            {/*        className='boje-t-wert'*/}
                            {/*    >*/}
                            {/*        <div className='t-text-2'>*/}
                            {/*            {data.field2}*/}
                            {/*        </div>*/}
                            {/*        <div className='boje-info-footer-2 blue'>*/}
                            {/*            ºC*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div*/}
                            {/*        id='w-node-_9ee6c07b-d823-8a56-cdd5-e22d148cccce-c59f1401'*/}
                            {/*        className='boje-mg-wert-3'*/}
                            {/*    >*/}
                            {/*        <div className='mg-text-3'>*/}
                            {/*            {data.field3}*/}
                            {/*        </div>*/}
                            {/*        <div className='boje-info-footer-2'>*/}
                            {/*            mg/l*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div*/}
                            {/*        id='w-node-_9ee6c07b-d823-8a56-cdd5-e22d148cccd3-c59f1401'*/}
                            {/*        className='boje-s-wert'*/}
                            {/*    >*/}
                            {/*        <div className='s-text-2'>*/}
                            {/*            {data.field4}*/}
                            {/*        </div>*/}
                            {/*        <div className='boje-info-footer-2'>*/}
                            {/*            µS/cm*/}
                            {/*        </div>*/}
                            {/*    </div>*/}



                            <div className='boje-daten'>
                                <Polar data={genPolarChart(data)} options={polar_options} width="400" height="400" />
                            </div>
                            <div className='chartCard'>
                                <div className='chartBox'>
                                    <Grid container className='buttonContainer'>

                                        <Grid
                                            // display={'flex'}
                                            item
                                            xs={12}

                                            lg={3}
                                        >
                                            <Button
                                                className='chartButton1'
                                                onClick={() => {
                                                    handleClick(0);
                                                }}
                                            >
                                                <div className='button-boje-container'>
                                                    <div className='small-circle-2'></div>
                                                    <div className='chartLabel1'>
                                                        PH - Wert
                                                    </div>
                                                </div>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} lg={3}>
                                            <Button
                                                className='chartButton2'
                                                onClick={() => {
                                                    handleClick(1);
                                                }}
                                            >
                                                <div className='button-boje-container'>
                                                    <div className='small-circle-2 red'></div>
                                                    <div className='chartLabel2'>
                                                        Temperatur
                                                    </div>
                                                </div>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} lg={3}>
                                            <Button
                                                className='chartButton3'
                                                onClick={() => {
                                                    handleClick(2);
                                                }}
                                            >
                                                <div className='button-boje-container'>
                                                    <div className='small-circle-2 violet'></div>
                                                    <div className='chartLabel3'>
                                                        O2
                                                    </div>
                                                </div>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} lg={3}>
                                            <Button
                                                className='chartButton4'
                                                onClick={() => {
                                                    handleClick(3);
                                                }}
                                            >
                                                <div className='button-boje-container'>
                                                    <div className='small-circle-2 darkblue'></div>
                                                    <div className='chartLabel4'>
                                                        Leitfähigkeit
                                                    </div>
                                                </div>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>

                                            <div className='myChart' style={styles}>
                                                {/* <div className='mySpacer'></div> */}
                                                {chartActive == 0 && (
                                                    <Line
                                                        data={data.chartData1}
                                                        height={160}
                                                        options={genOptions('pH')}
                                                    />
                                                )}
                                                {chartActive == 1 && (
                                                    <Line
                                                        data={data.chartData2}
                                                        height={160}
                                                        options={genOptions('ºC')}
                                                    />
                                                )}
                                                {chartActive == 2 && (
                                                    <Line
                                                        data={data.chartData3}
                                                        height={160}
                                                        options={genOptions('mg/l')}
                                                    />
                                                )}
                                                {chartActive == 3 && (
                                                    <Line
                                                        data={data.chartData4}
                                                        height={160}
                                                        options={genOptions('µS/cm')}
                                                    />
                                                )}
                                            </div>

                                            {/* <div className='myChartToggle'></div> */}
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Modal;

export const getServerSideProps = async (context) => {
    ///LAST VALUES
    const response = await fetch(
        `http://api.thingspeak.com/channels/${
            context.query.id
        }/feeds/last.json?api_key=${bojen[context.query.id]}`
    );

    const result = await response.json();

    //CHART VALUES

    const api_key = bojen[context.query.id];
    //console.log('api_key', api_key);

    const dataArray = [];

    console.log("llegue")

    for (var i = 1; i < 5; i++) {
        const url = `https://api.thingspeak.com/channels/${context.query.id}/fields/${i}.json?api_key=${api_key}/`;

        const response2 = await fetch(`${url}`);

        const result2 = await response2.json();

        //console.log('RESULT', result2);

        let dataComplete = [];

        for (let j = 0; j < result2.feeds.length; j++) {
            let dataPiece = {};
            dataPiece.x = result2.feeds[j].created_at;
            dataPiece.y = result2.feeds[j][`field${i}`];

            dataComplete.push(dataPiece);
        }
        //console.log('dataComplete', dataComplete);

        let title;
        let color;
        let ylabel;
        if (i == 1) {
            title = 'PH-Wert';
            ylabel = "pH"
            color = '#9af25c'; //#e82b39
        } else if (i == 2) {
            title = 'Temperatur';
            ylabel = "ºC"
            color = '#ecf298'; //#201f47 //#e82b39
        } else if (i == 3) {
            title = 'Sauerstoffgehalt';
            ylabel = "mg/l"
            color = '#DF4D4D'; //#28ff7d
        } else if (i == 4) {
            title = 'Leitfähigkeit';
            ylabel = "µS/cm"
            color = '#ffb266'; //#00f
        }

        console.log("dataComplete")
        console.log(dataComplete)
        //const dataJson = dataComplete
        const chartDataold = genChart(dataComplete, title, color);
        const chartData = genChart2(dataComplete, title, color)

        dataArray.push(chartData);
    }

    return {
        props: {
            data: {
                field1: result.field1,
                field2: result.field2,
                field3: result.field3,
                field4: result.field4,
                date: result.created_at,
                chartData1: dataArray[0],
                chartData2: dataArray[1],
                chartData3: dataArray[2],
                chartData4: dataArray[3],
            },
        },
    };
};
