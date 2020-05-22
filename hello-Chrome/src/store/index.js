import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Vuex);	//引入store对象

import popup from './modules/popup-store'	//弹出窗口

const state = {
};

const mutations = {
};

const actions = {
};

const store = new Vuex.Store({
	namespaced: true,
	modules: {
	  popup
	},
	state,
	actions,
	mutations
});

export default store;
