<script lang="ts">
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
    
    for (let i = guideCount; i > 0; i--) {
        leftGuides.push(minV + i * diff);
    }
    
</script>

<div class="root">
    <div class="title-filed">{title}</div>
    <div class="graph-filed">
        <div class="l-guide">
            {#each leftGuides as v}
                <div class="guide-item">{v}</div>
            {/each}
        </div>
        <div class="graphics">
            <slot />
        </div>
    </div>
    <div class="under-filed">
        // unuder
    </div>
</div>

<style lang="scss">
    .root {
        $title-height: 48px;
        $under-height: 32px;

        width: 100%;
        height: 100%;
        .title-filed {
            height: $title-height;
            background: #f00;
        }
        .graph-filed {
            display: flex;
            height: calc(100% - $title-height - $under-height);
            position: relative;
            .l-guide {
                width: 100%;
                height: 100%;
                background: yellow;
                display: flex;
                flex-direction: column;
                .guide-item {
                    flex: 1 0;
                    border-bottom: 1px solid;
                }
            }
            .graphics {
                right: 0;
                top: 0;
                height: 100%;
                width: calc(100% - 100px);
                position: absolute;
                flex: 1 0;
                background: #0f0;
                display: flex;
            }
        }
        .under-filed {
            height: $under-height;
        }
    }
</style>