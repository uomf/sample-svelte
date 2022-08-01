<script lang="ts">
    export let min: number;
    export let max: number;
    export let value: number;

    const height: number = (value / (max - min)) * 100;
</script>

<style lang="scss">
    .root {
        flex: 1 0;
        background: orange;
        border: solid 3px #000;
        position: relative;
        .item {
            position: absolute;
            bottom: 0;
            background: red;
        }
    }
</style>