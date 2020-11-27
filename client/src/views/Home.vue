<template>
  <app-page>
    <div class="app-content top-hero">
      <img src="../assets/images/outline.png" alt="">
      <div class="intro">
        <h1 class="w bold">What's up?</h1>
        <h2 class="m">My name's <span class="bold">Levi</span></h2>
        <h2 class="i">I'm <span class="bold">23</span></h2>
        <h4 class="a">and I never fucking learned how to code</h4>
      </div>
    </div>
    <card-container :projects="projects"/>
  </app-page>
</template>

<script lang="ts">
import {defineComponent, ref, Ref} from 'vue';
import {ProjectCard} from '@/lib/ProjectCard';
import CardContainer from '@/components/CardContainer.vue';
import {mailOutline} from 'ionicons/icons';
import AppPage from '@/components/AppPage.vue';
import {dummyProjects} from '@/lib/DummyData';

export default defineComponent({
  name: 'Home',

  setup() {
    const projects: Ref<ProjectCard[]> = ref([
      ...dummyProjects,
    ]);

    return {
      projects,
      mailOutline,
    }
  },

  components: {
    CardContainer,
    AppPage,
  },
});
</script>

<style scoped lang="scss">

.top-hero {
  position: relative;

  img {
    display: block;
    margin: 0 auto;
    width: 90%;
  }

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
