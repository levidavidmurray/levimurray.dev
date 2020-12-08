<template>
  <ion-header class="ion-padding p-header" ref="header">
    <a :href="projectLink" target="_blank" :title="`Open ${projectLink}`" :class="{override: viewSourceOverride, 'overlay-url': true}">
      {{ projectLinkText }}
    </a>

    <div class="p-title">
      <h2>{{ project.title }}</h2>
      <h4>{{ project.subtitle }}</h4>
    </div>

    <div class="p-header-buttons">
      <github-icon-link :href="project.source_url"
                        @mouseover="viewSourceOverride = true"
                        @mouseout="viewSourceOverride = false" />
    </div>
  </ion-header>
  <ion-content class="ion-padding project">
    <app-image-carousel :project="project" />

    <hr>

    <p class="description">{{ project.description }}</p>

    <hr>

    <footer class="ion-padding-vertical">
        <a v-if="project.project_url" :href="project.project_url">Project: {{ project.project_url }}</a>
        <a v-if="project.source_url" :href="project.source_url">Source: {{ project.source_url }}</a>
    </footer>

  </ion-content>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {IonContent, IonHeader} from '@ionic/vue';
import {enterOutline} from 'ionicons/icons';
import AppImageCarousel from '@/components/AppImageCarousel.vue';
import {ProjectResponse} from '@/lib/api/api';
import GithubIconLink from '@/components/IconLink/GithubIconLink.vue';

export default defineComponent({
  name: 'ProjectModal',

  props: {
    project: {
      type: Object as PropType<ProjectResponse>,
      required: true,
    },
  },

  setup() {
    return {
      enterOutline,
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
    viewSource(): boolean {
      return !this.project.project_url || this.viewSourceOverride;
    },

    projectLink(): string {
      return this.viewSource ? this.project.source_url : this.project.project_url;
    },

    projectLinkText(): string {
      return this.viewSource ? "View Source" : "View Project";
    }
  },

  components: {
    IonContent,
    IonHeader,
    AppImageCarousel,
    GithubIconLink,
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
    filter: blur(8px) brightness(80%);
    background-size: cover;
    background-image: var(--background-image);
    transform: scale(1.2);
    z-index: -1;
  }

  &:hover {
    &::before {
      filter: brightness(80%);
    }

    .p-title {
      filter: blur(2px);
    }
  }

  .overlay-url {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 24px;
    text-shadow: var(--text-shadow);
    transition: all 0.15s ease;
    opacity: 0;
    left: 0; top: 0;

    &:hover, &.override {
      opacity: 1;
      background: rgba(0,0,0,0.5);
    }
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

</style>
