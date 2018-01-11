<style>
    .input-container {
        padding: 20px 0;
        text-align: center;
    }
    .input-container input {
        width: 50%;
        max-width: 500px;
        min-width: 150px;
        padding: 0 10px;
        line-height: 2rem;
        border-radius: 5px 0 0 5px;
        border: 1px solid #f40;
        font-size: 1rem;
        outline: none;
    }
    .input-container button {
        position: relative;
        left: -5px;
        padding: 0 12px;
        background: #f40;
        border: 1px solid #f40;
        font-size: 1rem;
        color: #fff;
        line-height: 2rem;
        box-sizing: content-box;
        outline: none;
        cursor: pointer;
    }
    .category ul {
        display: flex;
        margin: 0;
        padding: 0 50px;
        list-style-type: none;
    }
    .category ul li {
        padding:  5px 15px 5px 0;
        cursor: pointer;
    }
    .category ul li:hover {
        color: #f40;
    }
    .commodity {
        padding: 10px 50px;
    }
    .commodity img {
        width: 100px;
        height: 100px;
    }
    .commodity .box {
        display: flex;
    }
    .box section {
        margin: 0 0 10px 10px;
        padding: 0 10px;
    }
    .box .details {
        display: flex;
        margin: 40px 0 0 0;
        font-size: 0.8rem;
    }
    .box .details div div {
        margin: 3px 20px 0 0;
    }
</style>

<template>
    <div>
        <div class="input-container">
            <input type="text" v-model="inputword" :placeholder="tip">
            <button @click="search(inputword)">搜索</button>
        </div>
        <div class="category">
            <ul>
                <li v-for="(item,index) in menus" :key="item.id" :class=" {chosed:item.chosed } " @click="genre(item.id,index)">
                    {{item.text}}
                </li>
            </ul>
        </div>
        <div class="commodity">
            <div class="box" v-for="item in lists">
                <div class="img">
                    <img :src="item.imgSrc">
                </div>
                <section>
                    <header>{{item.head}}</header>
                    <div class="details">
                        <div>
                            <div>淘宝价 {{item.taobao}}</div>
                            <div>优惠价 {{item.onsale}}</div>
                        </div>
                        <div>
                            <div>{{item.people}}人购买</div>
                            <div>立省{{item.discount}}</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
        computed:{
            //搜索框默认提示内容
            tip (){
                return this.$store.state.home.tip
            },
            //搜索框输入内容
            inputword (){
                return this.$store.state.home.inputword
            },
            //商品种类列表
            menus (){
                return this.$store.state.home.menus
            },
            //商品列表
            lists (){
                return this.$store.state.home.lists
            }
        },
        methods : {
            search (str){
                
            },
            genre (id,$index){
                //todo:请求
                this.menus.forEach((item,index,array) => {
                    return array[index].chosed = $index == index ? true : false;
                });
            }
        }
    }
</script>

