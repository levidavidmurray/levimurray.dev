<template>
  <app-page>
    <div class="app-content top-hero">
      <img class="hero-image" src="../assets/images/looking-in-distance.jpeg" alt="">
      <project-gallery v-if="!shouldShowDialogue" :loader="loaderOpts" :projects="projects" />
      <meta-dialogue v-else />
    </div>
  </app-page>
</template>

<script lang="ts">
import {defineComponent, ref, reactive, computed, Ref, UnwrapRef} from 'vue';
import ProjectGallery from '@/components/ProjectGallery.vue';
import {mailOutline} from 'ionicons/icons';
import AppPage from '@/components/AppPage.vue';
import {ProjectService} from '@/lib/ProjectService';
import {ProjectResponse} from '@/lib/api/api';
import MetaDialogue from '@/components/MetaDialogue.vue';
import {ProjectGalleryLoaderOpts} from '@/components/types';

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
      projects,
      mailOutline,
      error,
      shouldShowDialogue,
      loaderOpts,
    }
  },

  components: {
    ProjectGallery,
    AppPage,
    MetaDialogue,
  },
});
</script>

<style scoped lang="scss">

</style>
