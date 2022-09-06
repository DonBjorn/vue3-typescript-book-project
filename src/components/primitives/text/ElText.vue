<template>
  <component :is="tag" :class="cssClass">{{text}}</component>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ElText",
  props: {
    tag: {
      type: String,
      default: "p"
    },
    text: {
      type: String,
      default: ""
    },
    addCss: {
      type: String,
      default: ""
    },
  },
  computed: {
    cssClass(): string[] {
      const cssClasses = ['p-1'];
      const {addCss} = this;

      if ((addCss || '').trim().length > 0) {
        cssClasses.push(addCss!.trim());
      }

      return cssClasses;
    }
  }
});
</script>
