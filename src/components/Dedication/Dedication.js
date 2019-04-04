import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


class Dedication extends React.Component {
    render() {
        if (!this.props.content) return null;
        return (
            <section className='Dedication'>
                {documentToReactComponents(this.props.content)}
            </section>
        );
    }
}

export default Dedication;