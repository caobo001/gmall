import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var state={
	Header:true
};
const mutations={
	showHeader(state){
		state.Header=true;
	},
	hideHeader(state){
		state.Header=false;
	}
};

const actions={
	showHeader({commit}){
		commit('showHeader');
	},
	hideHeader({commit}){
		commit('hideHeader');
	},
};
const getters={
	Headershow(state){
		return state.Header;
	}
};
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});
