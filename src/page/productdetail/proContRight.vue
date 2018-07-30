<template>
    <div class="details-content-right">
            <p class="details-price">¥<span>458</span>/3.0磅</p>
            <div class="details-Specifications">
                <div class="outer-box">
                    <div class="details-img-box">
                        <img src="../../assets/size/2.00P-full-18.00.jpg" class="details-img">
                        <ul class="details-options fl-left">
                            <li class="details-options-size"><i></i>24x24cm</li>
                            <li class="details-options-unmber"><i></i>适合11-12人分享</li>
                            <li class="details-options-laid"><i></i>含15套餐具</li>
                            <li class="details-options-time"><i></i>最早今天 18:00配送</li>
                        </ul>
                    </div>
                    <!-- <dl class="details-Specifications-size-extra">
                        <dt>商品规格</dt>
                        <dd>
                            <ul></ul>
                        </dd>
                    </dl> -->
                    <!-- 选择蛋糕尺寸 -->
                    <dl class="details-Specifications-size">
                        <dt>商品规格</dt>
                        <dd>
                            <ul>
                                <li><a class="">1.0磅<i></i></a></li>
                                <li><a class="active">2.0磅<i></i></a></li>
                                <li><a>3.0磅<i></i></a></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <!-- 赠品 -->
                <!-- 购物按钮 -->
                <div class="details-button">
                    <button class="details-but-buy" name="details-but-buy_bottom">立即购买</button>
                    <button class="details-but-cart detailsAddCart" name="details-but-cart_bottom">加入购物车</button>
                </div>
                <!-- <div class="addcart-dialog in-cart"> -->
                    <!-- 加入等待 -->
                    <!-- <span></span> -->
                    <!-- 加入成功后 -->
                    <!-- <div style="display: none">
                        <p><i></i>成功添加购物车</p>
                        <a href="/cart.do" class="details-go-cart" name="details-go-cart_bottom">查看购物车</a>
                    </div>
                    <i></i>
                </div> -->
                <!-- 登录提醒 -->
                <!-- <div class="addcart-dialog details-empty-dialog">
                    <div>
                        <p>先登录/注册再设置</p>
                        <p>到货提醒设置成功！</p>
                        <a href="" class="details-go-cart">去登录/注册</a>
                    </div>
                    <i></i>
                </div> -->
            </div>
    </div>
</template>


<style scope>
.details-img-box {
    overflow: hidden;
    padding-top: 28px;
    margin-bottom: 24px;
    min-height: 80px;
}
.details-img-box .details-img {
    float: left;
    width: 300px;
    height: 170px;
    display: block;
}
.details-options {
    margin-top: 8px;
}
.fl-left {
    float: left;
    margin-left: 28px;
}
.fl-left li i {
    margin-right: 8px;
}
.details-options li {
    height: 25px;
    line-height: 25px;
    margin: 5px 0;
}
.details-options li.details-options-size i {
    background-position: -210px -5px;
}

.details-options li i {
    display: inline-block;
    width: 25px;
    height: 25px;
    vertical-align: middle;
    background-image: url('../../assets/icon/icon.png');
    background-size: 310px 120px;
    background-repeat: no-repeat;
}
.details-options li.details-options-unmber i {
    background-position: -235px -5px;
}
.details-options li.details-options-laid i {
    background-position: -260px -5px;
}
.details-options li.details-options-time i {
    background-position: -285px -5px;
}
.details-Specifications-size-extra {
    display: none;
}
.details-Specifications-size dd, .details-Specifications-size-extra dd, .details-markup dd {
    width: 450px;
}
.details-Specifications-size dt, .details-Specifications-size-extra dt, .details-Specifications-size dd, .details-Specifications-size-extra dd, .details-markup dt, .details-markup dd {
    float: left;
    line-height: 30px;
}
.details-Specifications-size dd li, .details-Specifications-size-extra dd li, .details-markup dd li {
    float: left;
    min-width: 60px;
    height: 30px;
    margin-left: 15px;
    text-align: center;
    color: #7A5844;
    margin-bottom: 14px;
    cursor: pointer;
}
.details-Specifications-size dd li a, .details-Specifications-size-extra dd li a, .details-markup dd li a {
    display: block;
    height: 28px;
    border: 1px solid #e7e0dd;
    position: relative;
    padding: 0 5px;
}
.details-Specifications-size dd li a.active i, .details-Specifications-size-extra dd li a.active i, .details-markup dd li a.active i {
    background: url('../../assets/icon/icon.png') no-repeat;
    background-position: 0px -40px;
    background-size: 310px 120px;
}

.details-Specifications-size dd li a i, .details-Specifications-size-extra dd li a i, .details-markup dd li a i {
    display: block;
    height: 10px;
    width: 10px;
    position: absolute;
    top: 0;
    left: 0;
}
.details-button {
    width: 344px;
    height: 40px;
    font-size: 13px;
}
.details-button button {
    width: 167px;
    height: 30px;
}

.details-but-buy {
    float: left;
    background: #F4F4F4;
    color: #7A5844;
    border: 0 solid #F4F4F4;
}
.details-but-cart {
    float: right;
    background: #684029;
    color: #fff;
    border: 0 solid 
}
</style>