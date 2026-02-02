/**
 * Dedication component - renders page dedication
 */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';

interface DedicationProps {
    content?: Document;
}

export default function Dedication({ content }: DedicationProps) {
    if (!content) return null;

    return (
        <section className="Dedication">
            {documentToReactComponents(content)}
        </section>
    );
}
