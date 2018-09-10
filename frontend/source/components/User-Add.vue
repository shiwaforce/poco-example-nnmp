<template lang="pug">
	div(:class="$style.wrap")
		button(:class="$style.button" @click="addNewUser()") Add New User
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		name: 'User-Add',
		methods: {
			...mapActions({
				getUsers: 'users/getUsers'
			}),
			addNewUser() {
				this.$http.post('/users').then(() => {
					this.getUsers();
				}).catch(e => {
					console.log(e);
				});
			}
		}
	};
</script>

<style lang="postcss" module>
	.wrap {
		display: flex;
		justify-content: center;
		padding: 0 12px 32px;
	}

	.button {
		align-items: center;
		appearance: none;
		background-image: linear-gradient(to right, #3fbfde, #4ea1e1);
		border: none;
		border-radius: 30px;
		color: #fff;
		display: flex;
		font-size: 16px;
		font-weight: bold;
		height: 48px;
		justify-content: center;
		line-height: 48px;
		margin: 0;
		text-align: center;
		text-decoration: none;
		transition: background .3s, box-shadow .3s;
		width: 172px;
	}

	.button:hover {
		box-shadow: 0 12px 24px -4px #a9dbff;
	}

	.button:active {
		background-image: linear-gradient(to right, #3fbfde, #1867b0);
		box-shadow: 0 12px 24px -4px #91c0e4;
	}
</style>
