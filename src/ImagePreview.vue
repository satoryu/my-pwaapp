<template>
    <div class="preview">
        <input type="file" accept="image/*;capture=camera" @change.prevent="chooseFiles">

        <div v-if="file">
            <img v-bind:src="dataUrl" alt="">

            <div @click.prevent="uploadPhoto">
                <v-btn>
                    <v-icon>mdi-upload</v-icon>
                    Upload
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import { postPhoto } from '@/lib/photo-api'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

export default {
    data: function() {
        return {
            file: null,
            dataUrl: null
        }
    },
    watch: {
        file: function() {
            this.loadFileAsDataURL()
        }
    },
    methods: {
        uploadPhoto: function() {
            postPhoto(this.file.name, this.dataUrl)
        },
        loadFileAsDataURL: function() {
            if (!this.file) {
                return
            }

            const fileReader = new FileReader()
            fileReader.onload = (event) => {
                this.dataUrl = event.target.result
            }
            fileReader.readAsDataURL(this.file)
        },
        chooseFiles: function(event) {
            if (event.target && event.target.files.length > 0) {
                this.file = event.target.files[0];
            }
        }
    }
}
</script>