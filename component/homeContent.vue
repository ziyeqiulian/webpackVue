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
    .commodity .img {
        width: 100px;
        height: 100px;
        border: 1px solid #ddd;
    }
    .commodity .box {
        display: flex;
    }
    .box section {
        margin: 10px;
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
                <!-- <img src="./static/img/girl.jpg"> -->
                <div class="img"></div>
                <section>
                    <header>美女图片</header>
                    <div class="details">
                        <div>
                            <div>淘宝价 88</div>
                            <div>优惠价 68</div>
                        </div>
                        <div>
                            <div>10000人购买</div>
                            <div>立省20</div>
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
            return {
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
                    },
                ],
                // lists:[]
            }
        },
        computed:{
            lists (){
                return this.$store.state.home.lists
                // `state => state.count`
            }
        },
        methods : {
            search (str){
                
                console.log(str)
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

