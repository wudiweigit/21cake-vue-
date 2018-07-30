<template>
        <div class="content-box box-top">
            <div class="pro-list-content">
                <div class="pro-list-filter">
                    <dl class="cat-list" >
                        <dt>分类:</dt>
                        <dd><a>全部分类</a></dd>
                        <dd class="sub-cat" v-for="sort in sortList"><a >{{ sort.name }}</a></dd>
                        <!-- <dd class="sub-cat active"><a>蛋糕</a></dd>
                        <dd class="sub-cat"><a>冰淇淋</a></dd>
                        <dd class="sub-cat"><a>咖啡下午茶</a></dd>
                        <dd class="sub-cat"><a>常温蛋糕</a></dd>
                        <dd class="sub-cat"><a>设计师礼品</a></dd> -->
                    </dl>
                    <dl class="tag-list">
                        <dt>口味：</dt>
                        <dd class="tag-title active"><a>全部口味</a></dd>
                        <dd class="sub-tag" v-for="flavor in flavorList"><a>{{ flavor.name }}</a></dd>
                      
                    </dl>
                </div>
                

                <mycake></mycake>

            </div>
        </div>
    </template>
    
    
    <script>
    import mycake from '../page/sort/cake'
    export default {
        components: {
            mycake,
        },
        data () {
            return {
                sortList:[
                    {
                        name: '蛋糕',
                        path: 'analysis',
                        active: true
                    },
                    {
                        name: '冰淇淋',
                        path: '',
                        active: false
                    },
                    {
                        name: '咖啡下午茶',
                        path: '',
                        active: false
                    },
                    {
                        name: '常温蛋糕',
                        path: '',
                        active: false
                    },
                    {
                        name: '设计师礼品',
                        path: '',
                        active: false
                    }
                ],
                flavorList:[
                    {
                        name: '乳脂奶油',
                        path: '',
                        active: false
                    },
                    {
                        name: '慕斯',
                        path: 'analysis',
                        active: true
                    },
                    {
                        name: '乳酪',
                        path: '',
                        active: false
                    },
                    {
                        name: '巧克力',
                        path: '',
                        active: false
                    },
                    {
                        name: '坚果',
                        path: '',
                        active: false
                    },
                    {
                        name: '水果',
                        path: '',
                        active: false
                    },
                    {
                        name: '含酒精',
                        path: '',
                        active: false
                    },
                    {
                        name: '咖啡',
                        path: '',
                        active: false
                    },
                    {
                        name: '冰淇淋',
                        path: '',
                        active: false
                    }
                ],
                
            }
        }
    }
    </script>
    
    
    
    <style scope>
    .box-top{
        margin-top: 112px;
    }
    .pro-list-filter {
        font-size: 13px;
        margin-top: 25px;
        margin-bottom: 35px;
        width: 1200px;
        border-top: #f2f2f2 solid 1px;
        border-bottom: #f2f2f2 solid 1px;
        overflow: hidden;
        padding: 8px 0;
    }
    .pro-list-filter dl {
        line-height: 50px;
        overflow: hidden;
        height: 50px;
    }
    .pro-list-filter dl dt {
        color: #9B9B9B;
        float: left;
        margin:0 38px 0 13px;
    }
    .pro-list-filter dl dd {
        color: #9B9B9B;
        float: left;
        margin: 0 13px;
    }
    .pro-list-filter dl .active a {
        color: #BB9772;
    }
    </style>