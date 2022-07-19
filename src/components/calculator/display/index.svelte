<script lang="ts">
	export let result : number;
</script>

<div class="display">{result}</div>

<style lang="scss">
	.display {
		width: 320px;
		height: 80px;
		display: flex;
		align-items: right;
		justify-content: right;
		font-size: 48px;
		font-weight: 300;
		line-height: 80px;
	}
</style>
