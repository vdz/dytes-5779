import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


class Dedication extends React.Component {
    render() {
        return (
            <section className='Dedication'>
                {documentToReactComponents(this.props.content)}
            </section>
        );
    }
}

export default Dedication;