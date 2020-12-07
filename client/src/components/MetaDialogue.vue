<template>
  <div class="meta-dialogue">
    <h4>OOPS! Something went very wrong...</h4>
    <p>Hang tight. It'll be fixed shortly.</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'MetaDialogue',
});
</script>

<style scoped lang="scss">
.meta-dialogue {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding-bottom: 90px;
}
</style>
