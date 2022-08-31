<script lang="ts">
    export let min: number;
    export let max: number;
    export let value: number;

	if(value == min) {
		min = (min / max) / (max - min);
	}

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
		border-left: solid 1px #000;
		border-right: solid 1px #000;
		position: relative;
		.item {
			margin-left: 25%;
			width: 50%;
			position: absolute;
			bottom: 0;
			background: #f30;
		}
	}
</style>