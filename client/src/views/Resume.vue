<template>
  <app-page :hero="hero">
    <div class="app-content">
      <div class="resume-slide-in">
        <div class="resume hover-scale">
          <div class="overlay" @click="downloadResume">
            <ion-icon :icon="downloadOutline"></ion-icon>
          </div>
          <img :src="resumeSrc" alt="Levi Murray's Resume">
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
import {AppImages} from '@/lib/AppImages';

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
      hero: AppImages.ResumeHero,
      resumeSrc: AppImages.ResumePreview?.currentSrc,
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
    transform: translate3d(0,0,0) scale(0.85);
  }
  100% {
    transform: translate3d(0,150px,0) scale(1);
  }
}

.app-content {
  margin-bottom: 240px;
}

.resume-slide-in {
  margin-left: -24px;
  transform: translate3d(0,0,0);
  position: absolute;
  top: 0;
  animation: slide-in 1.1s ease forwards;
}

.resume {
  width: 70%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  background: white;

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
    transition: opacity 0.15s ease;

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

@media only screen and (max-width: 1200px) {
  .resume-slide-in {
    left: 0; right: 0;
    margin: 0 auto;
    width: fit-content;

    .resume {
      margin: 0 auto;
    }
  }
}

@media only screen and (max-width: 576px) {

  .app-content {
    margin-bottom: 24px;
  }

  .resume-slide-in {
    animation: none;
    position: static;
    width: 100%;

    .resume {
      width: 100%;
      border-radius: 0;
    }
  }
}

</style>
