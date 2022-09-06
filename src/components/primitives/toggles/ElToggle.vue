<template>
<button type="button" :class="cssClass" @click="onClick">
  <span :class="innerCssClass"/>
</button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ElToggle",
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    addCss: {
      type: String,
      default: ""
    }
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
      const cssClasses = ['relative inline-flex flex-shrink-0 h-6 w-12 border-1 rounded-full cursor-pointer transition-colors duration-200 focus:outline-none'];

      if (this.checked) {
        cssClasses.push('bg-green-400');
      } else {
        cssClasses.push('bg-gray-300');
      }

      if (this.disabled) {
        cssClasses.push('opacity-50 cursor-not-allowed');
      }

      const {addCss} = this;
      if ((addCss || '').trim().length > 0) {
        cssClasses.push(addCss!.trim());
      }

      return cssClasses.join(' ');
    },
    innerCssClass(): string {
      const cssClasses = ['bg-white shadow pointer-events-none inline-block h-6 w-6 rounded-full transform ring-0 transition duration-200'];

      if (this.checked) {
        cssClasses.push('translate-x-6');
      } else {
        cssClasses.push('translate-x-0');
      }

      return cssClasses.join(' ');
    }
  }
});
</script>
