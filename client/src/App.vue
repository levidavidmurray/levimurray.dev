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
}

</style>
