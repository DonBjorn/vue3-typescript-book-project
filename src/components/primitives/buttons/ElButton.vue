<template>
  <button type="button" :class="cssClass" :disabled="disabled" @click="onClick">
    <span>{{ label }}</span>
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ElButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: "label text"
    },
    addCss: {
      type: String,
      default: ""
    },
  },
  emits: ['clicked'],
  methods: {
    onClick() {
      if (!this.disabled) {
        this.$emit('clicked');
      }
    }
  },
  computed: {
    cssClass(): string {
      const cssClasses = ['font-bold py-1 px-2 border rounded'];

      if (this.disabled) {
        cssClasses.push('bg-gray-500 text-gray-300 opacity-50 cursor-not-allowed');
      } else {
        cssClasses.push('bg-blue-500 text-white hover:bg-blue-400');
      }

      const {addCss} = this;
      if ((addCss || '').trim().length > 0) {
        cssClasses.push(addCss!.trim());
      }

      return cssClasses.join(' ');
    }
  }
});
</script>
