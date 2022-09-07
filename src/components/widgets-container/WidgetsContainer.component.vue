<template>
  <div :class="cssClasses">
    <ElText tag="h5" :text="`WidgetsContainer ${title}`"/>
    <div class="container-body">
      <template v-for="(widgetInfo, index) in widgets" :key="index">
        <component
            :is="widgetInfo.component"
            v-bind="widgetInfo.props"
            @close="onCloseChild"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, computed} from "vue";
import ElText from "@/components/primitives/text/ElText.vue";
import {StoreInterface, StateInterface, WidgetInfoInterface} from "./models";
import {Store} from "./store/Store";

const state: StateInterface = reactive({
  widgets: [] as WidgetInfoInterface[],
  addingWidget: false,
  removingWidget: false,
});
const store: StoreInterface = new Store(state);

export default defineComponent({
  name: "WidgetsContainerComponent",
  components: {ElText},
  props: {
    containerId: {
      type: Number,
      default: -1,
    },
    title: {
      type: String,
      default: 'not-set'
    },
    addCss: {
      type: String,
      default: ''
    },
  },
  setup(props){
    const cssClasses = computed((): string => {
      const arr: string[] = ['widgets-container'];

      const addCss = (props.addCss || '').trim();
      if (addCss) {
        arr.push(addCss);
      }

      return arr.join(' ');
    });

    const widgets = computed((): WidgetInfoInterface[] => {
      return (store.state.widgets || []).filter((widgetInfo: WidgetInfoInterface) => {
        return widgetInfo.containerId === props.containerId;
      });
    });

    const addWidget = (childInfo: WidgetInfoInterface) => {
      console.log('addWidget', childInfo);
      store.actions.addWidget(childInfo);
    }

    const removeWidgetById = (id: number) => {
      console.log('removeWidgetById', id);
      store.actions.removeWidgetById(id);
    }

    const onCloseChild = (id: number) => {
      console.log('onCloseChild', id);
      removeWidgetById(id);
    }

    return {
      cssClasses,
      widgets,
      addWidget,
      removeWidgetById,
      onCloseChild,
    };
  }
});
</script>
