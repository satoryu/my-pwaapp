<template>
    <div>
        <video
            autoplay
            class="preview"
        ></video>
    </div>
</template>

<script>
export default {
    mounted: function() {
        if ('getUserMedia' in navigator) {
            navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((mediaStream) => {
                const video = this.$el.getElementsByTagName('video')[0]
                video.srcObject = mediaStream
            }).catch(function(e) {
                console.log('Rejected', e)
            })
        }
    },
    data: function () {
        return {
            videoSourceObject: null
        }
    }

}
</script>