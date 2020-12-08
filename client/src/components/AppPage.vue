<template>
  <ion-page>
    <ion-content class="ion-padding-horizontal">
      <div class="top-content" :style="bgImageStyle">
        <img :src="hero.currentSrc" alt="">
        <app-header :invert="invert"></app-header>
        <slot name="top-content"></slot>
      </div>
      <slot></slot>
      <app-footer />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent, PropType, toRefs} from 'vue';
import {IonContent, IonPage} from '@ionic/vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default defineComponent({
  name: 'AppPage',

  props: {
    invert: {
      type: Boolean,
    },
    hero: {
      type: Object as PropType<HTMLImageElement>,
      required: true,
    }
  },

  setup(props) {
    const {hero} = toRefs(props);

    return {
      bgImageStyle: { backgroundImage: `url(${hero.value.currentSrc})` },
    };
  },

  components: {
    IonPage,
    IonContent,
    AppHeader,
    AppFooter,
  },
});
</script>

<style scoped lang="scss">

.top-content {

  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto 72px auto;
  z-index: -1;
  position: relative;
  max-width: 1200px;
  width: 100%;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  overflow: hidden;
  padding: 0;

  img {
    width: 100%;
    visibility: hidden;
  }
}

</style>
