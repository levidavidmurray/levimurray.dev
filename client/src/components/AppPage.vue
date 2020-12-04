<template>
  <ion-page>
    <ion-content class="ion-padding">
      <app-header :invert="invert"></app-header>
      <slot></slot>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IonContent, IonPage} from '@ionic/vue';
import AppHeader from '@/components/AppHeader.vue';

export default defineComponent({
  name: 'AppPage',

  props: {
    invert: {
      type: Boolean,
    },
  },

  components: {
    IonPage,
    IonContent,
    AppHeader,
  },
});
</script>

<style scoped>

</style>
