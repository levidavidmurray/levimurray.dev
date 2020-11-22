<template>
  <ion-card class="app-card" @click="openProjectModal" button>
    <img :src="project.image" />
    <ion-card-header>
      <ion-card-subtitle>{{ project.subtitle }}</ion-card-subtitle>
      <ion-card-title>{{ project.title }}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      {{ project.description }}
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, modalController} from '@ionic/vue';
import {ProjectCard} from '@/lib/ProjectCard';
import ProjectModal from '@/components/ProjectModal.vue';

export default defineComponent({
  name: 'AppCard',
  props: {
    project: {
      type: Object as PropType<ProjectCard>,
      required: true,
    }
  },

  setup(props) {
    console.log(props.project);
    const openProjectModal = async () => {
      const modal = await modalController.create({
        component: ProjectModal,
        componentProps: {
          project: props.project,
        },
      });

      return modal.present();
    };

    return {
      openProjectModal,
    };
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
