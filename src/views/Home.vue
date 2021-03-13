<template>
  <div class="home">
    <ItemsListComponent :items="items" :loading="loading" @selectItem="onSelectItem"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed, onMounted} from 'vue';

import {useItemsStore} from "@/store/items";
import ItemsListComponent from '@/components/items/ItemsList.component.vue';
import {ItemInterface} from "@/models/items/Item.interface";
import {MutationType, StoreModuleNames} from "@/models/store";

export default defineComponent({
  name: 'Home',
  components: {
    ItemsListComponent,
  },
  setup() {
    const itemsStore = useItemsStore();
    const items = computed(() => {return itemsStore.state.items});
    const loading = computed(() => {return itemsStore.state.loading});

    onMounted(() => {
      // store.dispatch(`${StoreModuleNames.itemsState}/${MutationType.items.loadItems}`);
      itemsStore.action(MutationType.items.loadItems);
    })

    const onSelectItem = (item: ItemInterface) => {
      // store.dispatch(MutationType.items.selectItem, {
      //   id: item.id,
      //   selected: !item.selected,
      // })
      itemsStore.action(MutationType.items.selectItem, {
        id: item.id,
        selected: !item.selected,
      });
    };

    return { items, loading, onSelectItem };
  }
});
</script>
