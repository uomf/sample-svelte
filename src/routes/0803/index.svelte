<script lang="ts">
    import {BarGraph} from '@src/components/0720/BarGraph';
    import {BarItem} from '@src/components/0720/BarGraph';
    import {onMount} from 'svelte';
    import {updateData, type PriceUnit} from '../../store/index';
    import {priceData} from '../../store/index';

    let data: number[] = [1,2,3,4,5];
    let title: string = 'Hello World';
	let minV: number;
	let maxV: number;

    let localPriceData: PriceUnit[] = [];
    priceData.subscribe((v) => localPriceData = v);
    
    onMount(() => {
        updateData(7);
    });
</script>

<div class="root">
    <BarGraph {data} {title} bind:minV bind:maxV>
        {#each data as d}
            <BarItem min={minV} max={maxV} value={d}></BarItem>
        {/each}
    </BarGraph>
</div>

<style lang="scss">
    .root {
        height: 80vh;
    }
</style>