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
Vue.use(VueResource);

 //主页数据
const moduleA = {
	state: {
		tip: '羽绒服',
        inputword: '',
		menus: [
                    {
                        id:'man',
                        text:'男装',
                        chosed:true
                    },
                    {
                        id:'woman',
                        text:'女装',
                        chosed:false
                    },
                    {
                        id:'foods',
                        text:'美食',
                        chosed:false
                    },
                    {
                        id:'shoes',
                        text:'鞋子',
                        chosed:false
                    },
                    {
                        id:'electron',
                        text:'电子产品',
                        chosed:false
                    }
                ],
		lists: [
					{
						imgSrc: 'http://p2.so.qhimgs1.com/bdr/326__/t0137939c9b91a7a8b2.jpg',
						head: '图片',
						taobao: 88,
						onsale: 68,
						discount: 20,
						people: '10000'
					},
					{
						imgSrc: 'http://p2.so.qhimgs1.com/bdr/326__/t0137939c9b91a7a8b2.jpg',
						head: '图片',
						taobao: 88,
						onsale: 68,
						discount: 20,
						people: '10000'
					},
					{
						imgSrc: 'http://p2.so.qhimgs1.com/bdr/326__/t0137939c9b91a7a8b2.jpg',
						head: '图片',
						taobao: 88,
						onsale: 68,
						discount: 20,
						people: '10000'
					}
		]
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