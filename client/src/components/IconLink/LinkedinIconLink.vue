<template>
  <icon-link v-bind="$attrs" :href="href" :icon="logoLinkedin" active-color="var(--social-color-li)" />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import IconLink from '@/components/IconLink/IconLink.vue';
import {logoLinkedin} from 'ionicons/icons';
import {Config} from '@/lib/config';

export default defineComponent({
  name: 'LinkedinIconLink',

  setup() {
    return {
      logoLinkedin,
      href: Config.URL.linkedin,
    };
  },

  components: {
    IconLink,
  },
});
</script>

<style scoped lang="scss">

</style>
