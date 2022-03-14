<template>
  <!-- App.vue -->

  <v-app>
    <Navbar />
    <!-- Sizes your content based upon application components -->
    <v-main class="mx-auto">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },

  data: () => ({
    //
  }),
}
</script>
