<template>
  <app-page :hero="hero" invert>
    <div class="app-content">
    </div>
  </app-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppPage from '../components/AppPage.vue';
import {AppImages} from '@/lib/AppImages';

export default defineComponent({
  name: "Contact",

  setup() {

    return {
      hero: AppImages.ContactHero,
    };
  },

  components: {
    AppPage,
  }
});
</script>

<style scoped>

</style>
