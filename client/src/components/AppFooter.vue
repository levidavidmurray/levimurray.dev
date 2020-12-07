<template>
  <ion-footer class="ion-no-border">
    <div class="left">
      <h4>Links</h4>
    </div>
    <div class="right">
      <p>&copy; 2020 Levi</p>
      <p>All Rights Reserved</p>
    </div>
  </ion-footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IonFooter} from '@ionic/vue';

export default defineComponent({
  name: 'AppFooter',

  components: {
    IonFooter,
  },
});
</script>

<style scoped lang="scss">
ion-footer {
  width: 100vw;
  margin-left: -16px;
  display: grid;
}
</style>
