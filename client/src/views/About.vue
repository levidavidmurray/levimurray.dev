<template>
  <app-page :hero="hero">
    <div class="app-content">
      <div class="about-me reader-text" v-html="siteData">

      </div>
    </div>
  </app-page>
</template>

<script lang="ts">
import {defineComponent, ref, Ref} from 'vue';
import AppPage from '../components/AppPage.vue';
import {AppImages} from '@/lib/AppImages';
import {SiteDataService} from '@/lib/SiteDataService';
import {SiteDataResponse} from '@/lib/api/api';

export default defineComponent({
  name: 'About',

  setup() {

    const siteData: Ref<string | null> = ref(null);

    SiteDataService.fetchSiteData()
      .then((response: SiteDataResponse) => {
        siteData.value = response.about_me_html;
      });

    return {
      hero: AppImages.AboutMeHero,
      siteData,
    };
  },

  components: {
    AppPage,
  },
});
</script>

<style lang="scss">
  .about-me {
    width: 90%;
    margin: 0 auto;

    img {
      width: 360px;
      clear: both;
      &.fll {
        float: left;
        margin-right: 24px;
      }
      &.flr {
        float: right;
        margin-left: 24px;
      }
    }
  }

</style>
