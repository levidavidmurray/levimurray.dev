<template>
  <app-page>
    <div class="app-content top-hero">
      <img class="hero-image" src="../assets/images/looking-in-distance.jpeg" alt="">
      <project-gallery :projects="projects"/>
    </div>
  </app-page>
</template>

<script lang="ts">
import {defineComponent, ref, Ref} from 'vue';
import ProjectGallery from '@/components/ProjectGallery.vue';
import {mailOutline} from 'ionicons/icons';
import AppPage from '@/components/AppPage.vue';
import {ProjectService} from '@/lib/ProjectService';
import {ProjectResponse} from '@/lib/api/api';

export default defineComponent({
  name: 'Projects',

  setup() {

    const projects: Ref<ProjectResponse[]> = ref([]);
    ProjectService.fetchProjects()
      .then((p) => projects.value = p);

    // const projects: Ref<ProjectCard[]> = ref([
    //   ...dummyProjects,
    // ]);

    return {
      projects,
      mailOutline,
    }
  },

  components: {
    ProjectGallery,
    AppPage,
  },
});
</script>

<style scoped lang="scss">

.top-hero {
  position: relative;

  .intro {
    position: absolute;
    top: 90px;

    .bold {
      font-weight: bold;
    }

    .w {
      font-size: 84px;
    }

    .m {
      font-size: 64px;
    }

    .i {
      font-size: 64px;
    }

    .a {
      font-size: 32px;
      color: var(--ion-color-primary);
      background-color: white;
      padding: 2px 8px;
      font-weight: bold;
    }

  }

}

</style>
