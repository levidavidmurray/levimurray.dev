<template>
  <icon-link @mouseover="$emit('mouseover')"
             @mouseout="$emit('mouseout')"
             :icon="logoGithub"
             :href="githubHref"
             v-bind="$attrs"
             active-color="var(--social-color-gh)" />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import IconLink from '@/components/IconLink/IconLink.vue';
import {Config} from '@/lib/config';
import {logoGithub} from 'ionicons/icons';

export default defineComponent({
  name: 'GithubIconLink',

  inheritAttrs: false,

  props: {
    href: String,
  },

  setup() {
    return {
      logoGithub,
    }
  },

  computed: {
    githubHref(): string {
      return this.href ? this.href : Config.URL.github;
    },
  },

  components: {
    IconLink,
  },

});
</script>

<style scoped lang="scss">

</style>
