<style>
	body {margin: 0}
	.bkg {
	    padding: 10px 50px;
		background: #f5f5f5
	}
	a {
		margin: 5px 15px 5px 0;
		color:#666;
		text-decoration: none;
	}
	a:link,a:visited {}
	a:hover {
		color: #f40;
	}
	a:active {}
	.chosed {
		color: #f40;
	}
</style>

<template>
	<div>
		<div class="bkg">
			<router-link v-for="(item,index) in navbar" :to="item.path" :key="item.id" :class="{ chosed:item.chosed}" @click.native="select(index)">{{item.text}}</router-link>
	 	
		</div>
		 
	    <router-view></router-view>
	  </div>
</template>

<script>
	export default {
		data () {
			return {
				navbar:[
					{
						id:"home",
						path:"/",
						text:"首页",
						chosed:true
					},
					{
						id:"tickets",
						path:"/tickets",
						text:"优惠券",
						chosed:false
					},
					{
						id:"special",
						path:"/special",
						text:"特惠专场",
						chosed:false
					},
					{
						id:"me",
						path:"/me",
						text:"我的",
						chosed:false
					},
				]
			}
		},
		methods: {
			select ($index) {
				this.navbar.forEach((item,index,array)=>{
					return array[index].chosed = $index == index ? true : false;
				});
			}
		}
	}
</script>