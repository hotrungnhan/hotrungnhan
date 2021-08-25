<template >
  <div class="w-full flex flex-col">
    <div class="flex-1">
      <button
        v-on:click="openNavigation()"
        class="nav-toggle-btn text"
        :class="navtoggle ? '' : 'nav-toggle-btn-toggled'"
      >
        <font-awesome-icon
          :icon="navtoggle ? ['fas', 'times'] : ['fas', 'bars']"
        />
      </button>
    </div>
    <nav class="fixed top-24 left-0 text" :class="navtoggle ? 'toggled' : ''">
      <a href="#"> <font-awesome-icon :icon="['fab', 'twitter']" /></a>
      <a href="#"> <font-awesome-icon :icon="['fab', 'codepen']" /></a>
      <a href="#"> <font-awesome-icon :icon="['fas', 'user-secret']" /></a>
      <a href="#"> <font-awesome-icon :icon="['fab', 'facebook']" /> </a>
      <a v-on:click="DarkChange">
        <font-awesome-icon :icon="['fas', 'circle']" />
      </a>
    </nav>
  </div>
  <div class="grid md:grid-cols-2 mx-10 h min-h-112">
    <div></div>
    <div class="relative h-full">
      <div class="prism">
        <Prism lang="javascript">
          {{
            `function (){
          let i=0
          let z=1 
        return i+z
    }`
          }}
        </Prism>
      </div>
      <div class="prism -left-24 top-24 z-10">
        <Prism lang="javascript">
          {{
            `function (){
          let i=0
          let z=1 
        return i+z
    }`
          }}
        </Prism>
      </div>
      <div class="prism left-16 top-56">
        <Prism lang="javascript" class="prism-code">
          {{
            `function (){
          let i=0
          let z=1 
        return i+z
    }`
          }}
        </Prism>
      </div>
    </div>
  </div>
  <a>{{ isdark }}</a>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.prism {
  @apply absolute block bg-gray-900 filter shadow-2xl rounded-md;
  pre {
    @apply w-fit-content shadow-none !important;
  }
}
div pre[class*="language-"] {
  @apply overflow-clip border-none m-0 overflow-hidden  !important;
}
nav {
  a {
    @apply block text-center p-5 text-4xl w-24 h-24 transition-all -ml-48;
  }
  &.toggled {
    a {
      @apply ml-0;
    }
  }
}
.nav-toggle-btn {
  @apply w-24 h-24 border-none text-4xl transition-transform p-0 focus:outline-none;
  &-toggled {
    /* @apply rotate-180; */
    transform: rotate(-180deg);
  }
}
</style>

<script>
import "prismjs";
import "@hotrungnhan/vue-prism-component/theme/prism-window.css";
import { inject, ref } from "vue";
export default {
  name: "HelloWorld",
  setup() {
    let isdark = inject("isDark");
    let updateisdark = inject("updateIsDark");
    var navtoggle = ref(0);
    function openNavigation() {
      navtoggle.value = !navtoggle.value;

      console.log(isdark.value);
    }
    function DarkChange() {
      updateisdark(!isdark.value);
    }
    return {
      navtoggle,
      openNavigation,
      DarkChange,
    };
  },
};
</script>
