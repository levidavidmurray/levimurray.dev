<template>
  <div class="image-carousel">
    <ion-slides :options="slideOpts" @ionSlidesDidLoad="onSlidesLoad" ref="slides">
      <ion-slide v-for="image in project.images" :key="`${project.id}-${image}`">
        <app-image/>
      </ion-slide>
    </ion-slides>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, Ref} from 'vue';
import AppImage from '@/components/AppImage.vue';
import {ProjectCard} from '@/lib/ProjectCard';
import {IonSlide, IonSlides} from '@ionic/vue';

export default defineComponent({
  name: 'AppImageCarousel',

  props: {
    project: {
      type: Object as PropType<ProjectCard>,
      required: true,
    },
    images: {
      type: Array,
    },
  },

  setup() {
    const slideOpts = {
      slidesPerView: 3,
      spaceBetween: 16,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    };

    return {slideOpts};
  },

  methods: {
    onSlidesLoad() {
      // Fix for broken slide width when opening any modals after the first
      // Issue: https://github.com/ionic-team/ionic-framework/issues/19638
      const slides: HTMLIonSlidesElement = document.querySelector('ion-slides') as HTMLIonSlidesElement;
      slides.update();
    },
  },

  components: {
    AppImage,
    IonSlides,
    IonSlide,
  },

});
</script>

<style scoped lang="scss">
.image-carousel {
  padding: 32px 32px 8px 0;
}
</style>
