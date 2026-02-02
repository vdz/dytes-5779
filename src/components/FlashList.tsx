/**
 * FlashList component - loads and displays flashes for a page
 * Uses React for client-side data fetching
 */
import { useState, useEffect } from 'react';
import Flash from './Flash';
import { DISPLAY_MODES } from '../lib/ui-display-modes';

interface FlashItem {
    sys: { id: string };
    fields: {
        title: string;
        body?: any;
        author?: string;
        publish_date: string;
    };
}

interface FlashListProps {
    index: number;
    spaceId: string;
    accessToken: string;
}

const MODE_NAMES = ['normal', 'processing', 'error', 'done', 'active'];

export default function FlashList({ index, spaceId, accessToken }: FlashListProps) {
    const [flashes, setFlashes] = useState<FlashItem[]>([]);
    const [mode, setMode] = useState(DISPLAY_MODES.normal);

    useEffect(() => {
        setMode(DISPLAY_MODES.processing);

        fetch(
            `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}&content_type=flash&fields.page_index=${index}&order=-fields.order,-fields.publish_date`
        )
            .then((res) => res.json())
            .then((data) => {
                setFlashes(data.items || []);
                setMode(DISPLAY_MODES.done);
            })
            .catch(() => {
                setMode(DISPLAY_MODES.error);
            });
    }, [index, spaceId, accessToken]);

    const getLoader = () => {
        switch (mode) {
            case DISPLAY_MODES.processing:
                return <div className="Loader processing">מחפש מבזקים ...</div>;
            case DISPLAY_MODES.error:
                return <div className="Loader error">לא הצלחנו להביא עדכונים.</div>;
            case DISPLAY_MODES.done:
                if (!flashes.length) return 'אין מבזקים לפי שעה';
                return null;
            default:
                return null;
        }
    };

    const getFlashes = () => {
        if (!flashes.length) return '...';
        return flashes.map((item) => (
            <Flash key={`flash-${item.sys.id}`} {...item.fields} />
        ));
    };

    return (
        <section className={`FlashList Content ${MODE_NAMES[mode]}`}>
            <h3 className="title">מבזקים</h3>
            <div className="content">
                {getLoader()}
                {getFlashes()}
            </div>
        </section>
    );
}
