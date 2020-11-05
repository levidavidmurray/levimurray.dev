<template>
  <div id="nav">
    <router-link to="/">Cases</router-link>
    <router-link to="/resume">Resume</router-link>
    <router-link to="/about">About Me</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'NavBar',
});
</script>

<style scoped lang="scss">
#nav {
  padding: 30px;

  a {
    font-size: 14px;
    font-weight: bold;
    color: #2c3e50;
    margin-right: 64px;
    text-transform: uppercase;
    text-decoration: none;

    &:last-of-type {
      margin-right: 0;
    }

    &.router-link-exact-active {
      color: #42b983;
      position: relative;

      &::before {
        content: "";
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 7.5px;
        background-color: #42b983;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        bottom: 30px;
      }
    }
  }
}

</style>
