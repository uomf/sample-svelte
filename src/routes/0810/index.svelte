<script lang="ts">
    import {BarGraph} from '@src/components/0720/BarGraph';
    import {BarItem} from '@src/components/0720/BarGraph';
    import {onMount} from 'svelte';
    import {updateData, type PriceUnit} from '../../store/index';
    import {priceData} from '../../store/index';
    import _ from 'lodash';
    import d3 from 'd3';

    let data: number[] = [1,2,3,4,5];
    let title: string = 'Hello World';
	let minV: number;
	let maxV: number;
    let prices: [number, number][] = [];
    let path: string | null = '';

    let localPriceData: PriceUnit[] = [];
    priceData.subscribe((v) => localPriceData = v);
    
    onMount(() => {
        updateData(7);
    });

    d3.line();

    const line = d3
        .line<(arg1: number, arg2: number)>()
        .x((d) => d[0] * 10)
        .y((d) => d[1] * 20000 + 100);

    $:{
        prices = _($priceData)
            .map((d3, 1) => [1, d.price] as (number, number))
            .take(100)
            .value();
        path = line(prices);
        console.log(prices);
    }

</script>

<div class="root">
    <svg style="width: 100%;">
</div>

<style lang="scss">
    .root {
        height: 80vh;
    }
</style>