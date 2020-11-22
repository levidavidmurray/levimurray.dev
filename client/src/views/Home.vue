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

export default defineComponent({
  name: 'Home',

  setup() {
    const projects: Ref<ProjectCard[]> = ref([
      {
        id: 'typetris-1',
        image: require('@/assets/images/typetris.png'),
        title: 'Typetris',
        subtitle: 'The tetris typing game!',
        description: 'Keep close to Nature\'s heart... and break clear away, once in awhile,\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.',
      },
      {
        id: 'airands-1',
        image: require('@/assets/images/airands.png'),
        title: 'Airands',
        subtitle: 'Local delivery app for iOS & android',
        description: 'Keep close to Nature\'s heart... and break clear away, once in awhile,\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.',
      },
      {
        id: 'onlyeve-1',
        image: require('@/assets/images/onlyeve.jpg'),
        title: 'OnlyEve',
        subtitle: 'Host your lewd newds here!',
        description: 'Keep close to Nature\'s heart... and break clear away, once in awhile,\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.',
      },
      {
        id: 'schedule-1',
        image: require('@/assets/images/schedule.png'),
        title: 'Schedule Demo',
        subtitle: 'Schedule UI design implementation',
        description: 'Keep close to Nature\'s heart... and break clear away, once in awhile,\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.',
      },
      {
        id: 'phn-1',
        image: require('@/assets/images/phn.png'),
        title: 'PHN Generator',
        subtitle: 'Generate valid BC & Ontario PHNs',
        description: 'Keep close to Nature\'s heart... and break clear away, once in awhile,\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.',
      },
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
    margin-top: 32px;
    width: 80%;
  }

  .intro {
    position: absolute;
    top: 0;

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
