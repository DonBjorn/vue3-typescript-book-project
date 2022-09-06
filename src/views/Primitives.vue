<template>
  <div class="about">
    <ElText tag="h1" add-css="text-gray-500" text="Primitives"/>

    <ElText tag="h2" add-css="text-gray-500" text="ElText examples:"/>
    <div class="p-6 border">
      <ElText tag="h2" addCss="text-red-500" text="Here ElText will render a <h2> element"/>
      <ElText tag="p" addCss="text-red-700" text="Here ElText will render a <p> element"/>
    </div>

    <ElText tag="h2" add-css="text-gray-500" text="ElButton examples:"/>
    <div class="p-6 border">
      <ElButton :disabled="false" label="This is a button" @clicked="onButtonClick('first')"/>
      <ElButton :disabled="true" label="This is a disabled button" addCss="ml-2" @clicked="onButtonClick('second')"/>
    </div>

    <ElText tag="h2" add-css="text-gray-500" text="ElToggle examples:"/>
    <div class="p-6 border">
      <ElToggle :checked="toggleButtonsState.state.find(x => x.key === 'a').checked" :disabled="false"
                @clicked="onToggleClicked('a')"/>
      <ElToggle :checked="toggleButtonsState.state.find(x => x.key === 'b').checked" :disabled="true" add-css="ml-2"
                @clicked="onToggleClicked('b')"/>
      <ElToggle :checked="toggleButtonsState.state.find(x => x.key === 'c').checked" :disabled="false" add-css="ml-2"
                @clicked="onToggleClicked('c')"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import ElText from "@/components/primitives/text/ElText.vue";
import ElButton from "@/components/primitives/buttons/ElButton.vue";
import ElToggle from "@/components/primitives/toggles/ElToggle.vue";

export default defineComponent({
  name: "Primitives",
  components: {
    ElText,
    ElButton,
    ElToggle
  },
  setup() {
    const toggleButtonsState = reactive({
      state: [
        {
          key: 'a',
          checked: true,
        },
        {
          key: 'b',
          checked: false,
        },
        {
          key: 'c',
          checked: false,
        }
      ]
    })

    const onButtonClick = (key: string) => {
      console.log('clicked button', key);
    }

    const onToggleClicked = (key: string) => {
      console.log('clicked toggle', key);
      const stateItem = toggleButtonsState.state.find(x => x.key === key);
      if (stateItem) {
        stateItem.checked = !stateItem.checked;
      }
    }

    return {
      toggleButtonsState,
      onButtonClick,
      onToggleClicked
    }
  }
});
</script>

<style scoped>

</style>