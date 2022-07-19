import {LocaleMessages, VueMessageType} from "vue-i18n";

export interface LocalesDataInterface {
    datetimeFormats: any,
    numberFormats: any,
    messages: LocaleMessages<VueMessageType>
}