<template>
  <label
      role="radio"
      class="locale-radio"
      :class="{selected: localeInfo.selected}"
  >
    <i class="flag-icons" :class="[localeInfo.flag]"/>
    <input
        type="radio"
        class="icon-button"
        name="locale"
        :value="localeInfo.selected"
        @click="onClick"
    />
  </label>
</template>

<script lang="ts">

import {defineComponent, reactive, computed, ref, onMounted} from "vue";
import {useI18n} from "vue-i18n";
import {LocaleInfoInterface} from "@/models/localization/LocaleInfo.interface";
import {i18n} from "@/plugins/vue-i18n-next-plugin";

export default defineComponent({
  props: {
    localeInfo: {
      type: Object as () => LocaleInfoInterface,
    },
  },
  emits: ['clicked'],
  setup(props, {emit}) {
    const i18n = useI18n();

    const onClick = () => {
      emit('clicked', props.localeInfo);
    }

    return {
      onClick,
    }
  }
})
</script>
