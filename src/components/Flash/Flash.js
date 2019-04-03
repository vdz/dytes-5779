import React, {Component} from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


class Flash extends Component {
    render() {
        const dt = new Date(this.props.publish_date);
        return (
            <div className='Flash'>
                <h3 className='subject'>{this.props.title}</h3>
                <div className='body'>{documentToReactComponents(this.props.body, {})}</div>
                <span className='date'>{}</span>
                <span className='author'>{this.props.author}</span>
            </div>
        );
    }
}

export default Flash;