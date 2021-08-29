<template >
  <HelloWorld />
  <!-- <h1 v-text="currentTheme" /> -->
  <!-- <input
    @focusout="
      (e) => {
        console.log(`out`);
      }
    "
  /> -->
  <!-- <button v-on:click="updateTheme" v-text="`123456789`" /> -->
</template>

<script>
// import {  } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    // var currentTheme = inject("currentTheme");
    // var updateTheme = inject("updateTheme");
    // return { currentTheme, updateTheme };
  },
};
</script>
<style scoped lang="postcss">
</style>
