<template>
  <div class="content-section">
    <header>
      <h3>{{ title }}</h3>
    </header>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "ContentSection",
  props: {
    title: {
      type: String,
      required: false,
    },
  },
});
</script>

<style scoped lang="scss">
.content-section {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 72px;

  header {
    padding-bottom: 16px;

    h3 {
      margin: 0;
      font-size: 2.2em;
      font-weight: bold;
      color: var(--color-bluish-gray);
    }
  }
}
</style>
