<template>
  <ion-page>
    <ion-content class="ion-padding-horizontal">
      <div class="top-content" :style="bgImageStyle">
        <img :src="hero.currentSrc" alt="">
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
import AppFooter from '@/components/AppFooter.vue';

export default defineComponent({
  name: 'AppPage',

  props: {
    invert: {
      type: Boolean,
      required: false,
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
    AppFooter,
  },
});
</script>

<style scoped lang="scss">

$mobile-breakpoint: 576px;

.top-content {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  margin: 0 auto 72px auto;
  z-index: -1;
  position: relative;
  max-height: 75vh;
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

.top-content-mb {
  display: none;
}

@media only screen and (max-width: $mobile-breakpoint) {
  .top-content {
    margin-bottom: 24px;
  }
}

@media only screen and (max-height: 900px) {
  .top-content {
    background-position: center;
  }
}

</style>
