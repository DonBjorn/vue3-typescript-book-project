<template>
  <ElBaseCard :class="cssClasses">
    <ElWidgetHeaderComponent
        :id="id"
        headerText="Orders Widget"
        @close="onCloseClick"
    />
    <div class="card-body p4">
      Order Widget
      <ul>
        <li>Order 1</li>
        <li>Order 2</li>
        <li>...</li>
      </ul>
    </div>
  </ElBaseCard>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ElBaseCard from "@/components/primitives/cards/ElBaseCard.vue";
import BaseWidgetComponent from "@/components/widgets-container/BaseWidget.component.vue";
import ElWidgetHeaderComponent from "@/components/primitives/cards/ElWidgetHeader.component.vue";

export default defineComponent({
  extends: BaseWidgetComponent,
  name: "OrdersWidgetComponent",
  components: {ElWidgetHeaderComponent, ElBaseCard, BaseWidgetComponent}
});
</script>
