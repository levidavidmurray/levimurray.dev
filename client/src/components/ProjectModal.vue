<template>
  <ion-content class="ion-padding project">

    <h1>{{ project.title }}</h1>
    <p class="description">{{ project.description }}</p>

  </ion-content>
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
    IonContent,
  },
});
</script>

<style scoped lang="scss">

.project {
  .description {
    white-space: pre-wrap;
    line-height: 1.7;
    font-size: 16px;
  }
}

</style>
