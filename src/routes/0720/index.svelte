<script lang="ts">
    import {BarGraph} from '@src/components/0720/BarGraph';
    import {BarItem} from '@src/components/0720/BarGraph';
    let data: number[] = [3,4,5,6,2,3];
    let title: string = 'Hello World';
	let minV: number;
	let maxV: number;
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
        background: #f0f;
        height: 80vh;
    }
</style>