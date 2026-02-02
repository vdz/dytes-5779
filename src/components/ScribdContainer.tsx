/**
 * ScribdContainer component - PDF viewer with fullscreen toggle
 * Uses React for client-side state management
 */
import { useState } from 'react';

interface ScribdContainerProps {
    title: string;
    url?: string;
}

export default function ScribdContainer({ title, url }: ScribdContainerProps) {
    const [isFullscreen, setIsFullscreen] = useState(false);

    if (!url) return null;

    return (
        <section className={`Scribd ${isFullscreen ? 'fullscreen' : ''}`}>
            <span className="view-toggle" onClick={() => setIsFullscreen(!isFullscreen)}>
                {isFullscreen ? 'תצוגה רגילה' : 'מסך  מלא'}
            </span>
            <iframe
                className="scribd_iframe_embed"
                title={title}
                src={url}
                data-auto-height="true"
                data-aspect-ratio="null"
                frameBorder={0}
                scrolling="no"
            />
        </section>
    );
}
