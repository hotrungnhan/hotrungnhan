<template>
  <div class="sticky top-0 z-50">
    <div class="w-min h-24 relative">
      <div
        v-clickoutside="closeNavigation"
        class="no-scrollbar"
        :class="
          navtoggle
            ? 'bg-gray-100 dark:bg-gray-700 overflow-x-hidden overflow-y-auto h-screen '
            : 'overflow-y-hidden '
        "
      >
        <button
          class="nav-toggle-btn text-darkmode"
          :class="navtoggle ? '' : 'nav-toggle-btn-toggled'"
          @click="openNavigation"
        >
          <font-awesome-icon
            :icon="navtoggle ? ['fas', 'times'] : ['fas', 'bars']"
          />
        </button>
        <transition
          name="slide-fade"
          mode="out-in"
        >
          <nav
            v-if="navtoggle"
            id="navigation"
            class="top-24 left-0 text-darkmode toggled"
          >
            <a href="#"> <font-awesome-icon :icon="['fab', 'twitter']" /></a>
            <a href="#"> <font-awesome-icon :icon="['fab', 'codepen']" /></a>
            <a href="#">
              <font-awesome-icon
                :icon="['fas', 'user-secret']"
              /></a>
            <a href="#">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
            <Popper
              hover
              placement="right"
              open-delay="0"
              close-delay="100"
              :class="isdark ? 'dark' : 'light'"
              :arrow="true"
              :content="
                t(isdark ? 'navigation.mode-light' : 'navigation.mode-dark')
              "
            >
              <a @click="darkSwap">
                {{ currentTheme }}
              </a>
            </Popper>
            <Popper
              hover
              placement="right"
              open-delay="0"
              close-delay="100"
              z-index="999999"
              :class="isdark ? 'dark' : 'light'"
              :arrow="true"
              :content="t('navigation.change-language')"
            >
              <a @click="langSwap">
                <h4>{{ locale }}</h4>
              </a>
            </Popper>
          </nav>
        </transition>
      </div>
    </div>
  </div>
  <div
    class="w-full relative my-0 md:px-16 px-4 md:grid md:grid-cols-2 mx-auto max-w-screen-xl gap-8"
  >
    <div class="w-full select-none pb-20">
      <div class="md:text-left text-center">
        <img
          class="max-h-24 md:mx-0 mx-auto"
          draggable="false"
          src="https://dwglogo.com/wp-content/uploads/2017/09/Vue-logo-001.svg"
        >
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
        <Prism
          lang="javascript"
          class="line-numbers select-none"
        >
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
        <Prism
          lang="javascript"
          class="line-numbers select-none"
        >
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
        <Prism
          lang="javascript"
          class="prism-code line-numbers"
        >
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

<script>
import "prismjs";
import "@hotrungnhan/vue-prism-component/theme/prism-window.css";
import "prismjs/themes/prism-twilight.css";
import Popper from "vue3-popper";
import { useI18n } from "vue-i18n";

import { inject, ref } from "vue";
export default {
  name: "HelloWorld",
  components: {
    Popper,
  },
  directives: {
    clickoutside: {
      created(el, binding) {
        el.clickOutsideEvent = function (event) {
          // here I check that click was outside the el and his children
          if (!(el == event.target || el.contains(event.target))) {
            // and if it did, call method provided in attribute value
            binding.value();
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unmounted(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
      },
    },
  },
  setup() {
    let isdark = inject("isDark");
    let currentTheme = inject("currentTheme");
    let nextTheme = inject("updateTheme");
    // let updateLocalize = inject("updateLocalize");
    let navtoggle = ref(false);
    let { t, locale } = useI18n();
    function openNavigation() {
      navtoggle.value = !navtoggle.value;
    }
    function closeNavigation() {
      navtoggle.value = false;
    }
    function darkSwap() {
      nextTheme();
    }

    function langSwap() {
      locale.value = locale.value == "vi" ? "en" : "vi";
    }
    return {
      closeNavigation,
      locale,
      currentTheme,
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.prism {
  @apply absolute block filter rounded-md;
  pre[class*="language-"] {
    @apply border-none m-0 pr-32 align-top w-fit-content !important;
  }
}

.slide-fade-enter-active {
  @apply transition-all transform -translate-x-8;
}
.slide-fade-leave-active {
  @apply transition-all;
}
.slide-fade-enter-to {
  @apply transform translate-x-0;
}
.slide-fade-leave-to {
  @apply transform  -translate-x-32;
}
#navigation {
  a {
    @apply block text-center p-5 text-4xl w-24 h-24 select-none;
  }
}
.nav-toggle-btn {
  @apply w-24 h-24 border-none text-4xl transition-transform p-0 focus:outline-none;
  &-toggled {
    @apply transform rotate-180;
  }
}
</style>
