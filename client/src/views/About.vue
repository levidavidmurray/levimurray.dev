<template>
  <app-page :hero="hero">
    <div class="app-content">
    </div>
  </app-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppPage from '../components/AppPage.vue';
import {AppImages} from '@/lib/AppImages';

export default defineComponent({
  name: 'About',

  setup() {
    return {
      hero: AppImages.AboutMeHero,
    };
  },

  components: {
    AppPage,
  },
});
</script>

<style scoped>

</style>
