<template>
  <mobile-nav></mobile-nav>
  <div class="app-header">
    <div class="left">
      <ion-icon :icon="mailOutline"></ion-icon>
      <a href="mailto:levi@levimurray.dev">levi@levimurray.dev</a>
    </div>
    <div class="middle">
      <router-link to="/cases">Cases</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/about-me">About Me</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {mailOutline} from 'ionicons/icons';
import {IonIcon} from '@ionic/vue';
import {RouterLink} from 'vue-router';
import MobileNav from '@/components/MobileNav.vue';

export default defineComponent({
  name: 'AppHeader',

  setup() {
    return {
      mailOutline,
    }
  },

  components: {
    IonIcon,
    RouterLink,
    MobileNav,
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
  position: relative;
  width: 100%;
  max-width: 1800px;
  padding: 16px 0;


  @media only screen and (max-width: 1100px) {
    justify-content: flex-end;
  }

  .left {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;

    a {
      margin-left: 32px;
      text-decoration: none;
      color: unset;
      font-weight: 700;
    }
  }

  .middle {
    a {
      margin: 0 16px;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      color: var(--ion-color-medium-tint);
      transition: color ease-in 0.2s;

      &:hover {
        cursor: pointer;
        color: rgba(var(--ion-color-primary-rgb), 0.8);
      }

      &.router-link-exact-active {
        color: var(--ion-color-primary);
        position: relative;

        &::before {
          content: "";
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 7.5px;
          //background-color: #42b983;
          background-color: var(--ion-color-primary);
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
          bottom: 24px;
        }
      }

    }
  }

  ion-icon {
    font-size: 24px;
  }
}

@media only screen and (max-width: 900px) {
  .mobile-nav {
    display: flex;
  }

  .app-header {
    display: none;
  }
}
</style>
