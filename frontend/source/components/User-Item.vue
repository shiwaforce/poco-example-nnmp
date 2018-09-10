<template lang="pug">
	div(:class="$style.wrap")
		p(:class="$style.label") id
		p(:class="$style.value") {{ data.id }}
		p(:class="$style.label") Full Name
		p(:class="$style.value") <b>{{ data.first_name }} {{ data.last_name }}</b>
		p(:class="$style.label") Email
		p(:class="$style.value") <b>{{ data.email }}</b>
		p(:class="$style.ip") {{ data.ip_address }}
</template>

<script>
	export default {
		name: 'User-Item',
		props: ['data']
	};
</script>

<style lang="postcss" module>
	.wrap {
		background-color: #f7f7f7;
		border-radius: 12px;
		padding: 24px;
		position: relative;
	}

	.label {
		font-size: 12px;
		opacity: .6;
	}

	.value {
		font-size: 14px;
		line-height: 24px;
	}

	.ip {
		font-size: 12px;
		opacity: .6;
		position: absolute;
		right: 24px;
		top: 24px;
	}
</style>
