<template>
  <ion-content class="project">
    <ion-header class="p-header" ref="header">

      <div class="p-title">
        <h2>{{ project.title }}</h2>
        <h4>{{ project.subtitle }}</h4>
      </div>

      <div class="p-header-buttons">

        <a v-if="projectLink" class="p-link" :href="projectLink" target="_blank" :title="`Open ${projectLink}`">
          <ion-button>View</ion-button>
        </a>

        <github-icon-link class="github-icon-link"
                          :href="project.source_url" />
        <close-button @click="closeModal" />
      </div>
    </ion-header>

    <div class="ion-padding">
      <app-image-carousel :project="project" />

      <hr>

      <p class="description">{{ project.description }}</p>

      <hr>

      <footer class="ion-padding-vertical">
        <a v-if="project.project_url" :href="project.project_url">Project: {{ project.project_url }}</a>
        <a v-if="project.source_url" :href="project.source_url">Source: {{ project.source_url }}</a>
      </footer>
    </div>

  </ion-content>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {IonButton, IonContent, IonHeader, modalController} from '@ionic/vue';
import {closeOutline, enterOutline} from 'ionicons/icons';
import AppImageCarousel from '@/components/AppImageCarousel.vue';
import {ProjectResponse} from '@/lib/api/api';
import GithubIconLink from '@/components/IconLink/GithubIconLink.vue';
import CloseButton from '@/components/CloseButton.vue';

export default defineComponent({
  name: 'ProjectModal',

  props: {
    project: {
      type: Object as PropType<ProjectResponse>,
      required: true,
    },
  },

  setup() {

    const closeModal = async () => {
      await modalController.dismiss();
    };

    return {
      enterOutline,
      closeOutline,
      closeModal,
    }
  },

  data() {
    return {
      viewSourceOverride: false,
    };
  },

  mounted() {
    document.styleSheets[0].insertRule(`.p-header::before {--background-image: url(${this.project.thumbnail.link})}`, 0);
  },

  beforeUnmount() {
    document.styleSheets[0].deleteRule(0);
  },

  computed: {
    projectLink(): string {
      return this.project.project_url;
    },
  },

  components: {
    IonContent,
    IonHeader,
    IonButton,
    AppImageCarousel,
    GithubIconLink,
    CloseButton,
  },
});
</script>

<style scoped lang="scss">

.p-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 32px 16px;
  overflow: hidden;

  --background-image: none;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    filter: blur(6px) brightness(70%);
    background-size: cover;
    background-image: var(--background-image);
    transform: scale(1.2);
    z-index: -1;
  }

  .p-title {
    color: white;
    text-shadow: var(--text-shadow);
    pointer-events: none;

    h2 {
      margin: 0;
      font-weight: bold;
      font-size: 32px;
    }

    h4 {
      margin: 0;
      font-size: 14px;
      position: relative;
      top: 8px; left: 4px;
    }
  }

  .p-header-buttons {
    display: flex;
    align-items: center;

    .close-button {
      display: none;
    }

    .github-icon-link {
      margin-left: 16px;
      margin-right: 8px;
    }

    .p-link {
    }
  }
}

.project {
  .description {
    font-family: "Bitstream Charter", serif;
    white-space: pre-wrap;
    line-height: 1.7;
    font-size: 18px;
  }

  footer {
    font-size: 12px;
    padding-bottom: 24px;

    a {
      text-decoration: none;
      color: var(--color-bluish-gray);
      display: block;
      width: fit-content;

      &:hover {
        text-decoration: underline;
      }

      &:first-of-type {
        margin-bottom: 4px;
      }
    }
  }
}

@media only screen and (max-width: 864px) {

  .project {
    .p-header {
      .p-header-buttons {
        position: relative;
        left: 16px;

        .github-icon-link {
          display: none;
        }

        .close-button {
          display: unset;
        }
      }
    }
  }


}

</style>
