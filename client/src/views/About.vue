<template>
  <app-page>
    <div class="app-content">
      <img class="hero-image" src="../assets/images/levi-bw.jpeg" alt="">
    </div>
  </app-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppPage from '../components/AppPage.vue';

export default defineComponent({
  name: 'About',
  components: {
    AppPage,
  },
});
</script>

<style scoped>

</style>
