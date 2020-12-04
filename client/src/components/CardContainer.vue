<template>
  <div class="row">
    <div class="column">
      <app-card v-for="project in sortedProjects[0]" :key="project.id" :project="project">

      </app-card>
    </div>
    <div class="column">
      <app-card v-for="project in sortedProjects[1]" :key="project.id" :project="project">

      </app-card>
    </div>
    <div class="column">
      <app-card v-for="project in sortedProjects[2]" :key="project.id" :project="project">

      </app-card>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import AppCard from '@/components/AppCard.vue';
import {ProjectCard} from '@/lib/ProjectCard';
import {ProjectResponse} from '@/lib/api/api';

const NUM_OF_COLUMNS = 3;

export default defineComponent({
  name: 'CardContainer',
  props: {
    projects: {
      type: Array as PropType<ProjectResponse[]>,
      required: true,
    }
  },

  computed: {
    sortedProjects() {
      const sorted: ProjectResponse[][] = [];
      let sortIndex = 0;

      for (let i = 0; i < this.projects.length; i++) {
        if (!sorted[sortIndex]) {
          sorted[sortIndex] = [];
        }

        sorted[sortIndex].push(this.projects[i]);

        const isLastColumn = sortIndex >= NUM_OF_COLUMNS - 1;
        sortIndex = isLastColumn ? 0 : sortIndex+1
      }

      return sorted;
    }
  },
  components: {AppCard}
});
</script>

<style scoped lang="scss">
  .row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
  }

  .column {
    flex: 33.33%;
    max-width: 384px;
    min-width: 384px;
    padding: 0 4px;

    .app-card {
      vertical-align: middle;
      width: 100%;
      margin: 16px;
    }
  }

  @media screen and (max-width: 1180px) {
    .row {
      max-width: 780px;
    }
  }


  @media screen and (max-width: 900px) {
    .row {
      max-width: 100%;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .column {
      }
    }
  }

  @media screen and (max-width: 500px) {
    .column {
      max-width: 100%;
      min-width: unset;

      .app-card {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }

</style>
