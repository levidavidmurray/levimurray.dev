<template>
  <app-page>
    <div class="app-content">
      <img class="hero-image abs" src="../assets/images/blue-steel.jpeg" alt="">
      <div class="resume-slide-in">
        <div class="resume hover-scale">
          <div class="overlay" @click="downloadResume">
            <ion-icon :icon="downloadOutline"></ion-icon>
          </div>
          <img src="../assets/images/resume.png" alt="">
        </div>
      </div>
    </div>
  </app-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppPage from '../components/AppPage.vue';
import {IonIcon} from '@ionic/vue';
import {downloadOutline} from 'ionicons/icons';
import axios from 'axios';

export default defineComponent({
  name: 'Resume',

  setup() {
    const downloadResume = () => {
      // axios({
      //   url: 'http://localhost:3030/resume.pdf', // TODO: API config
      //   method: 'GET',
      //   responseType: 'blob',
      // }).then((response) => {
      //   const url = window.URL.createObjectURL(new Blob([response.data]));
      //   const link = document.createElement('a');
      //   link.href = url;
      //   link.setAttribute('download', 'Murray,Levi_Resume.pdf');
      //   document.body.appendChild(link);
      //   link.click();
      // });
      window.open('http://localhost:3030/resume.pdf', '_blank');
    };

    return {
      downloadOutline,
      downloadResume,
    };
  },

  components: {
    AppPage,
    IonIcon,
  },
});
</script>

<style scoped lang="scss">

@keyframes slide-in {
  0% {
    transform: translate3d(0,0,0);
  }
  100% {
    transform: translate3d(0,100px,0);
  }
}

.resume-slide-in {
  margin-left: -24px;
  transform: translate3d(0,0,0);
  animation: slide-in 0.75s ease forwards;
}

.resume {
  width: 600px;
  height: 776px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  img {
    width: 100%;
  }

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

    ion-icon {
      height: 64px;
      width: 128px;
      font-size: 41px;
      position: relative;
      top: -2px;
      color: white;
    }
  }
}

</style>
