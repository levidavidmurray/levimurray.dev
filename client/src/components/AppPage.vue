<template>
  <ion-page>
    <ion-content class="ion-padding">
      <app-header></app-header>
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
  components: {
    IonPage,
    IonContent,
    AppHeader,
  },
});
</script>

<style scoped>

</style>
