<template>
  <div class="project-gallery">
    <template v-if="loader.isLoading">
      <app-card v-for="n in loader.loadingCount" :key="`load-card-${n}`" loading />
    </template>
    <template v-else>
      <app-card v-for="project in projects" @click="openProjectModal(project)" :key="project.id" :project="project"/>
    </template>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, toRefs} from 'vue';
import AppCard from '@/components/AppCard.vue';
import {ProjectResponse} from '@/lib/api/api';
import {ProjectGalleryLoaderOpts} from '@/components/types';
import {modalController} from '@ionic/vue';
import ProjectModal from '@/components/ProjectModal.vue';

export default defineComponent({
  name: 'ProjectGallery',
  props: {
    projects: {
      type: Array as PropType<ProjectResponse[]>,
      required: true,
    },
    loader: {
      type: Object as PropType<ProjectGalleryLoaderOpts>,
      required: true,
    },
  },

  setup(props) {
    const {projects} = toRefs(props);
    const hasProjects = computed(() => projects.value.length > 0);

    // creating a new ion-modal while an existing one is still dismissing causes
    // the modal contents to break
    let canOpenProject = true;
    let debouncedProject: ProjectResponse | null = null;

    const openProjectModal = async (project: ProjectResponse) => {
      if (canOpenProject) {
        canOpenProject = false;

        const modal = await modalController.create({
          component: ProjectModal,
          cssClass: 'app-modal',
          componentProps: { project },
        });

        modal.onDidDismiss().then(() => {
          canOpenProject = true;

          // Modal has dismissed—open debounced project if exists
          if (debouncedProject) {
            openProjectModal(debouncedProject).then(() => {
              debouncedProject = null;
            });
          }
        });

        return await modal.present();
      } else {
        // Project was opened while modal was dismissing—open after modal dismissal.
        debouncedProject = project;
      }
    };

    return {
      openProjectModal,
      hasProjects,
    };
  },

  components: {AppCard},
});
</script>

<style scoped lang="scss">

.project-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  margin: 0 auto;

  @media only screen and (max-width: 1200px) {
    width: 780px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 812px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }

  @media only screen and (max-width: 422px) {
    .app-card {
      width: 100%;
    }
  }

  .app-card {
    object-fit: cover;
    justify-self: center;
  }
}

</style>
