<template>
  <ion-app>
    <ion-router-outlet :animated="false" />
  </ion-app>
</template>

<script lang="ts">
import {IonApp, IonRouterOutlet} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',

  beforeRouteUpdate(to, from, next) {
    console.log(to);
    next();
  },

  components: {
    IonApp,
    IonRouterOutlet,
  }
});
</script>

<style lang="scss">

@import './theme/global';

.app-content {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-bottom: 72px;

  .hover-scale {
    --scale-factor: 1.025;
    transition: transform 0.3s ease;
    z-index: 1;

    &:hover {
      transform: scale(var(--scale-factor));
      z-index: 2;
    }
  }

  img.hero-image {

    display: block;
    margin: 0 auto;
    width: 100%;
    z-index: -1;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    position: relative;
    top: -68px;

    &.abs {
      position: absolute;
    }
  }
}

</style>
