<template>
  <icon-link @mouseover="$emit('mouseover')"
             @mouseout="$emit('mouseout')"
             :icon="icon"
             v-bind="$attrs"
             :href="href"
             active-color="var(--ion-color-primary)"
             active-bg-color="transparent" />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import IconLink from '@/components/IconLink/IconLink.vue';
import {Config} from '@/lib/config';
import {mail} from 'ionicons/icons';

export default defineComponent({
  name: 'EmailIconLink',

  inheritAttrs: false,

  props: {
    href: {
      type: String,
      default: Config.URL.email,
    },
  },

  setup() {
    return {
      icon: mail,
    }
  },

  components: {
    IconLink,
  },

});
</script>

<style scoped lang="scss">

</style>
