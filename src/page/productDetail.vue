<template>
    <div>
        <div class="detail-banner">
            <div class="left-img-box">
                <div class="video-box">
                    <img :src="imgUrl" alt="">
                </div>
            </div>
            <div class="right-list">
                <a class="top-banner"></a>
                <ul>
                    <li v-for="(item, index) in productRight" @mouseover="getIndex(item.url)" :key="index" active-class="active"><img :src="item.url" ></li>
                      
                </ul>
            </div>
        </div>
        <div class="content-box">
            <myprodetailcont></myprodetailcont>
            <myprodetailint></myprodetailint>
        </div>
                    


    </div> 
</template>


<script>
import myprodetailcont from './productdetail/proDetailCont'
import myprodetailint from './productdetail/proDetailInt'
export default {
    components: {
        myprodetailcont,
        myprodetailint,
    },
    data () {
        return {
            //默认显示第一张图
            imgUrl: require("../assets/product/lg/header/1/6814094c2b0861c0b935d607ab9e10d0.jpg"),
            productRight: [
                {
                    url: require("../assets/product/lg/header/1/6814094c2b0861c0b935d607ab9e10d0.jpg"),
                    active: false
                },
                {
                    url: require("../assets/product/lg/header/1/26e26b9fd1a616c9965cc9616121c4d7.jpg"),
                    active: false
                },
                {
                    url: require("../assets/product/lg/header/1/52ec2f0102e1079d6df64f0f365f036c.jpg"),
                    active: false
                },
                {
                    url: require("../assets/product/lg/header/1/732ae884ece464cb4fd56d9ecff8e2c1.jpg"),
                    active: false
                }
            ]
        }
    },
    methods: { 
        //点击小图片时将图片路径赋值给大图
        getIndex (itemUrl){
            this.imgUrl = itemUrl
        }
    },
    mounted () {

    }
}
</script>



<style scope>
.detail-banner {
    width: 1050px;
    height: 520px;
    margin: 10px auto 0;
} 
.detail-banner .left-img-box {
    width: 924px;
    height: 520px;
    float: left;
    position: relative;
}
.detail-banner .left-img-box img {
    width: 100%;
    height: 100%;
    background: #eee;
    position: absolute;
    top: 0;
    left: 0;
}
.detail-banner .right-list {
    height: 520px;
    width: 90px;
    float: right;
    position: relative;
}
.detail-banner .top-banner {
    height: 230px;
    width: 90px;
    display: block;
    overflow: hidden;
}
.detail-banner ul {
    width: 90px;
    bottom: 0;
    left: 0;
    position: absolute;
    max-height: 280px;
    overflow: hidden;
}
.detail-banner ul li {
    height: 50px;
    width: 90px;
    margin-top: 20px;
    cursor: pointer;
}
.detail-banner ul li.active, .detail-banner ul li:hover{
    border: 1px solid #c69c6d;
    height: 48px;
    width: 88px;
}
.detail-banner ul li img {
    width: 100%;
    height: 100%;
    background: #eee;
}


.content-box {
    width: 1050px;
    margin: 0 auto;
    padding-bottom: 50px;
}

</style>