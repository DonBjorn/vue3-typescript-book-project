<template>
  <ElBaseCard :class="cssClasses">
    <ElWidgetHeaderComponent
        :id="id"
        headerText="Customer Widget"
        @close="onCloseClick"
    />
    <div class="card-body p-4">
      <div>
        Customer widget
      </div>
    </div>
  </ElBaseCard>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import ElBaseCard from "@/components/primitives/cards/ElBaseCard.vue";
import BaseWidgetComponent from "@/components/widgets-container/BaseWidget.component.vue";
import ElWidgetHeaderComponent from "@/components/primitives/cards/ElWidgetHeader.component.vue";

export default defineComponent({
  extends: BaseWidgetComponent,
  name: "CustomersWidgetComponent",
  components: {
    ElWidgetHeaderComponent,
    ElBaseCard,
    BaseWidgetComponent
  }
});
</script>
