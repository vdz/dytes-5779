import React, { Component } from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';

export default class Questions extends Component {
    render() {
        const render_options = {};
        /*{
            renderNode: {
                [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
                [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
                [BLOCKS.UL_LIST]: (node, children) => <li>{children}</li>
            }
        };*/

        return (
            <section className='Questions Content'>
                <h3 className='title'>שאלות חזרה</h3>
                <div className='content'>
                    {documentToReactComponents(this.props.content, render_options)}
                </div>
            </section>
        )
    }
}