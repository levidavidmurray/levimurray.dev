<template>
  <div class="project-gallery">
    <template v-if="loader.isLoading">
      <app-card v-for="n in loader.loadingCount" :key="`load-card-${n}`" loading />
    </template>
    <template v-else>
      <app-card v-for="project in projects" :key="project.id" :project="project"/>
    </template>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, toRefs} from 'vue';
import AppCard from '@/components/AppCard.vue';
import {ProjectResponse} from '@/lib/api/api';
import {ProjectGalleryLoaderOpts} from '@/components/types';

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
    const {loader, projects} = toRefs(props);
    const hasProjects = computed(() => projects.value.length > 0);

    return {
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
