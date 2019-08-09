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
            this.convert(this.file).then((data) => {
                this.dataUrl = data
            })
        },
        convert: function(file) {
            return new Promise( function(resolve, reject) {
                // file is not selected yet
                if (!file) {
                    resolve(null)
                }

                const fileReader = new FileReader()
                fileReader.onload = function () {
                    resolve(this.result)
                }
                fileReader.onerror = (err) => { reject(err) }
                fileReader.readAsDataURL(file)
            });
        }
    }
}
</script>