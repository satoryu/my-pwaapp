<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        <input type="file" accept="image/*;capture=camera" @change.prevent="chooseFiles">
        <div v-if="file">
            <image-preview v-bind:file="file"></image-preview>
        </div>
        <video-preview></video-preview>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
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
