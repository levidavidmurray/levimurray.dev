<template>
  <ion-page>
    <ion-content class="ion-padding">

      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {IonContent, IonPage} from '@ionic/vue';
import {ProjectCard} from '@/lib/ProjectCard';

export default defineComponent({
  name: 'ProjectModal',

  props: {
    project: {
      type: Object as PropType<ProjectCard>,
      required: true,
    },
  },

  components: {
    IonPage,
    IonContent,
  },
});
</script>

<style scoped lang="scss">

</style>
