<template>
  <a class="icon-link" v-bind="$attrs" :title="linkTitle" :target="target" ref="iconLink">
    <ion-icon :icon="icon" :class="{'no-drop': noDrop}" />
    <div class="bg-fill"></div>
  </a>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IonIcon} from '@ionic/vue';

export default defineComponent({
  name: 'IconLink',

  inheritAttrs: false,

  props: {
    icon: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      default: "_blank",
    },
    title: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      default: "white",
    },
    bgColor: {
      type: String,
      default: "transparent",
    },
    activeColor: {
      type: String,
      default: "var(--ion-color-primary)",
    },
    activeBgColor: {
      type: String,
      default: "white",
    },
    noDrop: {
      type: Boolean,
      required: false,
    }
  },

  mounted() {
    const iconLink: HTMLAnchorElement = this.$refs.iconLink as HTMLAnchorElement;
    iconLink.style.setProperty("--color", this.color);
    iconLink.style.setProperty("--background-color", this.bgColor);
    iconLink.style.setProperty("--active-color", this.activeColor);
    iconLink.style.setProperty("--active-background-color", this.activeBgColor);
  },

  computed: {
    linkTitle(): string {
      return this.title ? this.title : this.$attrs.href as string;
    },
  },

  components: {
    IonIcon,
  },
});
</script>

<style scoped lang="scss">

a {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  --color: white;
  --background-color: transparent;
  --active-color: var(--ion-color-primary);
  --active-background-color: white;

  .bg-fill {
    position: absolute;
    width: 80%;
    height: 80%;
    background: var(--background-color);
    z-index: 1;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.08s ease;
  }

  &:hover {
    .bg-fill {
      opacity: 1;
      background: var(--active-background-color);
    }

    ion-icon {
      filter: none;
      color: var(--active-color);
    }
  }

  ion-icon {
    z-index: 2;
    pointer-events: none;
    color: var(--color);
    font-size: 32px;
    transition: all 0.08s ease;
    filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.75));
    position: relative;

    &.no-drop {
      filter: none;
    }
  }
}

</style>
