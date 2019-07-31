<template>
    <div class="preview">
        <img v-bind:src="dataUrl" alt="">
    </div>
</template>

<script>
export default {
    props: [ 'file' ],
    computed: {
        dataUrl: function() {
            return URL.createObjectURL(this.file)
        }
    }
}
</script>

