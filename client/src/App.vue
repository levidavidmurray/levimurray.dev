<template>
  <ion-app>
    <transition name="fade">
      <app-preloader v-if="showPreloader" @exit="handlePreloaderExit" :loading="isLoading"/>
    </transition>
    <ion-router-outlet v-if="!showPreloader" :animated="false"/>
  </ion-app>
</template>

<script lang="ts">
import {IonApp, IonRouterOutlet} from '@ionic/vue';
import {defineComponent} from 'vue';
import AppPreloader from '@/components/AppPreloader.vue';
import {preloadImagesAsync} from '@/lib/AppImages';

export default defineComponent({
  name: 'App',

  data() {
    return {
      isLoading: true,
      showPreloader: true,
    };
  },

  mounted() {
    preloadImagesAsync.finally(() => this.isLoading = false);
  },

  methods: {
    handlePreloaderExit() {
      this.showPreloader = false;
    },
  },

  components: {
    IonApp,
    IonRouterOutlet,
    AppPreloader,
  },
});
</script>

<style lang="scss">

@import './theme/global';

.hover-scale {
  --scale-factor: 1.025;
  transition: transform 0.3s ease;
  z-index: 1;

  &:hover {
    transform: scale(var(--scale-factor));
    z-index: 2;
  }
}

.app-content {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 72px;

  .hero-container {
    margin: 0 auto;
    width: 100%;
    z-index: -1;
    position: relative;
    top: -68px;

    .hero-image {
      width: 100%;

      &.abs {
        position: absolute;
      }
    }
  }

}

</style>
