<template>
  <app-page :hero="hero">
    <template #top-content>
      <div class="socials">
        <icon-link :href="URL.linkedin" :icon="logoLinkedin" active-color="var(--social-color-li)" />
        <github-icon-link />
      </div>
    </template>
    <div class="app-content">
      <project-gallery v-if="!shouldShowDialogue" :loader="loaderOpts" :projects="projects"/>
      <meta-dialogue v-else />
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
import {Config} from '@/lib/config';
import GithubIconLink from '@/components/IconLink/GithubIconLink.vue';
import IconLink from '@/components/IconLink/IconLink.vue';

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
      hero: AppImages.ProjectsHero as HTMLImageElement,
      URL: Config.URL,
    };
  },

  components: {
    IconLink,
    GithubIconLink,
    ProjectGallery,
    AppPage,
    MetaDialogue,
  },
});
</script>

<style scoped lang="scss">

.socials {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;

  .icon-link {
    margin-right: 16px;
  }
}

</style>
