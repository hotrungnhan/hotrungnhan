<template>
	<GlobalStorge>
		<HelloWorld />
		<ListGithubRepo />
	</GlobalStorge>
</template>

<script>
// import {  } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import ListGithubRepo from "./components/ListGithubRepo.vue";
import GlobalStorge from "./storage/GlobalStorge.vue";
export default {
	name: "App",
	components: {
		HelloWorld,
		ListGithubRepo,
		GlobalStorge
	},
	setup() {}
};
</script>
<style scoped lang="postcss"></style>
