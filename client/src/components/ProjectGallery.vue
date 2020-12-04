<template>
  <div class="project-gallery">
    <app-card v-for="project in projects" :key="project.id" :project="project"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import AppCard from '@/components/AppCard.vue';
import {ProjectResponse} from '@/lib/api/api';

export default defineComponent({
  name: 'ProjectGallery',
  props: {
    projects: {
      type: Array as PropType<ProjectResponse[]>,
      required: true,
    },
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
