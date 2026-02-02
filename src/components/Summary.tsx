/**
 * Summary component - expandable lesson summary
 * Uses React for client-side state management
 */
import { useState } from 'react';
import RichText from './RichText';
import type { Document } from '@contentful/rich-text-types';

interface SummaryProps {
    content?: Document;
}

export default function Summary({ content }: SummaryProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!content) return null;

    return (
        <section className={`Summary Content ${isExpanded ? 'expanded' : ''}`}>
            <span className="toggle" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? 'לקפל' : 'להרחיב'}
            </span>
            <h3 className="title">סיכום השיעור</h3>
            <div className="content">
                <RichText content={content} />
            </div>
        </section>
    );
}
