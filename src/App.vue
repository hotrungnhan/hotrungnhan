<template >
  <HelloWorld />
  <!-- <input v-model="string" type="text" @keyup.enter="submit" /> -->
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    // var string = ref("");
    // var update = inject("updateLocalize");
    // function submit() {
    //   update(string.value);
    // }
    // return { submit, string };
  },
};
</script>
<style scoped lang="postcss">
</style>
