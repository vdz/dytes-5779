import React, { Component } from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default class    Summary extends Component {
    render() {
        return (
            <section className='Summary Content'>
                <h3 className='title'>סיכום השיעור</h3>
                <div className='content'>
                    {documentToReactComponents(this.props.content)}
                </div>
            </section>
        )
    }
}