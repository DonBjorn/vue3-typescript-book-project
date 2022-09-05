<template>
  <li :class="cssClass" @click="onClick">
    <div class="selected-indicator">*</div>
    <div class="name">{{ model.name }}</div>
  </li>
</template>

<script lang="ts">

import { defineComponent, computed, PropType } from 'vue'
import { ItemInterface } from '@/models/items/Item.interface'

export default defineComponent({
  name: 'ItemComponent',
  props: {
    model: {
      type: Object as PropType<ItemInterface>
    }
  },
  emits: ['select'],
  setup(props, { emit }) {
    const cssClass = computed(() => {
      let css = 'item'
      console.log(props.model?.selected);
      if (props.model?.selected) {
        css += ' selected'
      }
      return css.trim()
    })
    const onClick = () => {
      emit('select', props.model)
    }
    return {cssClass, onClick}
  }
})
</script>
