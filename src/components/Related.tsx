/**
 * Related component - renders related learning materials
 */
import RichText from './RichText';
import type { Document } from '@contentful/rich-text-types';

interface RelatedProps {
    content?: Document;
}

export default function Related({ content }: RelatedProps) {
    if (!content) return null;

    return (
        <section className="Related Content">
            <h3 className="title">חומרי עזר לימודיים</h3>
            <div className="content">
                <RichText content={content} />
            </div>
        </section>
    );
}
