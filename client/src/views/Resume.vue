<template>
  <app-page>
    <div class="app-content">
      <img class="hero-image" src="../assets/images/blue-steel.jpeg" alt="">
    </div>
    <div class="resume">
      <div class="overlay" @click="downloadResume">
        <ion-button @click="downloadResume">
          <ion-icon :icon="downloadOutline"></ion-icon>
        </ion-button>
      </div>
      <img src="../assets/images/resume.png" alt="">
    </div>
  </app-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppPage from '../components/AppPage.vue';
import {IonButton, IonIcon} from '@ionic/vue';
import {downloadOutline} from 'ionicons/icons';

export default defineComponent({
  name: 'Resume',

  setup() {

    const downloadResume = () => {
      alert("TODO: Download/Link PDF!");
    };

    return {
      downloadOutline,
      downloadResume,
    };
  },

  components: {
    AppPage,
    IonButton,
    IonIcon,
  },
});
</script>

<style scoped lang="scss">

@keyframes slide-in {
  0% {
    transform: translate3d(0,-500px,0);
  }
  100% {
    transform: translate3d(0,-300px,0);
  }
}

.resume {
  width: fit-content;
  margin: 0 auto;
  position: relative;
  transform: translate3d(0,-500px,0);
  animation: slide-in 3s ease forwards;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }

    ion-button {
      width: 128px;
      height: 64px;

      ion-icon {
        font-size: 41px;
        position: relative;
        top: -2px;
      }
    }
  }
}

</style>
