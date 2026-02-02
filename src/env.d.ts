/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly CONTENTFUL_SPACE: string;
    readonly CONTENTFUL_DELIVERY_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
