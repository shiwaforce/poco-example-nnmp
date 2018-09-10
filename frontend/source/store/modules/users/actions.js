import axios from 'axios';

export default {
	async getUsers({commit}) {
		try {
			const payload = await axios.get('/users');
			commit('users', payload.data);
		} catch (e) {
			console.log(e);
		}
	}
};
