import {
    defineConfig,
    presetIcons,
    presetUno,
    presetWind,
    transformerDirectives,
} from 'unocss'

// import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
    shortcuts: [
        { 'i-logo': 'i-logos-astro w-6em h-6em transform transition-800' },
    ],
    transformers: [
        transformerDirectives(),
    ],
    presets: [
        presetUno(),
        // presetForms(),
        presetWind(),
        presetIcons({
            extraProperties: {
            'display': 'inline-block',
            // 'vertical-align': 'middle',
            },
        }),
    ],
})