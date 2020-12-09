<template>
  <ion-page>
    <ion-content class="ion-padding-horizontal">
<!--      <div class="top-content-mb">-->
<!--        <div class="avatar-container">-->
<!--          <ion-avatar>-->
<!--            <img :src="hero.currentSrc" alt="">-->
<!--          </ion-avatar>-->
<!--          <linkedin-icon-link class="social linkedin" />-->
<!--          <github-icon-link class="social github" />-->
<!--        </div>-->
<!--      </div>-->
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
import {IonAvatar, IonContent, IonPage} from '@ionic/vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import LinkedinIconLink from '@/components/IconLink/LinkedinIconLink.vue';
import GithubIconLink from '@/components/IconLink/GithubIconLink.vue';

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
    // GithubIconLink,
    // LinkedinIconLink,
    IonPage,
    IonContent,
    // IonAvatar,
    AppHeader,
    AppFooter,
  },
});
</script>

<style scoped lang="scss">

$mobile-breakpoint: 576px;

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

.top-content-mb {
  display: none;
}

@media only screen and (max-width: $mobile-breakpoint) {
  .ion-padding-horizontal {
    --padding-start: 0;
    --padding-end: 0;
  }

  .top-content {
    margin-bottom: 24px;
  }

  //.top-content {
  //  display: none;
  //}

  //.top-content-mb {
  //  display: flex;
  //  padding: 16px 0;
  //
  //  .avatar-container {
  //    width: fit-content;
  //    height: fit-content;
  //    margin: 0 auto;
  //    position: relative;
  //
  //    .social {
  //      position: absolute;
  //      right: -24px;
  //
  //      &.github {
  //        top: 0;
  //      }
  //
  //      &.linkedin {
  //        bottom: 0;
  //      }
  //    }
  //
  //    ion-avatar {
  //      width: 128px;
  //      height: 128px;
  //      margin: 0 auto;
  //      border: 5px solid white;
  //      box-sizing: content-box;
  //      box-shadow: 0 0 3px rgba(0,0,0,0.5);
  //    }
  //
  //  }
  //}
}

</style>
