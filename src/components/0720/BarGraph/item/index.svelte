<script lang="ts">
    export let min: number;
    export let max: number;
    export let value: number;

	let height: number = ((value - min) / (max - min)) * 100;

	$: {
		height = ((value - min) / (max - min)) * 100;
	}
</script>

<div class="root">
    <div class="item" style={`height: ${height}%`} />
</div>

<style lang="scss">
    .root {
		flex: 1 0;
		background: rgba(255, 255, 0, 0);
		border: solid 1px #000;
		position: relative;
        box-sizing: content-box;
		.item {
			width: 100%;
			position: absolute;
			bottom: 0;
			background: #f30;
		}
	}
</style>