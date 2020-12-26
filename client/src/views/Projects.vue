<template>
  <app-page :hero="hero">
    <template #top-content>
      <header class="site-header">
        <h1>Levi Murray</h1>
      </header>
      <div class="socials">
        <email-icon-link />
        <linkedin-icon-link />
        <github-icon-link />
      </div>
    </template>
    <content-section title="Projects">
      <project-gallery v-if="!shouldShowDialogue" :loader="loaderOpts" :projects="projects"/>
      <meta-dialogue v-else />
    </content-section>
    <content-section title="About Me">
      <expandable-content>
        <about />
      </expandable-content>
    </content-section>
    <content-section>
      <div class="split-content">
        <content-section title="Resume">
          <resume />
        </content-section>
        <content-section title="Contact">
          <contact />
        </content-section>
    </div>
    </content-section>
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
import About from './About.vue';
import Resume from './Resume.vue';
import Contact from './Contact.vue';
import GithubIconLink from '@/components/IconLink/GithubIconLink.vue';
import LinkedinIconLink from '@/components/IconLink/LinkedinIconLink.vue';
import EmailIconLink from '@/components/IconLink/EmailIconLink.vue';
import ContentSection from '@/components/ContentSection.vue';
import ExpandableContent from '@/components/ExpandableContent.vue';

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
    GithubIconLink,
    LinkedinIconLink,
    EmailIconLink,
    ProjectGallery,
    AppPage,
    MetaDialogue,
    About,
    Resume,
    Contact,
    ContentSection,
    ExpandableContent,
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

.site-header {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  h1 {
    font-family: var(--display-font);
    font-size: 2em;
    margin-left: 16px;
    margin-bottom: 12px;
    color: white;
    font-weight: bold;
  }
}

.split-content {
  display: flex;
}

@media only screen and (max-width: 850px) {
  .split-content {
    display: block;
  }
}

</style>
