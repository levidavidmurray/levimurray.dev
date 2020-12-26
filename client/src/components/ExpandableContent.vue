<template>
  <div id="expandable-content" :class="expander.contentClass" @click="handleClick">
    <div class="content">
      <slot></slot>
    </div>
    <div class="expander">
      <round-button :handler="toggleExpanded"
                    :icon="expander.icon"
                    :title="expander.title"
                    color="var(--text-color-medium)" />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from 'vue';
import RoundButton from './RoundButton.vue';
import {chevronDownSharp, chevronUpSharp} from 'ionicons/icons';

export default defineComponent({
  name: "GenericComponent",

  setup() {
    const isExpanded = ref(false);

    const toggleExpanded = (event: MouseEvent) => {
      event.stopPropagation();
      isExpanded.value = !isExpanded.value;
    };

    const handleClick = (event: MouseEvent) => {
      if (!isExpanded.value) {
        toggleExpanded(event);
      }
    };

    const expander = computed(() => {
      const title = isExpanded.value ? "See Less" : "See More";
      const icon = isExpanded.value ? chevronUpSharp : chevronDownSharp;
      const contentClass = isExpanded.value ? "expanded" : "";

      return {
        title,
        icon,
        contentClass,
      };
    });

    return {
      isExpanded,
      toggleExpanded,
      handleClick,
      chevronDownSharp,
      expander,
    };
  },

  components: {
    RoundButton,
  },
});
</script>

<style scoped lang="scss">
#expandable-content {
  .content {
    height: 228px;
    overflow: hidden;
  }

  &:not(.expanded) {
    cursor: pointer;
  }

  .expander {
    box-shadow: 0 0 30px 50px var(--ion-background-color);
    background: var(--ion-background-color);
    display: flex;
    justify-content: center;
    position: relative;
  }

  &.expanded {
    .content {
      height: auto;
    }

    .expander {
      box-shadow: none;
    }

  }
}
</style>
