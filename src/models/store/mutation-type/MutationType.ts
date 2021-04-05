import {ItemsMutationType} from "@/models/store/items/ItemMutationType";
import {LocalesMutationType} from "@/models/store/locales/LocaleMutationType";

export namespace MutationType {
    export const items = ItemsMutationType;
    export const locales = LocalesMutationType;
}
