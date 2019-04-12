import React, {Component} from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

class RichText extends Component {
    render() {
        return this.getContent();
    }
    getContent() {
        return documentToReactComponents(this.props.children, {
            renderNode: {
                [BLOCKS.EMBEDDED_ASSET]: (node) => {
                    const {title, file} = node.data.target.fields;
                    if (!file) return null;
                    return <img alt={title}
                                className='asset img'
                                src={file.url} />
                },
                [INLINES.HYPERLINK]: (node, children) => {
                    return <a href={node.data.uri}>{children}</a>;
                }
            }
        })
    }
}

export default RichText;