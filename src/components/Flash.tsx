/**
 * Flash component - individual news item
 */
import RichText from './RichText';
import type { Document } from '@contentful/rich-text-types';

interface FlashProps {
    title: string;
    body?: Document;
    author?: string;
    publish_date: string;
}

function formatDate(date: Date): string {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')} (זמן ישראל)`;
}

export default function Flash({ title, body, author, publish_date }: FlashProps) {
    const dt = new Date(publish_date);

    return (
        <div className="Flash">
            <h3 className="subject">{title}</h3>
            <div className="body">
                <RichText content={body} />
            </div>
            <span className="author">{author}</span>
            &nbsp;
            <span className="date">&mdash; {formatDate(dt)}</span>
        </div>
    );
}
