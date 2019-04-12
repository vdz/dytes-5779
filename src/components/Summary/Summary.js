import React, { Component } from 'react'
import RichText from '../RichText';

export default class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_expanded : false
        }
    }
    render() {
        return (
            <section className={`Summary Content ${this.state.is_expanded ? `expanded` : ``}`}>
                <span className='toggle'
                      onClick={() => {this.toggleView()}}>
                    {this.state.is_expanded ? `לקפל` : `להרחיב`}
                </span>
                <h3 className='title'>סיכום השיעור</h3>
                <div className='content'>
                    <RichText>{this.props.content}</RichText>
                </div>
            </section>
        )
    }

    toggleView() {
        this.setState({ is_expanded : !this.state.is_expanded });
    }
}