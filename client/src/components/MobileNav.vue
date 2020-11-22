<template>
  <div class="mobile-nav">
    <round-button v-for="rb in navButtons" :key="rb.title" v-bind="rb"></round-button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import RoundButton from '@/components/RoundButton.vue';
import {albumsOutline, documentTextOutline, happyOutline, mailOutline} from 'ionicons/icons';

interface RoundButtonOpts {
  title: string;
  icon: string;
  handler?: () => void;
  inactive: boolean;
  route?: string;
}

export default defineComponent({
  name: 'MobileNav',

  data() {
    const navButtons: RoundButtonOpts[] = [
      {
        title: 'cases',
        icon: albumsOutline,
        inactive: false,
        route: 'cases',
      },
      {
        title: 'resume',
        icon: documentTextOutline,
        inactive: true,
        route: 'resume',
      },
      {
        title: 'about',
        icon: happyOutline,
        inactive: true,
        route: 'about-me',
      },
      {
        title: 'contact',
        icon: mailOutline,
        inactive: true,
        route: 'contact',
      },
    ];

    return {
      navButtons
    };
  },

  beforeRouteUpdate(to, from, next) {
    console.log(to);
    next();
  },

  components: {
    RoundButton,
  },
});
</script>

<style scoped lang="scss">
.mobile-nav {
  padding-bottom: 16px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  width: 60%;
}

@media only screen and (max-width: 600px) {
  .mobile-nav {
    width: 100%;
  }
}
</style>
