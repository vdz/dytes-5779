import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

class Related extends React.Component {
    render() {
        return (
            <section className='Related Content'>
                <h3 className='title'>חומרי עזר לימודיים</h3>
                <div className='content'>
                    {documentToReactComponents(this.props.content)}
                </div>
            </section>
        );
    }
}

export default Related;