import {createI18n, LocaleMessages, VueMessageType} from 'vue-i18n';
import {match} from "sinon";

interface LocalesDataInterface {
    messages: LocaleMessages<VueMessageType>
}

/**
 * @name getLocalesData
 * @description "Helper" que cargará los archivos JSON de localización
 */
export function getLocalesData(): LocalesDataInterface {
    // usa require.context para cargar todos los archivos JSON de localización
    const files = (require as any).context('./locales', true, /[A-Za-z\d-_,\s]+\.json$/);

    // crea la instancia que contrndrá los datos cargados
    const localesData: LocalesDataInterface = {
        messages: {}
    }

    // itera sobre todos los archivos
    const keys: string[] = files.keys();
    keys.forEach((key: string) => {
        // extrae el nombre del archivo sin extensión
        const matched = key.match(/([A-Za-z\d-_]+)\./i);

        console.log("Matched", matched);

        if (matched && matched.length > 1) {
            const localeId = matched[1];
            // Por cada archivo, guarda los mensajes en la propiedad de messages correspondiente
            localesData.messages[localeId] = files(key).messages;
        }
    });

    return localesData;
}

// Carga los datos dinamicamente
const data: LocalesDataInterface = getLocalesData();

export const i18n = createI18n({
    locale: 'es-ES',
    fallbackLocale: 'en-US',
    messages: data.messages,
});
