<template>
  <div class="app-header" :class="{invert}">
    <div :class="{middle: true, invert}">
      <router-link to="/projects">Projects</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/about-me">About Me</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {mailOutline} from 'ionicons/icons';
import {RouterLink} from 'vue-router';

export default defineComponent({
  name: 'AppHeader',

  props: {
    invert: {
      type: Boolean,
    }
  },

  setup() {
    return {
      mailOutline,
    }
  },

  components: {
    RouterLink,
  },
})
</script>

<style scoped lang="scss">
.mobile-nav {
  display: none;
}

.app-header {
  font-family: Montserrat, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 16px;

  --active-color: white;
  --inactive-color: black;
  --active-shadow: 0 0 1px black;
  --inactive-shadow: none;

  &.invert {
    --active-color: black;
    --inactive-color: white;
    --active-shadow: none;
    --inactive-shadow: 0 0 1px black;
  }

  .left {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;

    a {
      margin-left: 32px;
      text-decoration: none;
      color: black;
      font-weight: bolder;

      &:hover {
        color: white;
        text-shadow: 0 0 1px black;
      }
    }
  }

  .middle {

    a {
      margin: 0 4px;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      color: var(--inactive-color);
      text-shadow: var(--inactive-shadow);
      transition: color ease 0.2s, text-shadow ease 0.2s, transform ease-in-out 0.3s;
      transform: translate3d(0,0,0);
      display: inline-block;
      padding: 12px 8px;

      &:hover {
        cursor: pointer;
        color: var(--active-color);
        text-shadow: var(--active-shadow);
        transform: translate3d(0,-3px,0);
      }

      &.router-link-exact-active {
        color: var(--active-color);
        position: relative;
        text-shadow: var(--active-shadow);
        transform: translate3d(0,-3px,0);

        &::before {
          content: "";
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 7.5px;
          background-color: var(--active-color);
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
          bottom: 36px;
          box-shadow: var(--active-shadow);
        }
      }

    }
  }

  ion-icon {
    font-size: 24px;
  }
}

@media only screen and (max-width: 400px) {
  .app-header {
    .middle {
      a {
        font-size: 11px;

        &.router-link-exact-active {
          &::before {
            bottom: 32px;
          }
        }
      }
    }
  }
}
</style>
