<template>
  <ion-content class="ion-padding project">

    <div class="p-header">
      <h2>{{ project.title }}</h2>

      <div class="p-header-buttons">
        <a class="p-link" :href="project.links.project" target="_blank">
          View Project
          <ion-icon :icon="enterOutline"/>
        </a>
        <app-button :route="project.links.source"
                    :icon="logoGithub"
                    color="dark">
          Source
        </app-button>
      </div>
    </div>

    <app-image-carousel :images="project.images" :project="project" />

    <p class="description">{{ project.description }}</p>

  </ion-content>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {IonContent, IonIcon} from '@ionic/vue';
import {ProjectCard} from '@/lib/ProjectCard';
import AppButton from '@/components/AppButton.vue';
import {enterOutline, logoGithub} from 'ionicons/icons';
import AppImageCarousel from '@/components/AppImageCarousel.vue';

export default defineComponent({
  name: 'ProjectModal',

  props: {
    project: {
      type: Object as PropType<ProjectCard>,
      required: true,
    },
  },

  setup() {
    return {
      logoGithub,
      enterOutline,
    }
  },

  components: {
    IonContent,
    IonIcon,
    AppButton,
    AppImageCarousel,
  },
});
</script>

<style scoped lang="scss">

.project {

  .p-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      margin: 0;
      font-weight: bold;
    }

    .p-header-buttons {
      display: flex;
      align-items: center;

      .p-link {
        display: flex;
        align-items: center;
        font-size: 13px;
        margin-right: 24px;

        ion-icon {
          font-size: 20px;
        }
      }
    }
  }

  .description {
    white-space: pre-wrap;
    line-height: 1.7;
    font-size: 16px;
  }
}

</style>
