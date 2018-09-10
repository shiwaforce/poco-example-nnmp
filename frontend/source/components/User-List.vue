<template lang='pug'>
	div(:class="$style.wrap")
		user-item(v-for="item in data" :key="item.id" :data="item")
</template>

<script>
	import UserItem from './User-Item';

	export default {
		name: 'User-List',
		props: ['data'],
		components: {
			UserItem
		}
	};
</script>

<style lang='postcss' module>
	.wrap {
		display: grid;
		grid-column-gap: 12px;
		grid-row-gap: 12px;
		grid-template-columns: repeat(1, 1fr);
		margin: 0 auto;
		padding: 0 12px;
		max-width: 856px;

		@media (--medium) {
			grid-column-gap: 24px;
			grid-row-gap: 24px;
			grid-template-columns: repeat(2, 1fr);
			padding: 0 24px;
		}
	}
</style>
