<template>
  <icon-link @mouseover="$emit('mouseover')"
             @mouseout="$emit('mouseout')"
             :icon="logoGithub"
             v-bind="$attrs"
             :href="href"
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
    href: {
      type: String,
      default: Config.URL.github,
    },
  },

  setup() {
    return {
      logoGithub,
    }
  },

  components: {
    IconLink,
  },

});
</script>

<style scoped lang="scss">

</style>
