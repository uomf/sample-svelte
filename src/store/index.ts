// store = 상태관리시스템

import axios from "axios";
import _ from 'lodash';
import { writable } from "svelte/store";

export const priceData = writable<PriceUnit[]>([]);

function getUrl(days: 7 | 30 | 90 | 180 | 360) {
    return `https://dashboard-mintscan.s3.ap-northeast-2.amazonaws.com/research/market/${days}.csv`;
}

export interface PriceUnit {
    denom : string;
    timestamp: number;
    price: number;
    marketCap: number;
    dayVolume: number;
}

export async function updateData(days: 7 | 30 | 90 | 180 | 360) {
    const data =  (await axios.get<string>(getUrl(days))).data;
    const prices = _(data.split('\n'))
        .drop(1)
        .map((l) => {
            const eles = l.split(',');
            return {
                denom: eles[0],
                timestamp: Number(eles[1]),
                price: Number(eles[1]),
                marketCap: Number(eles[1]),
                dayVolume: Number(eles[1]),
            } as PriceUnit;
        })
        .value();
    priceData.set(prices);
}



// function a(callback: (data: any) => void) {
//     axios
//     .get(url)
//     .then(res=>{
//         console.log(res.data);
//     }).catch((e)=>{
//         console.log(e);
//     });
// }