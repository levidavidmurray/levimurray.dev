<template>
  <ion-card :class="{loading, 'app-card': true, 'hover-scale': true}" @click="openProjectModal" button>
    <template v-if="loading">
      <ion-skeleton-text animated style="height: 190px; margin: 0;" />
      <ion-card-header>
        <ion-skeleton-text animated style="width: 90%; line-height: 12px; margin-bottom: 8px;" />
        <ion-skeleton-text animated style="width: 65%; line-height: 32px;" />
      </ion-card-header>
      <ion-card-content>
        <ion-skeleton-text animated />
        <ion-skeleton-text animated />
        <ion-skeleton-text animated />
      </ion-card-content>
    </template>
    <template v-else-if="project">
      <img class="card-thumbnail" :src="project.thumbnail.link" />
      <ion-card-header>
        <ion-card-subtitle>{{ project.subtitle }}</ion-card-subtitle>
        <ion-card-title>{{ project.title }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        {{ project.summary }}
      </ion-card-content>
    </template>
    <div class="alert" v-else>
      <ion-icon :icon="alertCircleOutline"></ion-icon>
      <h4>Error loading data</h4>
    </div>
  </ion-card>
</template>

<script lang="ts">
import {defineComponent, PropType, toRefs} from 'vue';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  modalController,
  IonSkeletonText,
  IonIcon,
} from '@ionic/vue';
import ProjectModal from '@/components/ProjectModal.vue';
import {ProjectResponse} from '@/lib/api/api';
import {alertCircleOutline} from 'ionicons/icons';

export default defineComponent({
  name: 'AppCard',

  props: {
    project: {
      type: Object as PropType<ProjectResponse>,
    },
    loading: {
      type: Boolean,
    },
  },

  setup(props) {
    const {project} = toRefs(props);

    const openProjectModal = async () => {
      if (project?.value) {
        const modal = await modalController.create({
          component: ProjectModal,
          cssClass: 'app-modal',
          componentProps: {
            project: project.value,
          },
        });

        return modal.present();
      }
    };

    return {
      openProjectModal,
      alertCircleOutline,
    }
  },

  components: {
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonSkeletonText,
  }
});
</script>

<style scoped lang="scss">

.app-card {

  --height__card: 370px;
  --height__card_image: 190px;
  --background: white;

  margin: 0;
  width: 375px;
  height: var(--height__card);
  position: relative;

  &.loading {
    .card-thumbnail {
      background: lightgrey;
    }

    ion-card-content {
      ion-skeleton-text {
        line-height: 14px;
        margin-bottom: 6px;
      }
    }
  }

  .card-thumbnail {
    height: var(--height__card_image);
    width: 100%;
  }

  .alert {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ion-icon {
      font-size: 156px;
      opacity: 0.25;
    }
  }
}

</style>
