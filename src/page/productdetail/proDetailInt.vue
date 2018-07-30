<template>
    <div class="details-introduction" >
        <img v-for="item in imgMap" :src="item.url">        
    </div>
</template>



<script>
export default {
    data () {
        return {
            imgMap: [
                {url: require("../../assets/product/lg/footer/1/0a53805a216154ba9e08f751df6b59d2.jpg")},
                {url: require("../../assets/product/lg/footer/1/42a4c679ef4074ace31bd3b4a14c562b.jpg")},
                {url: require("../../assets/product/lg/footer/1/d3e9707c3cf54e7ade900755a5f62136.jpg")},
                {url: require("../../assets/product/lg/footer/1/1dd720b3e0c977a61a95c7a32c43331e.jpg")},
                {url: require("../../assets/product/lg/footer/1/1aaf9363e9aefd4c53c3559ac1644fb9.jpg")},
            ]
        }
    }
}
</script>


<style scope>
.details-introduction {
    margin-top: 12px;
    height: auto;
}
.details-introduction img {
    text-align: left;
    display: block;
    max-width: 100%;
}
</style>