<template>
  <div id="app">
    <div class="long-date">{{ i18n.d((new Date()), 'long')}}</div>
    <h2>{{ i18n.t('welcome')}}</h2>
    <LocaleSelectorComponent
        :availableLocales="availableLocales"
        @clicked="onLocaleClicked"
    />
    <div id="nav">
      <router-link to="/">{{ i18n.t('navigation.home') }}</router-link> |
      <router-link to="/about">{{ i18n.t('navigation.about') }}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import {MutationType} from "@/models/store";
import {useLocalesStore} from "@/store/locales";
import {LocaleInfoInterface} from "@/models/localization/LocaleInfo.interface";
import LocaleSelectorComponent from "@/components/locale-selector/LocaleSelector.component.vue";

export default defineComponent({
  name: 'App',
  components: {LocaleSelectorComponent},

  setup(){
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

    return {
      i18n,
      availableLocales,
      onLocaleClicked,
    }
  }
});

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 10px;
  color: #2c3e50;
  h2 {
    margin: 0;
  }
}

.long-date{
  font-size: 12px;
}

#nav {
  padding: 8px 0;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
