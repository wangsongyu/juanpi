import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({

	state:{
		newpath:'111'
	},

	actions:{
		changeNewpathAction(store,payload){
			store.commit('changeNewpathMutation',payload)
		}
	},

	mutations:{
		changeNewpathMutation(state,payload){
			state.newpath = payload;
		}
	}



})

export default store;