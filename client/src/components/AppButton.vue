<template>
  <a :href="route" :target="target" v-if="route">
    <ion-button v-bind="$attrs">
      <ion-icon v-if="icon" :icon="icon"></ion-icon>
      <slot></slot>
    </ion-button>
  </a>
  <ion-button v-bind="$attrs" v-else>
    <ion-icon v-if="icon" :icon="icon"></ion-icon>
    <slot></slot>
  </ion-button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IonButton, IonIcon} from '@ionic/vue';

export default defineComponent({
  name: 'AppButton',
  inheritAttrs: false,

  props: {
    icon: {
      type: String,
      required: false,
    },
    route: {
      type: String,
      required: false,
    },
    target: {
      type: String,
      default: '_blank',
    }
  },

  components: {
    IonIcon,
    IonButton,
  }
});
</script>

<style scoped lang="scss">
  ion-button {
    ion-icon {
      padding-right: 8px;
    }
  }
</style>
