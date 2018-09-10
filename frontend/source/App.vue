<template lang="pug">
	div
		user-add
		user-list(:data="users")
</template>

<script>
	import { mapActions, mapState } from 'vuex';
	import UserAdd from './components/User-Add';
	import UserList from './components/User-List';

	export default {
		name: 'App',
		components: {
			UserAdd,
			UserList
		},
		created() {
			this.getUsers();
		},
		computed: {
			...mapState('users', ['users'])
		},
		methods: {
			...mapActions({
				getUsers: 'users/getUsers'
			})
		}
	};
</script>

<style lang="postcss" module>
	:global {
		* {
			box-sizing: border-box;
			margin: 0;
			outline: none;
			padding: 0;
		}

		*::before,
		*::after {
			box-sizing: inherit;
		}

		*:active,
		*:focus,
		*:hover {
			outline: none;
		}

		html,
		body {
			min-height: 100%;
			position: relative;
			width: 100%;
		}

		body {
			background: #fff;
			color: #333;
			font-family: 'Roboto Mono', monospace;
			font-size: 14px;
			font-weight: normal;
			line-height: 1.6;
			overflow-x: hidden;
		}

		a {
			color: inherit;
			text-decoration: none;
		}

		.header {
			padding: 96px 24px 48px;
		}

		.header-logo {
			margin: 0 auto 24px;
			width: 144px;
		}

		.header-logo img {
			width: 100%;
		}

		.header-title {
			text-align: center;
		}

		.nav {
			padding: 24px 0;
		}

		.nav-list {
			display: grid;
			grid-column-gap: 24px;
			grid-template-columns: repeat(3, auto);
			list-style: none;
			justify-content: center;
		}

		.nav-list-item a {
			color: #4A90E2;
			text-decoration: underline;
		}

		.nav-list-item a:hover {
			text-decoration: none;
		}

		.main {
			padding: 0 0 120px;
		}
	}
</style>
