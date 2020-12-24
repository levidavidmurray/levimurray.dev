<template>
  <div :class="mediaContentClass" ref="mediaContent">
    <img v-if="isImage" ref="imgRef" :src="media.link">
    <video v-else autoplay loop>
      <source :src="media.link" :type="media.content_type">
    </video>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {MediaResponse} from '@/lib/api/api';

export default defineComponent({
  name: 'MediaContent',

  props: {
    media: {
      type: Object as PropType<MediaResponse>,
      required: true,
    }
  },

  data() {
    return {
      styleBlacklist: ["schedule-explorer-0.mp4"],
    };
  },

  mounted() {
    if (this.isImage) {
      const mediaContent = this.$refs.mediaContent as HTMLElement;
      mediaContent.style.backgroundImage = `url(${this.media.link})`;
    }
  },

  computed: {
    isImage(): boolean {
      return this.media.content_type !== "video/mp4";
    },

    isStyleBlacklist(): boolean {
      return this.styleBlacklist.includes(this.media.filename);
    },

    mediaContentClass() {
      return {
        'media-content': true,
        'sbl': this.isStyleBlacklist,
        'image': this.isImage,
        'video': !this.isImage,
      }
    },
  },

});
</script>

<style scoped lang="scss">
  .media-content {
    height: inherit;
    background-size: cover;

    &:not(.sbl) {
      border-radius: 16px;
      box-shadow: 2px 4px 10px rgba(0,0,0,0.5);
      overflow: hidden;
    }

    video {
      height: inherit;
    }

    img {
      visibility: hidden;
    }
  }
</style>
