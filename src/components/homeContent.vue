<template>
    <div class="content-box">
        <div class="home-menu">
            <a href="#" v-for="(img, index) in productMenu" :key="img.id">
                <img :src="img.url">
            </a>
        </div>
        <template v-for="(product, index) in productList">
            <div :id="product.id" class="home-module "  >
                <h4 class="home-module-title">
                    {{product.titleLg}}
                    <span>/</span>
                    <span>{{product.titleSm}}</span>
                </h4>
                <div class="colorful-top-banner">
                    <a href="">
                        <img :src="product.imgUrl" alt="">
                    </a>
                </div>
                <div class="color-product-list">
                    <div class="list-box">
                        <ul>
                            <li v-for="item in product.list">
                                <a href="">
                                    <img :src="item.imgUrl" alt="">
                                </a>
                                <a href="">
                                    <h6>{{item.titleLg}}</h6>
                                </a>
                                <a href="">
                                    <p>{{item.titleSm}}</p>
                                </a>
                                <div class="tag-list">
                                    <a href="" v-for="(value, key) in item.label">{{ value }} </a>
                                    <!-- <a href="">{{item.label_2}} </a>
                                    <a href="">{{item.label_3}} </a> -->
                                </div>
                                <div class="cart-info">
                                    <span class="spc">¥298.00/2.0磅</span>
                                    <a class="add-cart" ref="box" @click.self="showToggle">加入购物车</a>
                                </div>
 




                                <div class="spec-detail" v-show="isShow">
                                    <div class="spec-title">￥{{ price }}.00磅</div>
                                    <div class="spec-info" >
                                        <a v-for="(value, key) in item.spec" @click="togglePrice(index)">{{ value }}.0磅<i></i></a>
                                      
                                    </div>
                                    <div class="buttons">
                                        <div class="button left buy-now">立即购买</div>
                                        <div class="button coffee right add-to-cart">加入购物车</div>
                                    </div>
                                </div>
                            </li>
                
                        </ul>
                    </div>
                </div>
            </div>

        </template>
        <div class="home-module">
            <h4 class="home-module-title">
                活动门
                <span>/</span>
                <span>是被吸引了吧</span>
            </h4>
            <ul class="home-activity-content">
                <li>
                    <a href="">
                        <img src="../assets/area/810af7fb1f079477c8aec960d11fa4df.jpg" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <div class="home-module home-magazine">
                <h4 class="home-module-title">
                    {{artProduct.titleLg}}
                    <span>/</span>
                    <span>{{artProduct.titleSm}}</span>
                    <a href="">{{artProduct.title}} &nbsp;&gt;</a>
                </h4>
                <ul class="home-magazine-content">
                        <li v-for=" item in artProduct.img">
                            <a href="">
                                <img class="lazy" :src="item.imgUrl">
                                <h4>{{ item.title_1 }}</h4>
                                <p><span></span><span>{{ item.title_2 }} &gt;&gt;</span></p>
                            </a>
                        </li>
                </ul>
        </div>
    </div>

</template>

<script>
export default {
    data (){
        return {
            isShow: false,
            price: '',
            productMenu: [
                {url: require("../assets/homemenu/5f0d9f1270678f2f20cceab02f77ceb5.png")},
                {url: require("../assets/homemenu/b6f731149b7076b524114c0d7c387da0.png")},
                {url: require("../assets/homemenu/0b331caf72a856549a98cf94d22cf3b3.png")},
                {url: require("../assets/homemenu/78c8a0592d41612c1f01ebe226d8b399.png")},
                {url: require("../assets/homemenu/82e473d51470b7151981ba05c81f5b6d.png")},
            ],
            productList: {
                newsProduct:{
                    id: 1,
                    'titleLg': "新品",
                    'titleSm': "专区",
                    'imgUrl': require("../assets/area/3376272e5601247de6e274863f6b841d.jpg"),
                    list: [
                        {
                            imgUrl: require('../assets/product/sm/1.png'),
                            titleLg: "浅草(绿茵场)",
                            titleSm: "2018世界杯定制款",
                            label:[ "聚会 >","新品 >"],
                            spec: [ 1.0, 2.0, 3.0 ],
                            price: [198.00, 298.00, 458.00]
                        },
                        {
                            imgUrl: require('../assets/product/sm/2.png'),
                            titleLg: "黑越橘",
                            titleSm: "野生蓝莓的天堂",
                            label:[ "新品 >", "生日 >", "儿童 >"]
                        },
                        {
                            imgUrl: require('../assets/product/sm/3.png'),
                            titleLg: "清境",
                            titleSm: "当薄荷的清新，遇上青柠的淡香",
                            label:[ "新品 >", "聚会 >"]
                        },
                        {
                            imgUrl: require('../assets/product/sm/4.png'),
                            titleLg: "芒果慕斯",
                            titleSm: "优质芒果的三种姿态，与青柠酸乳酪夹心",
                            label:[ "儿童 >", "聚会 >", "新品 >"]
                        },
                    ]
                },
                goodsProduct:{
                    id: 2,
                    'titleLg': "生日",
                    'titleSm': "专区",
                    'imgUrl': require("../assets/area/4dd9321ba68b0b4fa97da3e83f05c1f2.jpg"),
                    'price': "298.00/2.0",
                    'cartTitle': "加入购物车",
                    list: [
                        {
                            imgUrl: require('../assets/product/sm/5.png'),
                            titleLg: "冻慕斯与焗芝士",
                            titleSm: "新鲜奶油慕斯，轻盐味，丰富甜",
                            label:[ "情侣 >", "低温 >", "生日 >"],
                            spec: [ 1.0, 2.0, 3.0 ],
                            price: [198.00, 298.00, 458.00]
                        },
                        {
                            imgUrl: require('../assets/product/sm/6.png'),
                            titleLg: "朗姆芝士",
                            titleSm: "酒香，微苦，清新的柠檬",
                            label:[ "情侣 >", "白色情人节 >"]
                        },
                        {
                            imgUrl: require('../assets/product/sm/7.png'),
                            titleLg: "(撒粉生日)黑白巧克力慕斯",
                            titleSm: "口感冰凉细腻，白巧克力慕斯的甜",
                            label:[ "生日 >"]
                        },
                        {
                            imgUrl: require('../assets/product/sm/8.png'),
                            titleLg: "黑白巧克力慕斯",
                            titleSm: "设计师限量款",
                            label:[ "聚会 >", "生日 >"]
                        }
                    ]
                },
                childProduct:{
                    id: 3,
                    'titleLg': "儿童",
                    'titleSm': "专区",
                    'imgUrl': require("../assets/area/a85037c288546b3c691192dfad2bb16a.jpg"),
                    'price': "298.00/2.0",
                    'cartTitle': "加入购物车",
                    list: [
                        {
                            imgUrl: require('../assets/product/sm/9.png'),
                            titleLg: "黑白巧克力慕斯 彼尔德（Party）",
                            titleSm: "“ 孩子的世界，简单到非黑即白。”",
                            label:[ "儿童 >", "新品 >"]
                        },
                        {
                            imgUrl: require('../assets/product/sm/10.png'),
                            titleLg: "杰瑞",
                            titleSm: "谁动了我的奶酪？!",
                            label:[ "儿童 >", "聚会 >"]
                        },
                        {
                            imgUrl: require('../assets/product/sm/11.png'),
                            titleLg: "百香果酸乳酪慕斯（木糖醇）",
                            titleSm: "冰淇淋口感，不同层次的酸与冰凉",
                            label:[ "情侣 >", "低温 >", "新品 >", "儿童 >"]
                        },
                        {
                            imgUrl: require('../assets/product/sm/12.png'),
                            titleLg: "心语心愿",
                            titleSm: "椰子香气，蛋糕坯的颗粒感平衡奶油的软滑，烛光",
                            label:[ "情侣 >", "生日 >", "儿童 >"]
                        },
                    ]
                },
                partyProduct:{
                    id: 4,
                    'titleLg': "聚会",
                    'titleSm': "专区",
                    'imgUrl': require("../assets/area/4f5fdcf4d2b26b0400372f90b8fac191.jpg"),
                    'price': "298.00/2.0",
                    'cartTitle': "加入购物车",
                    list: [
                        {
                            imgUrl: require('../assets/product/sm/13.png'),
                            titleLg: " 6口味切块",
                            titleSm: "多口味，精装小份",
                            label:[ "聚会 >", "新品 >", "人气 >"]
                        },
                        {
                            imgUrl: require('../assets/product/sm/14.png'),
                            titleLg: "黑方",
                            titleSm: "法国白兰地的味道，更衬纯黑巧克力的香醇",
                            label:[ "聚会 >"]
                        },
                        {
                            imgUrl: require('../assets/product/sm/15.png'),
                            titleLg: "深艾尔",
                            titleSm: "深色烈性艾尔啤酒风味慕斯",
                            label:[ "情侣 >", "聚会 >", "低温 >", "新品 >"]
                        },
                        {
                            imgUrl: require('../assets/product/sm/16.png'),
                            titleLg: "桂圆冰淇淋蛋糕",
                            titleSm: "白兰地让人分神，有些记忆与酒有关",
                            label:[ "聚会 >", "低温 >", "人气 >"]
                        },
                    ]
                },
            },
            actProduct:{
                    'titleLg': "活动",
                    'titleSm': "专区",
                    'imgUrl': require("../assets/area/810af7fb1f079477c8aec960d11fa4df.jpg"),  
                },
            artProduct:{
                'titleLg': "甘一客",
                'titleSm': "文章",
                'title': "查看更多",
                img: [
                    {
                        imgUrl: require("../assets/area/a6e7f6613a769ad63bb6798b08fd9bc4.jpg"),
                        title_1: "春季刊 · 茶",
                        title_2: "阅读全文",
                    },
                    {
                        imgUrl: require("../assets/area/7874cdea7ca4ab963c3e23571531bd51.jpg"),
                        title_1: "春季刊 · 私享",
                        title_2: "阅读全文",
                    }
                ]
            },
        }
    },
    
    mounted() {
        console.log(this.productList.newsProduct.list[2].titleLg)
        
    },
    
    methods: {
        // 点击某元素进行显示或隐藏
        showToggle() {
            this.isShow = true;
            console.log(productList)
        },
        togglePrice (i) {
            console.log(i)
            
            this.price = this.product
            // console.log(this.price)
        }
    } 



}

</script>


<style scope>
/* .content-box {
    padding: 0;
    width: 1200px;
    margin: 0 auto;
} */
.home-menu {
    width: 1124px;
    margin: 26px auto 0;
    overflow: hidden;
    padding-top: 0;
}
.home-menu a {
    display: block;
    float:left;
    margin: 6px 12px;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.06);
    overflow: hidden;
}
.home-menu img {
    width: 200px;
    height: 100px;
}
.home-module {
    margin-top: 5px;
    padding-top: 50px;
}
.home-module-title {
    font-size: 26px;
    color: #714228;
    line-height: 36px;
    width: 1100px;
    margin: 0 auto 20px;
}
.home-module-title span {
    font-size: 14px;
    color: #8E5D43;
    display: inline-block;
    margin-left: 6px;
}
.colorful-top-banner {
    margin-top: -100px;
    width: 1100px;
    height: 250px;
    margin: 0 auto;
}
.home-colorful .colorful-top-banner img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
.color-product-list {
    position: relative;
    padding-bottom: 20px;
}
.list-box {
    width: 1116px;
    height: 365px;
    overflow: hidden;
    margin: 20px auto 0;
    position: relative;
}
.list-box ul {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
}
.home-module .list-box li {
    float: left;
    width: 263px;
    height: 365px;
    margin: 0 8px;
    position: relative;
}
.home-module .list-box li img {
    width: 263px;
    height: 230px;
    display: block;
    margin: auto;
    border-radius: 8px;
}
.home-module .list-box li h6 {
    font-size: 16px;
    margin-top: 10px;
    line-height: 22px;
    color: #000;
}
.home-module .list-box li p {
    font-size: 14px;
    color: #616161;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.home-module .list-box li .tag-list {
    width: 263px;
    height: 35px;
    overflow: hidden;
}
.home-module .list-box li .tag-list a {
    display: inline-block;
    border: 1px solid #D5BFA7;
    border-radius: 100px;
    padding: 0 6px 0 8px;
    color: #D5BFA7;
    margin: 8px 3px;
    font-size: 12px;
}
.home-module .list-box li .tag-list a {
    display: inline-block;
    border: 1px solid #D5BFA7;
    border-radius: 100px;
    padding: 0 6px 0 8px;
    color: #D5BFA7;
    margin: 8px 3px;
    font-size: 12px;
}
.home-module .list-box li .cart-info {
    border-top: 1px dashed #D5BFA7;
    height: 37px;
    color: #b0986f;
    margin-top: 6px;
    padding-top: 14px;
}
.home-module .list-box li .spc {
    display: inline-block;
    line-height: 20px;
    color: #BB9772;
    font-size: 14px;
}
.home-module .list-box li .add-cart {
    float: right;
    display: inline-block;
    line-height: 20px;
    font-size: 12px;
    background: #643E28;
    color: #fff;
    padding: 0 10px;
}




.home-activity-content {
    width: 1116px;
    margin: 0 auto;
    overflow: hidden;
    padding: 6px 0;
}
.home-activity-content li {
    float: left;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    width: 542px;
    margin: 0 8px;
}
.home-s_activity-content li img {
    width: 542px;
    display: block;
}

.home-magazine .home-module-title a {
    font-size: 13px;
    color: #8E5D43;
    float: right;
}
.home-magazine-content {
    width: 1116px;
    margin: 0 auto;
    overflow: hidden;
    padding: 6px 0;
}
.home-magazine-content li {
    float: left;
    background: #fff;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.10);
    border-radius: 8px;
    overflow: hidden;
    width: 542px;
    height: 345px;
    margin: 0 8px;
}
.home-magazine-content li img {
    width: 542px;
    height: 252px;
}
.home-magazine-content li h4 {
    font-size: 24px;
    color: #000;
    margin-top: 14px;
    padding: 0 16px;
}
.home-magazine-content li p {
    font-size: 14px;
    color: #242424;
    padding: 0 16px;
    line-height: 22px;
}
.home-magazine-content li p span:first-child {
    display: inline-block;
    width: 400px;
    padding-right: 30px;
    vertical-align: middle;
}
.home-magazine-content li p span:last-child {
    color: #AD814B;
    display: inline-block;
}





.home-module .color-product-list .list-box li .spec-detail, .home-colorful .color-product-list .list-box li .addcart-success {
    position: absolute;
    box-sizing: border-box;
    padding: 12px;
    background: #FAFAFA;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 1001;
}
.home-module .spec-detail .spec-title {
    font-size: 16px;
    color: #684029;
}
.home-module .spec-detail .spec-info {
    padding: 10px 0;
}
.home-module .color-product-list .list-box li .spec-detail .spec-info a {
    display: inline-block;
    box-sizing: border-box;
    font-size: 12px;
    color: #7A5844;
    border: 1px solid #D0C3BB;
    padding: 6px 12px;
    margin: 2px;
    position: relative;
}
.home-module .color-product-list .list-box li .spec-detail .spec-info a.active i {
    display: block;
    height: 10px;
    width: 10px;
    position: absolute;
    top: 0;
    left: 0;
    background: url('../assets/icon/icon.png') no-repeat;
    background-position: 0px -40px;
    background-size: 310px 120px;
}
.home-module .color-product-list .list-box li .spec-detail .buttons {
    color: #684029;
}
.home-module .color-product-list .list-box li .spec-detail .buttons .button {
    width: 114px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #fff;
    color: #7A5844;
    cursor: pointer;
    margin: 8px 0;
}

.left {
    float: left;
}
.home-module .color-product-list .list-box li .spec-detail .buttons .button.coffee {
    background: #684029;
    color: #fff;
}

.home-module .color-product-list .list-box li .spec-detail .buttons .button {
    width: 114px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    margin: 8px 0;
}
.right {
    float: right;
}
</style>