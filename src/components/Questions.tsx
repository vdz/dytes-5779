/**
 * Questions component - renders review questions
 */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';

interface QuestionsProps {
    content?: Document;
}

export default function Questions({ content }: QuestionsProps) {
    if (!content) return null;

    return (
        <section className="Questions Content">
            <h3 className="title">שאלות חזרה</h3>
            <div className="content">{documentToReactComponents(content)}</div>
        </section>
    );
}
