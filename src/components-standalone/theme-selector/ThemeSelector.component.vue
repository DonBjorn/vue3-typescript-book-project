<template>
  <div class="theme-selector">
    <div class="theme-radio-group">
      <ThemeRadioComponent v-for="(theme, index) in themes" :key="index" :theme-info="theme" @clicked="changeTheme"/>
    </div>
  </div>
</template>

<script lang="ts">
import ThemeRadioComponent from "./ThemeRadio.component.vue";
import {defineComponent, onMounted, PropType} from "vue";
import {ThemeInfoInterface} from "./models";
import {LocalStorageKeys} from "./store-models";
import {Store} from "./ThemesStore";

export default defineComponent({
  name: "ThemeSelectorComponent",
  components: {ThemeRadioComponent},
  props: {
    availableThemes: {
      type: Array as PropType<ThemeInfoInterface[]>,
      default: [],
    }
  },
  computed: {
    themes: () => Store.state.themes,
  },
  emits: ['themeClicked', 'themeChanged'],
  setup(props, {emit}) {
    const changeTheme = (themeId: string) => {
      emit('themeClicked', themeId);
      Store.actions.selectTheme(themeId);
      emit('themeChanged', themeId);
    }

    onMounted(() => {
      const availableThemes = props.availableThemes ?? [];

      Store.actions.loadThemes(availableThemes);

      const userPreferredThemeId: string = localStorage.getItem(LocalStorageKeys.theme) || '';
      if (userPreferredThemeId.length > 0) {
        changeTheme(userPreferredThemeId);
      } else if (availableThemes.length > 0) {
        const selected = availableThemes?.find(item => item.selected);
        if (selected) {
          changeTheme(selected.id);
        } else {
          changeTheme(availableThemes[0].id);
        }
      }
    });

    return {
      changeTheme
    }
  }
});
</script>