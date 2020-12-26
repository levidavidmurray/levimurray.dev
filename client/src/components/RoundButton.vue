<template>

  <div class="round-button" v-if="!route" :class="{inactive}" ref="roundButton">
    <span class="rb-title">{{ title }}</span>
    <ion-fab-button @click="handler" :class="buttonClass">
      <ion-icon :icon="icon"></ion-icon>
    </ion-fab-button>
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
      required: false,
    },
    icon: {
      type: String,
      default: albumsOutline,
    },
    handler: {
      type: Function,
    },
    inactive: {
      type: Boolean,
      required: false,
    },
    route: {
      type: String,
      required: false,
    },
    buttonClass: {
      type: String,
      default: "none",
    },
    color: {
      type: String,
      default: "black",
    },
  },

  mounted() {
    const roundButton: HTMLDivElement = this.$refs.roundButton as HTMLDivElement;

    if (roundButton) {
      roundButton.style.setProperty("--color", this.color);
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
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: fit-content;
  padding-bottom: 12px;
  margin: 0 8px 8px 8px;
  font-size: 14px;

  --rb-color: var(--color);

  .rb-title {
    color: var(--rb-color);
    position: relative;
    top: 12px;
    font-weight: bold;
  }

  ion-fab-button {
    --color: var(--rb-color);

    ion-icon {
      color: var(--rb-color);
      font-size: 24px;
    }

    &.none {
      --background: none;
      --background-focused: none;
      --background-activated: none;
      --background-hover: none;
      --box-shadow: none;
    }

    &.generic {
      --background: white;
      --background-focused: white;
      --background-activated: white;
      --background-hover: white;
      --box-shadow: unset;
    }

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
