

<template>
  <div id="app" class="header-box">
    <div class="header">
        <div class="header-nav">
            <a class="header-logo">
                <img src="./assets/logo.png">
            </a>
            <!-- 左侧导航 -->
            <ul class="nav-box">
                <li><a href="">首页</a></li>
                <li><a href="">蛋糕</a></li>
                <li><a href="">冰淇淋</a></li>
                <li><a href="">咖啡下午茶</a></li>
                <li><a href="">咖啡全国配送</a></li>
                <li><a href="">企业专区</a></li>
            </ul>
            <!-- 右侧导航 -->
            <div class="right-city-user">
                <a class="header-app">App下载</a>
                <div class="current-city">深圳<i></i></div>
                <a class="header-message">消息</a>
                <span class="not-login">
                    <a href="">登录</a>/
                    <a href="">注册</a>
                </span>
                <a class="header-cart">
                    <i></i>
                </a>
            </div>
        </div>
    </div>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <div class="footer">
        <img class="footer-logo" src="./assets/icon/footer-logo.png">
        <div class="footer-nav">
            <a>联系我们</a>
            <span>|</span>
            <a>订购帮助</a>
            <span>|</span>
            <a>企业合作</a>
            <span>|</span>
            <a>生产经营资质</a>
            <span>|</span>
            <a>公告专区</a>
        </div>
        <div class="footer-icon">
            <a>
                <img src="./assets/icon/footericon-01.png">
            </a>
            <a class="footer-weixin">
                <img src="./assets/icon/footericon-02.png">
            </a>
            <a class="footer-app">
                APP
            </a>
        </div>
        <div class="footer-text">
            <span>订购专线：400 650 2121（服务时间 08:00–22:00）</span>
            <span>客服电话：021-23099721（全国） | kefu@21cake.com（邮箱）</span>
            <span>杭州/广州：提前5小时预订；北京：提前6小时预订；上海：提前5.5-6小时预订；天津/苏州/无锡/深圳：提前8小时预订（当日22点以后订单，于次日8点开始审核） </span>
            <span>当日蛋糕配送截止下单时间：北京：16:50；上海：16:30；杭州/广州：13:50；天津：10:30；苏州/无锡/深圳：11:00</span>
            <span>网站注册公司名称: 北京廿一客食品有限公司 地址: 北京市北京经济技术开发区兴海二街5号院3号楼 </span>
        </div>
        <div class="footer-copyright">
            <span>Copyright© 21Cake蛋糕官网商城 2007-2018, 版权所有 
                <a>京ICP备14006254号-1</a>
            </span>
        </div>
    </div>
  </div>
</template> 

<script>
export default { 
    data () {
        return {
        }
    } 

}
</script>

<style>
      /*通用属性*/
  body {
      font-family: 'PingFang SC', 'Heiti SC', '微软雅黑', Helvetica, Arial;
      font-size: 12px;
      color: #684029;
  }
  
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, form, input, button, textarea, p, th, td, tr {
      margin: 0;
      padding: 0;
  
  }
  
  
  a:visited,
  a:link,
  a {
      color: #684029;
      text-decoration: none;
      cursor: pointer;
  }
  
  a:hover {
      color: #BB9772;
  }
  
  input[type="button"], input[type="submit"], button {
      cursor: pointer;
  }
  
  ol, ul {
      list-style: none;
  }
  
  .lf{float:left;}
  .rt{float:right;}
  .clear{clear:both;}
  .content-box {
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 50px;
}



/* 头部 */
.header-box {
    height: 80px;
}
.header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000000;
    width: 100%;
    height: 80px;
    background: #fff;
    box-shadow: 0 2px 2px 0 rgba(195,195,195,0.5)
}
.header-nav {
    margin: 0 auto;
    max-width: 1200px;
    min-width: 760ppx;
    height: 80px;
}
.header-logo {
    width: 120px;
    height: 44px;
    margin-top:18px;
    float: left;
}
.header-logo>img {
    width: 100%;
}
.header .nav-box {
    position: relative;
    float: left;
    line-height: 80px;
    height: 80px;
    margin-left: 30px;
}
.header .right-city-user {
    position: relative;
    float: right;
}
.header .nav-box li {
    float: left;
    margin: 0 15px;
    font-size: 14px;
    position: relative;
}
.header .header-app {
    float: left;
    font-size: 14px;
    line-height: 80px;
    margin-right: 20px;
}
.header .current-city {
    line-height: 80px;
    float: left;
    width: 84px;
    text-align: center;
    font-size:14px;
}
.header .current-city i {
    background: url('./assets/icon/icon.png') no-repeat 0 -59px;
    background-size: 310px 120px;
    height: 7px;
    width: 10px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
}
.right-city-user .header-message {
    display: inline-block;
    float: left;
    width: 50px;
    height: 32px;
    padding-top: 25px;
    line-height: 32px;
    font-size: 14px;
}
.header .not-login {
    float: left;
    line-height: 80px;
    font-size: 14px;
    width: 80px;
    text-align: center;
}
.header .header-cart {
    position: relative;
    float: left;
    display: block;
    height: 32px;
    padding: 22px 6px 20px 15px;
}
.header .header-cart i{
    background: url('./assets/icon/icon.png') no-repeat -286px -76px;
    background-size: 310px 120px;
    height: 18px;
    width: 18px;
    display: inline-block;
    margin-top: 9px;
    vertical-align: middle;
}




/* 尾部  */
.footer {
    background: #333;
    padding: 50px 0 0 0;
    position: relative;
}
.footer-logo {
    display: block;
    margin: 0 auto;
    height: 36px;
    width: 96px;

}
.footer-nav {
    text-align: center;
    color: #fff;
    margin: 25px 0;
}
.footer-nav a {
    color: #fff;
    display: inline-block;
    margin: 0 50px;
}
.footer-icon {
    text-align: center;
}
.footer-icon a {
    display: inline-block;
    border-radius: 25px;
    height: 50px;
    width: 50px;
    background: #494949;
    margin: 0 25px;
    font-size: 16px;
    color: #fff;
    line-height: 50px;
    text-align: center;
    vertical-align: middle;
}
.footer-icon a>img {
    height: 30px;
    margin: 10px;
}
.footer-text {
    color: #9a9a9a;
    text-align: center;
    margin-top: 25px;
    line-height: 18px;
    font-size: 10px;
}
.footer-text span:first-child {
    font-weight: bold;
}
.footer-text span {
    display: block;
}
.footer-copyright {
    margin: 0 auto;
    border-top: 1px solid #616161;
    margin-top: 15px;
    text-align: center;
    padding-bottom: 15px;
    padding-top: 12px;
}
.footer-copyright span {
    color: #9a9a9a;
    line-height: 1.5em;
}
.footer-copyright span a {
    color: #9a9a9a;
}
</style>



