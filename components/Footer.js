import React from 'react';

import Link from 'next/link';
//import NewsTicker from 'react-advanced-news-ticker';
import Ticker from 'react-ticker';
//import Directions from './NewsTicker';
//import Ticker, { FinancialTicker, NewsTicker } from 'nice-react-ticker';

const data = [
    { text: 'FOLGE UNS AUF INSTAGRAM' },
    { text: 'GIB DER SPREE DEINE STIMME FÜR EINE BESSERE UMWELT' },
];

const Footer = () => {
    return (
        <>
            <div className='newsControl'>
                <Ticker>
                    {() => (
                        <>
                            <div ticker>
                                <div className="news-control">● FOLLOW US ON INSTAGRAM ● NEWS: A POLITICAL VOICE FOR THE SPREE ● FOLLOW US ON INSTAGRAM ● NEWS: A POLITICAL VOICE FOR THE SPREE ● FOLLOW US ON INSTAGRAM ● NEWS: A POLITICAL VOICE FOR THE SPREE ● FOLLOW US ON INSTAGRAM ● NEWS: A POLITICAL VOICE FOR THE SPREE ● FOLLOW US ON INSTAGRAM ● NEWS: A POLITICAL VOICE FOR THE SPREE ● FOLLOW US ON INSTAGRAM ● NEWS: A POLITICAL VOICE FOR THE SPREE </div>
                            </div>
                        </>
                    )}
                </Ticker>
            </div>
        </>
    );
};

export default Footer;
