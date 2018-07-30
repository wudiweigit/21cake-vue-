<template>
        <div class="content-box box-top">
                <!--<div class="cart-not-pro">-->
                    <!--<img src="images/icon/cartempty.png" alt=""/>-->
                    <!--<span>您的购物车里还没有商品</span>-->
                    <!--<a href="#/cake">去购物 >></a>-->
                <!--</div>-->
                <!--商品信息-->
                <div class="cart-goods-info cart-list">
                    <ul class="thead-ul">
                        <li class="goods-ti">商品</li>
                        <li class="birthday-card-ti">生日牌</li>
                        <li class="unit-price">单价</li>
                        <li class="number-ti">数量</li>
                        <li class="money-ti">金额</li>
                    </ul>
                    <div class="tbody-ul">
                        <table>
                            <tbody>
                                <tr class="cart-object-item">
                                    <td class="goods-img">
                                        <a href="">
                                            <img src="../assets/product/cart/a5c7ec8dbe25e73a74f34e9d2ae43764.jpg" alt=""/>
                                        </a>
                                    </td>
                                    <td class="goods-cake">
                                        <div>
                                            <h4 class="cart-title">
                                                <a>Bailey's Love Triangle  百利甜情人</a>
                                            </h4>
                                            <span class="goods-spec">规格：<span>2.0磅</span></span>
                                            <span class="goods-laid"><i></i>赠送<ins>&nbsp;10&nbsp;</ins>套餐具</span>
                                        </div>
                                    </td>
                                    <td class="select-birthday-td">
                                        <div class="select-birthday" data-spec="2.0磅" data-num="0">
            
                                            <div class="action-birthday_card">选择生日牌<i></i></div>
                                            <ul class="action-birthday-options" style="display: none;">
                                                <li class="birthday-card-option">生日快乐</li>
                                                <li class="birthday-card-option">Happy Birthday</li>
                                                <li class="birthday-card-option">节日快乐</li>
                                                <li class="brith_card_by_self">自定义</li>
                                                <li style="display:none" class="action-input-container">
                                                    <input type="text" placeholder="可输入8个汉字或16个字符">
                                                    <input type="button" value="确定" class="action-birth-card-btn">
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td class="cart-unit-Price">¥298.00</td>
                                    <td class="number-li">
                                        <div class="number quantity-update">
                                            <input type="button" class="minus">
                                            <input type="text" class="quantity _quantity" value="1">
                                            <input type="button" class="plus">
                                        </div>
                                    </td>
                                    <td class="money">¥298.00</td>
                                    <td class="delete"><a href="#" data-indent="goods_12_2569"><i></i></a></td>
                                </tr>



                                <mycartlist></mycartlist>
                            </tbody>
                        </table>
                    </div>
                    <mycartsub></mycartsub>
                </div>
            </div>
</template>



<script>
    import mycartlist from './cart/cartList'
    import mycartsub from './cart/cartSub'
export default {
    components: {
        mycartlist,
        mycartsub,
    }
}
</script>

<style>
.box-top{
    margin-top: 112px;
}
.cart-goods-info{
    text-align: left;
    width: 1200px;
    margin-top: 32px;
    font-size: 13px;
}
.cart-goods-info .thead-ul{
    background: #fafafa;
    font-size: 13px;
    width: 1200px;
    overflow: hidden;
    line-height: 44px;
    border: 1px solid #e1e1e1;
}
.cart-goods-info .thead-ul li{
    height: 44px;
    float: left;
}
.cart-goods-info .goods-ti{
    width: 285px;
    margin-left: 166px;
}
.cart-goods-info .birthday-card-ti, .cart-goods-info .select-birthday{
    width: 300px;
    position: relative;
}
.cart-goods-info .unit-price,.cart-goods-info .cart-unit-Price{
    width: 115px;
}
.cart-goods-info .number-ti,.cart-goods-info .number-li{
    width: 150px;
}
.cart-goods-info .money-ti{
    width: 180px;
}
.cart-goods-info .tbody-ul {
    background: #fff;
    border: 1px solid #e1e1e1;
    margin-top: 20px;
}
.cart-list .tbody-ul .goods-img {
    border: none;
    padding: 0;
    width: 106px;
}
.cart-list .goods-img a {
    margin-left: 60px;
    display: block;
    border-bottom: 2px dashed #F1F1F1;
    padding: 24px 12px 24px 0;
    position: relative;
}
.cart-goods-info .goods-img img {
    height: 80px;
    width: 80px;
    border: 1px solid #EFEFEF;
}
.cart-list td.goods-cake {
    padding-left: 0;
    width: 300px;
}
.cart-goods-info .tbody-ul td {
    padding: 24px 0;
    border-bottom: 2px dashed #F1F1F1;
}
.cart-goods-info td.goods-cake>div {
    padding-right: 20px;
}
.cart-goods-info .goods-cake h4,.select-gift-title h4 {
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
}
.cart-title, .span-cart-title {
    width: 260px;
    height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.cart-goods-info .goods-spec,.select-gift-title .goods-spec {
    font-size: 13px;
    color: #D5BFA7;
    display: block;
}
.cart-goods-info .goods-laid {
    display: block;
    color: #CECECE;
    height: 35px;
    margin-top: 10px;
    font-size: 12px;
}
.cart-goods-info .goods-laid i {
    display: inline-block;
    height: 35px;
    width: 35px;
    background: url('../assets/icon/icon.png') no-repeat -44px -63px;
    background-size: 310px 120px;
    margin-right: 5px;
    margin-bottom: -6px;
}
.select-birthday-td {
    width: 300px;
}
.cart-goods-info .birthday-card-ti, .cart-goods-info .select-birthday {
    width: 300px;
    position: relative;
}
.select-birthday div {
    border: 1px solid #D5D5D5;
    width: 226px;
    height: 22px;
    color: #D8C3AD;
    outline: none;
    padding-left: 8px;
    position: relative;
    cursor: pointer;
    line-height: 22px;
}
.select-birthday i {
    height: 7px;
    width: 9px;
    background: url('../assets/icon/icon.png') no-repeat -238px -93px;
    background-size: 310px 120px;
    position: absolute;
    left: 219px;
    top: 9px;
}
.select-birthday ul {
    position: absolute;
    padding-left: 8px;
    top: 24px;
    left: 0;
    width: 226px;
    background: #FFF;
    border: 1px solid #EDEDED;
    box-shadow: 0 2px 4px 0 rgba(237, 237, 237, 0.50);
    display: none;
    z-index: 10;
}
.select-birthday li {
    color: #D8C3AD;
    line-height: 28px;
    margin: 7px 0;
    cursor: pointer;
}
.select-birthday ul input {
    width: 162px;
    height: 24px;
    border: 1px solid #ECECEC;
}
.select-birthday ul input[type="button"] {
    background: #673F2B;
    color: #fff;
    width: 42px;
    height: 24px;
    padding: 0;
    border: 0;
}
.cart-goods-info .number-ti, .cart-goods-info .number-li {
    width: 150px;
}
.cart-goods-info .number {
    height: 22px;
    width: 94px;
    border: 1px solid #E7E7E7;
}
.cart-goods-info .number input[type="button"] {
    width: 22px;
    border: none;
    font-size: 18px;
    line-height: 15px;
    cursor: pointer;
}
.cart-goods-info .number input[type="text"] {
    width: 48px;
    border: solid #E7E7E7;
    border-width: 0 1px;
}
.cart-goods-info .number .minus {
    background: url('../assets/icon/icon.png') no-repeat -252px -108px;
    background-size: 310px 120px;
}
.cart-goods-info .number input {
    height: 22px;
    display: block;
    float: left;
    background: #fff;
    outline: none;
    text-align: center;
}
.cart-goods-info .number .plus {
    background: url('../assets/icon/icon.png') no-repeat -235px -100px;
    background-size: 310px 120px;
}
.cart-list .money {
    width: 100px;
}
.cart-goods-info .money {
    color: #FF714D;
    font-size: 13px;
}
.cart-goods-info td.delete {
    border-bottom: 0;
}
.cart-list .delete i {
    margin-left: 30px;
}
.cart-goods-info .delete i {
    height: 12px;
    width: 12px;
    display: inline-block;
    background: url('../assets/icon/icon.png') no-repeat -221px -70px;
    background-size: 310px 120px;
    cursor: pointer;
}

</style>