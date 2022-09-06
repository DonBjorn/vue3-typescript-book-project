import {createI18n} from 'vue-i18n';
import {LocalesDataInterface} from "@/plugins/vue-i18n-next-plugin/LocalesData.interface";

/**
 * @name getLocalesData
 * @description "Helper" que cargará los archivos JSON de localización
 */
export function getLocalesData(): LocalesDataInterface {
    // usa require.context para cargar todos los archivos JSON de localización
    const files = (require as any).context('./locales', true, /[A-Za-z\d-_,\s]+\.json$/);

    // crea la instancia que contrndrá los datos cargados
    const localesData: LocalesDataInterface = {
        datetimeFormats: {},
        numberFormats: {},
        messages: {}
    }

    // itera sobre todos los archivos
    const keys: string[] = files.keys();
    keys.forEach((key: string) => {
        // extrae el nombre del archivo sin extensión
        const matched = key.match(/([A-Za-z\d-_]+)\./i);

        if (matched && matched.length > 1) {
            const localeId = matched[1];
            // Por cada archivo
            // Establece el formato de fechas de la propiedad dateTimeFormats correspondiente
            localesData.datetimeFormats[localeId] = files(key).datetimeFormats;
            // Establece el formato de números de la propiedad numberFormats correspondiente
            localesData.numberFormats[localeId] = files(key).numberFormats;
            // Guarda los mensajes en la propiedad de messages correspondiente
            localesData.messages[localeId] = files(key).messages;
        }
    });

    return localesData;
}

// Carga los datos dinamicamente
const data: LocalesDataInterface = getLocalesData();

export const i18n = createI18n({
    locale: 'it-IT',
    fallbackLocale: 'en-US',
    datetimeFormats: data.datetimeFormats,
    numberFormats: data.numberFormats,
    messages: data.messages
});
