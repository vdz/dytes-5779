/**
 * Contentful Management API Client
 * For creating entries (feedback, user registration)
 */

const SPACE_ID = 'fafa9r2vgt87';
const MANAGEMENT_TOKEN = 'CFPAT-bb5a484e8705d8d69ae5d940383fc32814b573b412d942c9cceac6c044e908b8';
const DEFAULT_LOCALE = 'en-US';

interface EntryPayload {
    [key: string]: any;
}

/**
 * Add an entry to Contentful
 * Used for feedback and user registration submissions
 */
export async function addEntry(type: string, payload: EntryPayload): Promise<any> {
    if (!type || !payload) return;

    const fields: Record<string, Record<string, any>> = {};

    Object.keys(payload).forEach((name) => {
        fields[name] = {
            [DEFAULT_LOCALE]: payload[name],
        };
    });

    try {
        const response = await fetch(
            `https://api.contentful.com/spaces/${SPACE_ID}/environments/master/entries`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${MANAGEMENT_TOKEN}`,
                    'Content-Type': 'application/vnd.contentful.management.v1+json',
                    'X-Contentful-Content-Type': type,
                },
                body: JSON.stringify({ fields }),
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to create entry: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error creating entry:', error);
        throw error;
    }
}
