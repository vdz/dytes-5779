/**
 * RichText component - renders Contentful rich text with embedded assets
 */
import { documentToReactComponents, type Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, type Document } from '@contentful/rich-text-types';

interface RichTextProps {
    content: Document | undefined;
}

export default function RichText({ content }: RichTextProps) {
    if (!content) return null;

    const options: Options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { title, file } = node.data.target.fields;
                if (!file) return null;
                return <img alt={title} className="asset img" src={file.url} />;
            },
            [INLINES.HYPERLINK]: (node, children) => {
                return <a href={node.data.uri}>{children}</a>;
            },
            [INLINES.ASSET_HYPERLINK]: (node, children) => {
                return (
                    <a
                        href={node.data.target.fields.file.url}
                        title={node.data.target.fields.file.title}
                    >
                        {children}
                    </a>
                );
            },
        },
    };

    return <>{documentToReactComponents(content, options)}</>;
}
