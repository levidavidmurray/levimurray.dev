<template>
  <div class="about-me reader-text" v-html="siteData">

  </div>
</template>

<script lang="ts">
import {defineComponent, ref, Ref} from 'vue';
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

});
</script>

<style lang="scss">
  .about-me {

    p:nth-child(1), p:nth-child(2) {
      margin: 0;
    }

    img {
      width: 360px;
      clear: both;
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);

      &.fll {
        float: left;
        margin-right: 24px;
      }
      &.flr {
        float: right;
        margin-left: 24px;
      }
    }

    ol {
      a {
        color: var(--text-color-medium);
      }
    }

  }

</style>
