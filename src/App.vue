<template >
  <HelloWorld />
  <!-- <input v-model="string" v-on:click="abc" type="text" @keyup.enter="submit" /> -->
</template>

<script>
import { inject, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    var string = ref("");
    var update = inject("updateLocalize");
    function submit() {
      update(string.value);
    }
    return { submit, string };
  },
};
</script>
<style scoped lang="postcss">
</style>
