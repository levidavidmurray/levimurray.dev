<template>
  <ion-card class="app-card" @click="openProjectModal" button>
    <img :src="project.thumbnail.link" />
    <ion-card-header>
      <ion-card-subtitle>{{ project.subtitle }}</ion-card-subtitle>
      <ion-card-title>{{ project.title }}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      {{ project.summary }}
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, modalController} from '@ionic/vue';
import ProjectModal from '@/components/ProjectModal.vue';
import {ProjectResponse} from '@/lib/api/api';

export default defineComponent({
  name: 'AppCard',
  props: {
    project: {
      type: Object as PropType<ProjectResponse>,
      required: true,
    }
  },

  methods: {
    async openProjectModal() {
      const modal = await modalController.create({
        component: ProjectModal,
        cssClass: 'app-modal',
        componentProps: {
          project: this.project,
        },
      });

      return modal.present();

    },
  },

  components: {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
  }
});
</script>

<style scoped lang="scss">

ion-card {
  --background: white;
}

</style>
