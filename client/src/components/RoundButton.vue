<template>

  <div class="round-button" v-if="!route" :class="{inactive}">
    <ion-fab-button @click="handler">
      <ion-icon :icon="icon"></ion-icon>
    </ion-fab-button>
    <span class="rb-title">{{ title }}</span>
  </div>

  <router-link v-else :to="route">
    <ion-icon :icon="icon"></ion-icon>
    <span class="rb-title">{{ title }}</span>
  </router-link>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {RouterLink} from 'vue-router';
import {IonFabButton, IonIcon} from '@ionic/vue';
import {albumsOutline} from 'ionicons/icons';

export default defineComponent({
  name: "RoundButton",

  props: {
    title: {
      type: String,
      default: "TODO",
    },
    icon: {
      type: String,
      default: albumsOutline,
    },
    handler: {
      type: Function,
      required: true,
    },
    inactive: {
      type: Boolean,
    },
    route: {
      type: String,
    }
  },

  components: {
    IonFabButton,
    IonIcon,
    RouterLink,
  },
});
</script>

<style scoped lang="scss">

a {
  --color: rgba(var(--ion-color-medium-rgb), 0.8);

  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--color);

  &.router-link-exact-active {
    --color: var(--ion-color-primary);

    ion-icon {
      color: var(--color);
    }
  }

  .rb-title {
    color: var(--color);
    font-size: 12px;
    text-align: center;
    text-transform: capitalize;
    font-weight: bold;
    margin-top: 8px;
  }
}

ion-icon {
  font-size: 24px;
}

.round-button {

  position: relative;
  width: fit-content;
  padding-bottom: 12px;
  margin: 0 8px 8px 8px;

  ion-fab-button {
    --background: none;
    --background-focused: none;
    --background-activated: none;
    --background-hover: none;
    --box-shadow: none;
    --color: var(--ion-color-primary);
  }

  &.inactive {
    ion-fab-button {
      --color: var(--ion-color-medium-tint);
    }

    .rb-title {
      color: var(--ion-color-medium-tint);
    }

  }
}

</style>
