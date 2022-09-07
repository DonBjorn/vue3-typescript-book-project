import CustomersWidgetComponent from "./CustomersWidget.component.vue";
import OrdersWidgetComponent from "./OrdersWidget.component.vue";
import ItemsListWidgetComponent from "./ItemsListWidget.component.vue";

const widgetscatalog = new Map<string, any>();
widgetscatalog.set("customers", CustomersWidgetComponent);
widgetscatalog.set("orders", OrdersWidgetComponent);
widgetscatalog.set("items", ItemsListWidgetComponent);

export const WidgetsCatalog = widgetscatalog;
