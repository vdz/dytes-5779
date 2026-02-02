/**
 * Contentful API Client
 * Fetches pages, config, and flashes from Contentful CMS
 */
import * as contentfulModule from 'contentful';

// Handle CommonJS default export in ESM context
const contentful = (contentfulModule as any).default || contentfulModule;

const client = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

// Type definitions for Contentful content
export interface PageFields {
    index: number;
    title: string;
    book?: number;
    part?: number;
    summary?: any; // Contentful rich text
    subject?: string;
    pages?: string;
    pageSourceUrl_Scribd?: string;
    videoId_YouTube?: string;
    summary_videoId_YouTube?: string;
    audioDownloadUrl?: string;
    questions?: any; // Contentful rich text
    related?: any; // Contentful rich text
    dedication?: any; // Contentful rich text
}

export interface SiteConfigFields {
    currentPageIndex: number;
}

export interface FlashFields {
    page_index: number;
    title: string;
    body: any; // Contentful rich text
    author?: string;
    publish_date: string;
    order?: number;
}

export interface PageSkeleton extends EntrySkeletonType {
    contentTypeId: 'page';
    fields: PageFields;
}

export interface SiteConfigSkeleton extends EntrySkeletonType {
    contentTypeId: 'siteConfig';
    fields: SiteConfigFields;
}

export interface FlashSkeleton extends EntrySkeletonType {
    contentTypeId: 'flash';
    fields: FlashFields;
}

/**
 * Fetch all pages ordered by index
 */
export async function getPages(): Promise<EntryCollection<PageSkeleton>> {
    return client.getEntries<PageSkeleton>({
        content_type: 'page',
        limit: 1000,
        order: ['fields.index'],
    });
}

/**
 * Fetch site configuration
 */
export async function getConfig(): Promise<EntryCollection<SiteConfigSkeleton>> {
    return client.getEntries<SiteConfigSkeleton>({
        content_type: 'siteConfig',
    });
}

/**
 * Fetch flashes for a specific page index
 */
export async function getFlashes(pageIndex: number): Promise<EntryCollection<FlashSkeleton>> {
    return client.getEntries<FlashSkeleton>({
        content_type: 'flash',
        'fields.page_index': pageIndex,
        order: ['-fields.order', '-fields.publish_date'],
    });
}

/**
 * Process pages into groups by TES part
 */
export function processIndexData(pages: EntryCollection<PageSkeleton>) {
    const parts: Record<number, PageFields[]> = {};
    const titles: Record<number, string> = {};

    pages.items.forEach((item) => {
        const page = item.fields;
        const part = page.part ?? 0;

        if (!titles[part]) {
            titles[part] = page.title;
        }

        if (!parts[part]) {
            parts[part] = [];
        }

        parts[part].push(page);
    });

    return { pages_by_parts: parts, titles };
}
