<script lang="ts">
	// button의 Property 정의
	export let text: string;
	export let onClick: (value: string) => void; // arrow func
	export let color: 'orange' | 'grey' | 'dark-grey';
</script>

<div class="button" data-color={color} on:click={() => onClick(text)}>{text}</div>

<style lang="scss">
	.button {
		width: 80px;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		font-weight: 400;
		color: white;
		border: 1px solid #333;
		&[data-color='orange'] {
			background-color: orange;
		}
		&[data-color='grey'] {
			background-color: darkgrey;
		}
		&[data-color='dark-grey'] {
			background-color: grey;
		}
	}
</style>
