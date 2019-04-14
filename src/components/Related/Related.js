import React from 'react';
import RichText from '../RichText';

class Related extends React.Component {
    render() {
        return (
            <section className='Related Content'>
                <h3 className='title'>חומרי עזר לימודיים</h3>
                <div className='content'>
                    <RichText>{this.props.content}</RichText>
                </div>
            </section>
        );
    }
}

export default Related;