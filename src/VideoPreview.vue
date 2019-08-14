<template>
    <div>
        <video
            autoplay
            playsinline
            class="preview"
        ></video>
        <div
            v-if="errorMessage"
            id="error-message"
        >
            {{ errorMessage }}
        </div>
    </div>
</template>

<script>
export default {
    mounted: function() {
        if ('getUserMedia' in navigator) {
            navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
                const video = this.$el.getElementsByTagName('video')[0]
                video.srcObject = mediaStream
                video.onloadedmetadata = () => {
                    video.play()
                }
            }).catch((e) => {
                console.log('Rejected', e)
                this.errorMessage = `${e.name} ${e.message}`
            })
        }
    },
    data: function () {
        return {
            errorMessage: null
        }
    }

}
</script>