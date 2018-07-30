<template>
    <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
        <transition-group name="image" >
            <div class=slide-box v-show="index === mark" v-for="(item, index) in slides" :key="index">
                <a :href="slides[mark].href">
                    <img :src="slides[mark].src" >
                </a>
            </div>
        </transition-group>
        <ul>
            <li class="slideli" :class="{ 'activeli':index===mark }" v-for="(item, index) in slides" :key="index" @click="change(index)"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MyslideShow',
    props: {
        slides: {
            type: Array,
            default: []
        },
        inv: {
            type: Number,
            default: 2500
        }
    },
    data () {
        return {
           mark: 0,
           timer: null,
        }
    },
    methods: {  
    autoPlay () {  
        this.mark++;  
        if (this.mark === 4) {  
            this.mark = 0  
        }  
    },  
    play () {  
        this.timer = setInterval(this.autoPlay, this.inv)  
    },  
    change (i) {  
        this.mark = i  
    },  
    stop () {  
        clearInterval(this.timer)  
    },  
    move () {  
        this.timer = setInterval(this.autoPlay, this.inv)  
    }  
  },  
  created () {  
    this.play() 
  }  
}  
</script>


<style scope>

.slide {
    position: relative;
    width: 100%;
    height: 480px;
}
.slide-box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 480px;
}
.slide-box a img{ 
    width: 100%;
    height: 480px;
    display: block;
}
.slide ul {
    position: absolute;
    bottom: 24px;
    left: 50%;
    overflow: hidden;
    z-index: 5;
    list-style: none;
    height: 11px;
    width: 120px;
    margin-left: -60px;
}
.slideli {
    background: url('../assets/icon/Oval.png') no-repeat;
    border-radius: 50%;
    float: left;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 1px 0px;
    width: 10px;
    height: 10px;
    margin-right: 5px;
    margin-left: 5px;
}
.activeli {
    background: url('../assets/icon/Rectangle.png') no-repeat;
    border-radius: 50%;
}
</style>