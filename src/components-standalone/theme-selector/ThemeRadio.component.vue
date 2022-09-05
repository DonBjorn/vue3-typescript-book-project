<template>
  <label role="radio" :class="cssClass">
    <i class="material-icons">{{ themeInfo.icon }}</i>
    <input type="radio" class="icon-button" name="theme" :value="themeInfo.selected" @click="onClick">
  </label>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {ThemeInfoInterface} from "./models";

export default defineComponent({
  name: "ThemeRadioComponent",
  props: {
    themeInfo: {
      type: Object as PropType<ThemeInfoInterface>
    }
  },
  computed: {
    cssClass(): string {
      const themeInfo = this.$props.themeInfo;
      return `theme-radio ${themeInfo?.id} ${themeInfo?.selected ? 'selected' : ''}`.trim();
    }
  },
  emits: ['clicked'],
  setup(props, {emit}) {
    const onClick = () => {
      emit('clicked', props.themeInfo?.id);
    }

    return {
      onClick
    };
  }
});
</script>
