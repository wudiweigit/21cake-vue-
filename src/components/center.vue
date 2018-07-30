<template>
    <div>
        <myslideShow :slides="slides"></myslideShow>
        <myhomeContent></myhomeContent>
    </div>    
</template>

<script>
import myslideShow from '@/components/slideShow'
import myhomeContent from '@/components/homeContent'
export default {
    components: {
        myslideShow,
        myhomeContent
    },
    data () {
        return {
            slides: [
                {
                    src: require('../assets/carousel/1.jpg'),
                    href: ''
                },
                {
                    src: require('../assets/carousel/2.jpg'),
                    href: ''
                },
                {
                    src: require('../assets/carousel/3.jpg'),
                    href: ''
                },
                {
                    src: require('../assets/carousel/4.jpg'),
                    href: ''
                }
            ]
        }
    },
}
</script>