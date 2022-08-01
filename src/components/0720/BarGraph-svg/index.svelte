<script lang="ts">
import { onMount } from "svelte/types/runtime/internal/lifecycle";
    export let data: number[];
    export let title: string;
    export let guideCount: number = 5;
    export let minV: number;
    export let maxV: number;

    minV = Math.min(...data);
    maxV = Math.max(...data);

    const range = maxV - minV;
    const diff = range / guideCount;

    const leftGuides : number[] = [];
    for (let i = 0; i < guideCount; i++) {
        leftGuides.push(minV + 1 * diff);
    }

    let clientWidth: number;
    let clientHeight: number;
    let ele: SVGElement;
    let enable: boolean = false;

    // onMount는 클라이언트가 렌더링 되고 나서 실행됨
    onMount(() => {
        if(ele) {
            clientWidth = ele.clientWidth;
            clientHeight: ele.clientHeight;
            enable = true;
        }
    })
</script>

{#if enable}
    <svg class="root" bind:this={ele}>
        <!-- <g>태그는 grouping -->
        <g data-name="title">
            <rect x={0} y="0px" width={clientWidth} height="100px"></rect>
            <text></text>
        </g>
        <g data-name="l-guide">
            {#each leftGuides as v}
                <line
                x1="50px"
                y1={((clientHeight - 100) / leftGuides.length) * v + 100}
                x2="150px"
                y2={((clientHeight - 100) / leftGuides.length) * v + 100}
                />
            {/each}
        </g>
    </svg>
{:else}
{/if}
<svg class="root" bind:this={ele} />

<style lang="scss">
    .root {
        height: 100%;
    }
</style>