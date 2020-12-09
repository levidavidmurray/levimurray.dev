<template>
  <ion-button v-bind="$attrs" title="Close Modal" class="close-button" fill="clear">
    <ion-icon :icon="closeOutline" />
  </ion-button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {closeOutline} from 'ionicons/icons';
import {IonButton, IonIcon} from '@ionic/vue';

export default defineComponent({
  name: 'CloseButton',

  inheritAttrs: false,

  setup() {
    return {
      closeOutline,
    };
  },

  components: {
    IonIcon,
    IonButton,
  },

});
</script>

<style scoped lang="scss">

.close-button {
  ion-icon {
    font-size: 32px;
    color: rgba(255,255,255,0.8);
    filter: drop-shadow(1px 1px 1px rgba(0,0,0,1));
  }

  &:hover {
    ion-icon {
      color: white;
    }
  }
}

</style>
