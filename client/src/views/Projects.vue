<template>
  <app-page :hero="hero">
    <template #top-content>
      <div class="socials">
        <a :href="URL.linkedin" title="Levi Murray on LinkedIn" target="_blank" class="li">
          <ion-icon :icon="logoLinkedin"></ion-icon>
          <div class="bg-fill"></div>
        </a>
        <a :href="URL.github" title="Levi Murray on GitHub" target="_blank" class="gh">
          <ion-icon :icon="logoGithub"></ion-icon>
          <div class="bg-fill"></div>
        </a>
      </div>
    </template>
    <div class="app-content">
      <project-gallery v-if="!shouldShowDialogue" :loader="loaderOpts" :projects="projects"/>
      <meta-dialogue v-else/>
    </div>
  </app-page>
</template>

<script lang="ts">
import {defineComponent, ref, reactive, computed, Ref, UnwrapRef} from 'vue';
import ProjectGallery from '@/components/ProjectGallery.vue';
import {logoGithub, logoLinkedin, mailOutline} from 'ionicons/icons';
import AppPage from '@/components/AppPage.vue';
import {ProjectService} from '@/lib/ProjectService';
import {ProjectResponse} from '@/lib/api/api';
import MetaDialogue from '@/components/MetaDialogue.vue';
import {ProjectGalleryLoaderOpts} from '@/components/types';
import {AppImages} from '@/lib/AppImages';
import {IonIcon} from '@ionic/vue';
import {Config} from '@/lib/config';

export default defineComponent({
  name: 'Projects',

  setup() {

    /** Reactive Variables */
    const projects: Ref<ProjectResponse[]> = ref([]);
    const error: Ref<string | null> = ref(null);
    const loaderOpts: UnwrapRef<ProjectGalleryLoaderOpts> = reactive({isLoading: true, loadingCount: 6});

    /** Computed */
        // Show meta-dialogue if error when fetching projects, or if loading is complete and no projects exist
    const shouldShowDialogue = computed(() => {
          return Boolean(error.value) || (!loaderOpts.isLoading && projects.value.length === 0);
        });

    ProjectService.fetchProjects()
        .then((p) => projects.value = p)
        .catch((err) => error.value = err)
        .finally(() => loaderOpts.isLoading = false);

    return {
      mailOutline,
      logoLinkedin,
      logoGithub,
      projects,
      error,
      shouldShowDialogue,
      loaderOpts,
      hero: AppImages.ProjectsHero,
      URL: Config.URL,
    };
  },

  mounted() {
    console.log(AppImages);
  },

  components: {
    ProjectGallery,
    AppPage,
    MetaDialogue,
    IonIcon,
  },
});
</script>

<style scoped lang="scss">

.socials {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;

  a {
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    --color: white;

    .bg-fill {
      position: absolute;
      width: 80%;
      height: 80%;
      background: white;
      z-index: -1;
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.08s ease;
    }

    &:hover {
      .bg-fill {
        opacity: 1;
      }

      &.li {
        --color: #0073b1;
      }

      &.gh {
        --color: #24292e;
      }

      ion-icon {
        filter: none;
      }
    }


    ion-icon {
      color: var(--color);
      font-size: 32px;
      transition: all 0.08s ease;
      filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.75));
    }

  }
}

</style>
