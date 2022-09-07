<template>
  <div id="app">
    <div class="long-date">{{ i18n.d((new Date()), 'long') }}</div>
    <h2>{{ i18n.t('welcome') }}</h2>
    <LocaleSelectorComponent
        :availableLocales="availableLocales"
        @clicked="onLocaleClicked"
    />
    <ThemeSelectorComponent :available-themes="availableThemes"/>
    <div id="nav">
      <router-link to="/">{{ i18n.t('navigation.home') }}</router-link>
      |
      <router-link to="/about">{{ i18n.t('navigation.about') }}</router-link>
      |
      <router-link to="/primitives">Primitives</router-link>
      |
      <router-link to="/playground">Widgets Playground</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue';
import {useI18n} from 'vue-i18n';
import {MutationType} from "@/models/store";
import {useLocalesStore} from "@/store/locales";
import {LocaleInfoInterface} from "@/models/localization/LocaleInfo.interface";
import LocaleSelectorComponent from "@/components/locale-selector/LocaleSelector.component.vue";
import {ThemeSelectorComponent} from "my-component-library";
import {config} from "@/config";

export default defineComponent({
  name: 'App',
  components: {LocaleSelectorComponent, ThemeSelectorComponent},
  setup() {
    const i18n = useI18n();
    const localesStore = useLocalesStore();

    const availableLocales = computed(() => {
      return localesStore.state.availableLocales;
    });

    const onLocaleClicked = (localeInfo: LocaleInfoInterface) => {
      localesStore.action(
          MutationType.locales.selectLocale,
          localeInfo.locale
      );
    }

    const availableThemes = config.themes;

    return {
      i18n,
      availableLocales,
      onLocaleClicked,
      availableThemes,
    }
  }
});

</script>

