<template>
  <div class="image-carousel">
    <ion-slides :options="slideOpts" :class="{'center': shouldCenter}" @ionSlidesDidLoad="onSlidesLoad" ref="slides">
      <ion-slide v-for="image in project.showcase_images" :key="`${image.filename}-${image.created_at}`">
        <MediaContent :media="image" />
      </ion-slide>
    </ion-slides>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {IonSlide, IonSlides} from '@ionic/vue';
import {ProjectResponse} from '@/lib/api/api';
import MediaContent from '@/components/MediaContent.vue';

export default defineComponent({
  name: 'AppImageCarousel',

  props: {
    project: {
      type: Object as PropType<ProjectResponse>,
      required: true,
    },
    images: {
      type: Array,
    },
  },

  setup() {
    const slideOpts = {
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: false,
      },
    };

    const tmpImages = [1, 2, 3, 4];

    return {slideOpts, tmpImages};
  },

  methods: {
    onSlidesLoad() {
      // Fix for broken slide width when opening any modals after the first
      // Issue: https://github.com/ionic-team/ionic-framework/issues/19638
      const slides: HTMLIonSlidesElement = document.querySelector('ion-slides') as HTMLIonSlidesElement;
      slides.update();
    },
  },

  computed: {
    shouldCenter(): boolean {
      return this.project.showcase_images?.length === 1;
    },
  },

  components: {
    MediaContent,
    IonSlides,
    IonSlide,
  },

});
</script>

<style scoped lang="scss">
.image-carousel {
  padding: 16px 8px;
  height: 364px;
}

ion-slides {
  height: 100%;
  overflow: visible;

  ion-slide {
    width: fit-content;
  }

  &.center {
    ion-slide {
      width: 100%;
    }
  }
}

</style>
