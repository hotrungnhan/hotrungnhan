<template >
  <div class="sticky top-0 z-50">
    <div class="w-min h-24 relative">
      <div
        class="h-screen no-scrollbar"
        :class="
          navtoggle
            ? 'bg-gray-100 dark:bg-gray-700 overflow-x-hidden overflow-y-auto'
            : 'overflow-y-hidden'
        "
      >
        <button
          v-on:click="openNavigation()"
          class="nav-toggle-btn text-darkmode"
          :class="navtoggle ? '' : 'nav-toggle-btn-toggled'"
        >
          <font-awesome-icon
            :icon="navtoggle ? ['fas', 'times'] : ['fas', 'bars']"
          />
        </button>
        <nav
          id="navigation"
          class="top-24 left-0 text-darkmode"
          :class="navtoggle ? 'toggled' : ''"
        >
          <a href="#"> <font-awesome-icon :icon="['fab', 'twitter']" /></a>
          <a href="#"> <font-awesome-icon :icon="['fab', 'codepen']" /></a>
          <a href="#"> <font-awesome-icon :icon="['fas', 'user-secret']" /></a>
          <a href="#">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <Popper
            hover
            placement="right"
            openDelay="200"
            closeDelay="200"
            zIndex="999999"
            :class="isdark ? 'dark' : 'light'"
            :arrow="true"
            :content="
              t(isdark ? 'navigation.mode-light' : 'navigation.mode-dark')
            "
          >
            <a v-on:click="darkSwap">
              <font-awesome-icon :icon="['fas', 'tint']" />
            </a>
          </Popper>
          <Popper
            hover
            placement="right"
            openDelay="200"
            zIndex="999999"
            :class="isdark ? 'dark' : 'light'"
            closeDelay="200"
            :arrow="true"
            :content="t('navigation.change-language')"
          >
            <a v-on:click="langSwap">
              <h1>{{ localize }}</h1>
            </a>
          </Popper>
        </nav>
      </div>
    </div>
  </div>
  <div
    class="
      w-full
      relative
      my-0
      md:px-16
      px-4
      md:grid md:grid-cols-2
      mx-auto
      max-w-screen-xl
      gap-8
    "
  >
    <div class="w-full select-none pb-20">
      <div class="md:text-left text-center">
        <img
          class="max-h-24 md:mx-0 mx-auto"
          draggable="false"
          src="https://dwglogo.com/wp-content/uploads/2017/09/Vue-logo-001.svg"
        />
        <h1 class="text-3xl md:text-4xl mb-4 font-normal text-darkmode">
          {{ t("lp-title") }}
        </h1>
        <p class="text-md md:text-lg lg:text-xl text-darkmode">
          {{ t("lp-paragraph") }}
        </p>
      </div>
    </div>

    <div class="relative min-h-112 min-w-112">
      <div class="prism right-0">
        <Prism lang="javascript" class="line-numbers">
          {{
            `function (){
          let i=0
          let z=1 
        return i+z
    }`
          }}
        </Prism>
      </div>
      <div class="prism top-32 right-16 z-30">
        <Prism lang="javascript" class="line-numbers">
          {{
            `function (){
          let i=0
          let z=1 
        return i+z
    }`
          }}
        </Prism>
      </div>
      <div class="prism top-64 right-6 z-20">
        <Prism lang="javascript" class="prism-code line-numbers">
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
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.prism {
  @apply absolute block filter rounded-md;
  pre[class*="language-"] {
    @apply border-none m-0 pr-32 align-top w-fit-content !important;
  }
}

#navigation {
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

<script >
import "prismjs";
import "@hotrungnhan/vue-prism-component/theme/prism-window.css";
import Popper from "vue3-popper";
import { useI18n } from "vue-i18n";
import { inject, ref } from "vue";
export default {
  name: "HelloWorld",
  components: {
    Popper,
  },
  setup() {
    let isdark = inject("isDark");
    let updateisdark = inject("updateIsDark");
    let localize = inject("localize");
    let updateLocalize = inject("updateLocalize");
    let navtoggle = ref(false);
    let { t } = useI18n();
    function openNavigation() {
      navtoggle.value = !navtoggle.value;
    }
    function darkSwap() {
      updateisdark(!isdark.value);
    }
    function langSwap() {
      updateLocalize(localize.value == "vi" ? "en" : "vi");
    }
    return {
      localize,
      isdark,
      navtoggle,
      openNavigation,
      darkSwap,
      langSwap,
      Popper,
      t,
    };
  },
};
</script>
