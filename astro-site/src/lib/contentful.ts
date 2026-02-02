import contentful from 'contentful';

const space = import.meta.env.CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  console.warn('Contentful credentials not set. Using dummy data.');
}

const client = contentful.createClient({
  space: space || 'dummy',
  accessToken: accessToken || 'dummy',
});

export async function getAllPages() {
  try {
    const entries = await client.getEntries({
      content_type: 'lessonPage',
      order: 'fields.index',
    });
    return entries.items.map(item => ({
      ...item.fields,
      contentfulId: item.sys.id,
    }));
  } catch (e) {
    console.error('Contentful error:', e);
    return [];
  }
}

export async function getCurrentConfig() {
  try {
    const entries = await client.getEntries({
      content_type: 'config',
      limit: 1,
    });
    return entries.items[0]?.fields;
  } catch (e) {
    return { currentPageIndex: 1 };
  }
}
