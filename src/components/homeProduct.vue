<template>
    <div class="color-product-list">
        <div class="list-box">
            <ul>
                <li v-for="(item, index) in classProduct" :key="index">
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
                        <a href="">{{item.label_1}} </a>
                        <a href="">{{item.label_2}} </a>
                        <a href="">{{item.label_3}} </a>
                    </div>
                    <div class="cart-info">
                        <span class="spc">¥298.00/2.0磅</span>
                        <a class=add-cart>加入购物车</a>
                    </div>
                </li>
    
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            classProduct: [
                {
                    id: 1,
                    imgUrl: require('../assets/product/sm/1.png'),
                    titleLg: "浅草(绿茵场)",
                    titleSm: "2018世界杯定制款",
                    label_1: "聚会 >",
                    label_2: "新品 >",
                },
                {
                    id: 2,
                    imgUrl: require('../assets/product/sm/2.png'),
                    titleLg: "黑越橘",
                    titleSm: "野生蓝莓的天堂",
                    label_1: "聚会 >",
                    label_2: "新品 >",
                    label_3: "生日 >",
                },
                {
                    id: 2,
                    imgUrl: require('../assets/product/sm/3.png'),
                    titleLg: "清境",
                    titleSm: "当薄荷的清新，遇上青柠的淡香",
                    label_2: "新品 >",
                },
                {
                    id: 2,
                    imgUrl: require('../assets/product/sm/4.png'),
                    titleLg: "芒果慕斯",
                    titleSm: "优质芒果的三种姿态，与青柠酸乳酪夹心",
                    label_1: "聚会 >",
                    label_2: "新品 >",
                },
                {
                    id: 2,
                    imgUrl: require('../assets/product/sm/5.png'),
                    titleLg: "芒果慕斯",
                    titleSm: "优质芒果的三种姿态，与青柠酸乳酪夹心",
                    label_1: "聚会 >",
                    label_2: "新品 >",
                },
            ]
        }
    }4
}
</script>