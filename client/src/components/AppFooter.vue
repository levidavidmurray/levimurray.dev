<template>
  <ion-footer class="ion-no-border">
    <div class="app-constraint">
      <div class="left">
      </div>
      <div class="right">
        <p>&copy; {{ year }} Levi Murray</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  </ion-footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IonFooter} from '@ionic/vue';

export default defineComponent({
  name: 'AppFooter',

  setup() {
    return {
      year: new Date().getFullYear(),
    };
  },

  components: {
    IonFooter,
  },
});
</script>

<style scoped lang="scss">
ion-footer {
  width: 100vw;
  margin-left: -16px;
  padding: 16px;
  background: #e6eaf0;
  font-family: Montserrat, sans-serif;

  .app-constraint {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    .right {
      font-size: 14px;
      padding-right: 8px;
      font-weight: 800;

      p {
        text-align: right;
        color: var(--text-color-soft);
      }
    }

    .left {
      ul {
        padding: 0;

        li {
          text-decoration: none;
          list-style: none;
          padding: 0;
          margin-bottom: 12px;

          a {
            font-weight: 500;
            color: var(--text-color-soft);
            text-decoration: none;
            transition: color 0.1s ease;

            &:hover {
              color: var(--text-color-hard);
            }
          }
        }
      }
    }

  }
}

@media only screen and (max-width: 576px) {
  ion-footer {
    margin-left: unset;
  }
}

</style>
