<template>
  <div class="app-image">
    <img :src="src" :alt="alt">
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AppImage',

  props: {
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
});
</script>

<style scoped lang="scss">

.app-image {
  width: 256px;
  height: 172px;
  background-color: grey;
  display: inline-block;
}

</style>
