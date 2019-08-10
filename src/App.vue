<template>
    <div>
        <h1>{{ greeting }} {{ name }}!</h1>

        <input type="file" accept="image/*;capture=camera" @change.prevent="chooseFiles">
        <div v-if="file">
            <image-preview v-bind:file="file"></image-preview>
        </div>
    </div>
</template>

<script>
import ImagePreview from './ImagePreview.vue'

export default {
    components: { ImagePreview },
    data: function() {
        return {
            greeting: 'Hello,',
            name: 'Vue Component',
            file: null
        }
    },
    methods: {
        chooseFiles: function(event) {
            if (event.target && event.target.files.length > 0) {
                this.file = event.target.files[0];
            }
        }
    }
}
</script>
