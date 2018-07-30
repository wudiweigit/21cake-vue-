<template>
    <div class="pro-details-cont">
        <div class="details-content-left" v-for="item in proInt">
            <h1 class="pro-details-title">{{ item.title_lg }}</h1>
            <div class="sub-title">
                <p>{{ item.title_sm }}</p>
            </div>
            <div class="pro-details-label">
                <a>{{ item.label_1 }}</a>
                <a>{{ item.label_2 }}</a>
            </div>
            <ul class="details-constituent">
                <li>
                    <img :src="item.icon_1" alt="">
                    <span>{{ item.icon1_title }}</span>
                </li>
                <li>
                    <img :src="item.icon_2" alt="">
                    <span>{{ item.icon2_title }}</span>
                </li>
                <li>
                    <img :src="item.icon3" alt="">
                    <span>{{ item.icon3_title }}</span>
                </li>
            </ul>
            <div class="pro-details-explain">
                {{ item.int_1 }}<br>
                {{ item.int_2 }}<br>
                {{ item.int_3 }}<br>
                {{ item.int_4 }}                
            </div>
            <ul class="details-distribution">
                <li class="distribution-exist">
                    <i></i>
                    <span>{{ item.int_5 }}</span>{{ item.int_6 }}
                </li>
                <li class="distribution-sweet" data-sweet="2">
                    <i></i>
                    <span style="margin-left:5px;">参考甜度：</span>
                    <span class="sweet-icon">
                        <i class="active"></i>
                        <i class="active"></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </li>

            </ul>
        </div>
        <myprocontright></myprocontright>
        
    </div>
</template>



<script>
    import myprocontright from './proContRight'
export default {
    components: {
        myprocontright,
    },
    data () {
        return {
            proInt: [
                {
                    title_lg: 'Teatime 浅草（绿茵场）',
                    title_sm: '',
                    label_1: '聚会 >',
                    label_2: '新品 >',
                    icon_1: require('../../assets/icon/pcicon-27.png'),
                    icon_2: require('../../assets/icon/c17c9cfec493b4c6260995481f94da84.png'),
                    icon_3: require('../../assets/icon/0e3e98e8360f7ac3ef28a411dd0fabd9.png'),
                    icon1_title: '绿茶',
                    icon2_title: '梨',
                    icon3_title: '玄米',
                    int_1: '/2018年世界杯定制款/',
                    int_2: '/可以吃到嘴里的绿茵盛宴/',
                    int_3: '/绿茵上的世界总是年轻，而绿色是自由奔跑的颜色/',
                    int_4: '*本款为季节性产品，夹心层由南水梨/马蹄更替。',
                    int_5: '保鲜条件：',
                    int_6: '0－4℃保藏10小时，5℃食用为佳',
                },
            ]
        }
    }
}
</script>



<style scope>
    .pro-details-cont {
    position: relative;
    overflow: hidden;
    padding-bottom: 10px;
    border-bottom: #D8D8D8 solid 1px;
}
.details-content-left {
    width: 484px;
}
.details-content-left, .details-content-right {
    float: left;
}
.pro-details-title {
    font-size: 20px;
    line-height: 28px;
    padding-top: 20px;
}
.sub-title {
    min-height: 17px;
    line-height: 17px;
    color: #FF3933;
}
.pro-details-label {
    margin: 20px 0 14px;
    font-size: 0;
}
.pro-details-label a {
    display: inline-block;
    line-height: 18px;
    color: #D5BFA7;
    padding: 0 10px;
    border: 1px solid #D5BFA7;
    border-radius: 100px;
    margin-right: 6px;
    font-size: 12px;
}
.details-constituent {
    overflow: hidden;
    margin-bottom: 14px;
}
.details-constituent li {
    float: left;
    height: 50px;
    line-height: 50px;
    color: #684029;
}
.details-constituent li img {
    display: inline-block;
    height: 50px;
    width: 50px;
    vertical-align: middle;
}
.details-constituent li span {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
}
.pro-details-explain {
    font-size: 12px;
    width: 484px;
    line-height: 2em;
    min-height: 30px;
}
.details-distribution {
    padding: 12px 0;
}
.details-distribution li {
    height: 34px;
    line-height: 34px;
}
.details-distribution li.distribution-exist i {
    background-position: -118px -2px;
    height: 20px;
    width: 19px;
}

.details-distribution li i {
    display: inline-block;
    vertical-align: middle;
    height: 34px;
    width: 30px;
    background-image: url('../../assets/icon/icon.png');
    background-repeat: no-repeat;
    background-size: 240px auto;
    margin: 0 10px;
}
.details-distribution span {
    display: inline-block;
    margin-left: 3px;
}
.details-distribution li.distribution-sweet i {
    background: url('../../assets/icon/sweet.png') center no-repeat;
    background-size: 22px auto;
    width: 20px;
    margin-right: 2px;
}
.distribution-sweet span {
    margin-left: 5px;
}
.details-distribution li.distribution-sweet span.sweet-icon {
    margin-left: 0;
}
.distribution-sweet span.sweet-icon i.active {
    background: url('../../assets/icon/sweet_02.png') no-repeat center;
}
.distribution-sweet span.sweet-icon i{
    background: url('../../assets/icon/sweet_01.png') no-repeat center;
}
.details-content-right {
    width: 500px;
    margin-left: 65px;
    position: relative;
    overflow: auto;
}
.details-price {
    position: absolute;
    height: 25px;
    line-height: 25px;
    font-size: 18px;
    z-index: 10;
    top: 165px;
    left: 335px;
    color: #C69C6D;
}
.details-price span {
    font-size: 26px;
}

</style>

