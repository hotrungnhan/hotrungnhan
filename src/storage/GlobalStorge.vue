<template>
	<slot></slot>
</template>
<script lang="ts">
import { CircularLinkList } from "../ultis/CircularLinklist";
import {
	SUPPORT_LOCALES,
	loadLocaleMessages,
	setI18nLanguage
} from "../plugins/i18n";
import { useI18n } from "vue-i18n";

import { provide, watch, ref } from "vue";
export default {
	///declare storage
	setup() {
		const i18nComposer = useI18n();
		const { locale, availableLocales } = useI18n();
		const listtheme = new CircularLinkList();
		listtheme.push("light", "dark", "sys");
		const currenttheme = ref();
		const isDark = ref();
		//watcher
		watch(currenttheme, (newvalue) => {
			localStorage.setItem("prefer-theme", newvalue);
			if (newvalue == "sys") {
				isDark.value = window.matchMedia(
					"(prefers-color-scheme: dark)"
				).matches;
			} else {
				return (isDark.value = newvalue == "dark");
			}
		});
		watch(isDark, (newvalue) => {
			newvalue
				? document.documentElement.classList.add("dark")
				: document.documentElement.classList.remove("dark");
		});
		watch(locale, async (newlocale) => {
			if (!SUPPORT_LOCALES.includes(newlocale)) {
				console.log(`${newlocale} don't exist`);
				return;
			}
			if (!availableLocales.includes(newlocale)) {
				await loadLocaleMessages(i18nComposer, newlocale);
			}
			localStorage.setItem("locale", newlocale);
			setI18nLanguage(i18nComposer, newlocale);
		});
		//event
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", function (e) {
				if (currenttheme.value == "sys") updateIsDark(e.matches);
			});
		///default variabble to active watcher one time
		currenttheme.value = localStorage.getItem("prefer-theme") || "sys";
		locale.value = localStorage.getItem("locale") || locale.value;
		//function
		function updateTheme() {
			currenttheme.value = listtheme.next();
		}
		const updateIsDark = (bool: Boolean) => {
			isDark.value = bool;
		};

		//provider
		provide("isDark", isDark);
		provide("currentTheme", currenttheme);
		provide("updateIsDark", updateIsDark);
		provide("updateTheme", updateTheme);
	}
};
</script>
