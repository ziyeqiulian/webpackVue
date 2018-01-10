/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-29 18:36:52
 * @version $Id$
 */
import Vue from 'vue'; // get vue
import Vuex from 'vuex'; // get vuex
import VueResource from 'vue-resource';// get $http

Vue.use(Vuex);

 //主页数据
const moduleA = {
	state: {
		lists: [0,1,2,3,4,5]
	},
	mutations:{
		aaa (){
			
		}
	}
};


const store = new Vuex.Store({
  modules: {
    home: moduleA
  }
})

export default store