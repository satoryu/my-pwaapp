<template>
    <div>
        <video
            width="600px"
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
        if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
                const video = this.$el.getElementsByTagName('video')[0]
                video.srcObject = mediaStream
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