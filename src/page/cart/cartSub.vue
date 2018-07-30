<template>
    <div class="cart-submit">
            <a href="#" class="cart-submit-empty"><i></i>全部清空</a>
            <ul class="cart-total-detail">
                <li>商品金额：¥ 894.00</li>
                <li>配送费：¥ 0.00</li>
                <li>活动优惠：¥ 0.00</li>
            </ul>
            <div class="cart-total"><span>合计：¥<span>894.00</span></span></div>
            <span class="cart-balance">订单已满￥100元,享免费配送服务</span>
            <div class="cart-submit-button">
                <a id="action-submit-btn">去结算</a>
            </div>
        </div>
</template>


<style scope>
    .cart-submit {
    position: relative;
    width: 1078px;
    background: #FBFBFB;
    border: 1px solid #E1E1E1;
    padding: 26px 60px 32px 60px;
    margin: 20px 0;
}
.cart-submit-empty {
    position: absolute;
    top: 25px;
    left: 60px;
    display: block;
    font-size: 13px;
}
.cart-submit-empty i {
    display: inline-block;
    width: 18px;
    height: 21px;
    background: url('../../assets/icon/icon.png') no-repeat -148px -71px;
    background-size: 310px 120px;
    vertical-align: middle;
    margin-right: 18px;
    margin-bottom: 4px;
}
.cart-submit li {
    font-size: 13px;
    text-align: right;
    line-height: 18px;
    margin-bottom: 10px;
}
.cart-submit .cart-total ,.cart-submit-button{
    text-align: right;
}
.cart-submit .cart-total>span {
    display: inline-block;
    width: 232px;
    border-top: 2px solid #E2E2E2;
    line-height: 42px;
    font-size: 13px;
}
.cart-submit .cart-balance {
    font-size: 13px;
    color: #D5BFA7;
    line-height: 18px;
    text-align: right;
    display: block;
}
.cart-submit-button a {
    background: #684029;
    width: 232px;
    height: 40px;
    display: inline-block;
    color: #fff;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    margin-top: 14px;
}
</style>