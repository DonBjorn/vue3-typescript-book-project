<template>
  <ElBaseCard :class="cssClasses">
    <ElWidgetHeaderComponent
        :id="id"
        headerText="Items List Widget"
        @close="onCloseClick"
    />
    <div class="card-body p-4">
      <ul v-show="!loading" class="bg-white">
        <ItemComponent v-for="(item, index) in items"
                       :key="item.id"
                       :is-last="index === items.length - 1"
                       :model="item"
                       @select="onItemSelect"
        />
      </ul>
      <LoaderComponent v-show="loading" class="h-24"/>
    </div>
  </ElBaseCard>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted} from "vue";
import ElBaseCard from "@/components/primitives/cards/ElBaseCard.vue";
import ItemComponent from "@/components/items/children/Item.component.vue";
import LoaderComponent from "@/components/shared/Loader.component.vue";
import BaseWidgetComponent from "@/components/widgets-container/BaseWidget.component.vue";
import {useI18n} from "vue-i18n";
import {ItemInterface} from "@/models/items/Item.interface";
import {useItemsStore} from "@/store/items";
import {MutationType} from "@/models/store";
import ElWidgetHeaderComponent from "@/components/primitives/cards/ElWidgetHeader.component.vue";

export default defineComponent({
  extends: BaseWidgetComponent,
  name: "ItemsListWidgetComponent",
  components: {ElWidgetHeaderComponent, LoaderComponent, ItemComponent, ElBaseCard},
  setup(){
    const i18n = useI18n();

    const itemsStore = useItemsStore();
    const items = computed(() => itemsStore.state.items);
    const loading = computed(() => itemsStore.state.loading);

    onMounted(() => {
      itemsStore.action(MutationType.items.loadItems);
    })

    const onItemSelect = (item: ItemInterface) => {
      itemsStore.action(MutationType.items.selectItem, {
        id: item.id,
        selected: !item.selected,
      });
    };

    return {
      i18n,
      items,
      loading,
      onItemSelect
    };
  }
});
</script>
