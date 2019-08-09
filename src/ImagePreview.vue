<template>
    <div class="preview">
        <img v-bind:src="dataUrl" alt="">
    </div>
</template>

<script>
import 'core-js/stable'
import 'regenerator-runtime/runtime'

export default {
    props: [ 'file' ],
    data: function() {
        return {
            dataUrl: null
        }
    },
    created: function() {
        this.loadFileAsDataURL()
    },
    watch: {
        file: function() {
            this.loadFileAsDataURL()
        }
    },
    methods: {
        loadFileAsDataURL: function() {
            if (!file) {
                return
            }

            const fileReader = new FileReader()
            fileReader.onload = function (event) {
                this.dataUrl = event.target.result
            }
            fileReader.readAsDataURL(file)
        }
    }
}
</script>