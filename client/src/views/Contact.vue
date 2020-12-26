<template>
  <div class="contact">
    <email-icon-link no-drop color="var(--text-color-medium)" />
    <linkedin-icon-link no-drop color="var(--text-color-medium)" />
    <github-icon-link no-drop color="var(--text-color-medium)" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppPage from '../components/AppPage.vue';
import {AppImages} from '@/lib/AppImages';
import GithubIconLink from '@/components/IconLink/GithubIconLink.vue';
import LinkedinIconLink from '@/components/IconLink/LinkedinIconLink.vue';
import EmailIconLink from '@/components/IconLink/EmailIconLink.vue';

export default defineComponent({
  name: "Contact",

  components: {
    GithubIconLink,
    LinkedinIconLink,
    EmailIconLink,
  },

});
</script>

<style scoped lang="scss">
  .contact {
    display: flex;

    a {
      margin-right: 12px;
    }

  }
</style>
