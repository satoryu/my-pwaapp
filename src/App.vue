<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>mdi-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
    <!-- <div>
        <h1>{{ greeting }} {{ name }}!</h1>

        <input type="file" accept="image/*;capture=camera" @change.prevent="chooseFiles">
        <div v-if="file">
            <image-preview v-bind:file="file"></image-preview>
        </div>
        <video-preview></video-preview>
    </div> -->
</template>

<script>
import ImagePreview from './ImagePreview.vue'
import VideoPreview from './VideoPreview.vue'

export default {
    components: { ImagePreview, VideoPreview },
    data: function() {
        return {
            greeting: 'Hello,',
            name: 'Vue Component',
            file: null,
            drawer: true
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
