<template>
  <div class="app-preloader">
    <ion-progress-bar v-if="showIndeterminate" type="indeterminate" reversed />
    <ion-progress-bar v-else :value="determinateLoaderVal" />
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from 'vue';
import {IonProgressBar} from '@ionic/vue';

export default defineComponent({
  name: 'AppPreloader',

  props: {
    loading: Boolean,
  },

  setup(props, {emit}) {
    const showIndeterminate = ref(true);
    const determinateLoaderVal = ref(0);

    const emitExit = () => {
      emit("exit");
    }

    if (!props.loading) {
      emitExit();
    }

    watch(() => props.loading, () => {
      showIndeterminate.value = false;
      determinateLoaderVal.value = 100;

      setTimeout(() => {
        emitExit();
      }, 300);
    });

    return {
      showIndeterminate,
      determinateLoaderVal,
    }
  },

  components: {
    IonProgressBar,
  },
});
</script>

<style scoped lang="scss">
.app-preloader {
  position: absolute;
  z-index: 10;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--ion-background-color);
  flex-direction: column;

  ion-progress-bar {
    width: 50%;
    margin-bottom: 16px;
  }
}
</style>
