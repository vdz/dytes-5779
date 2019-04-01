import React, { Component } from 'react'

export default class ScribdContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_fullscreen : false
        }
    }
    render() {
        return (
            <section className={`Scribd ${(this.state.is_fullscreen) ? `fullscreen` : ``}`}>
                <span className='view-toggle'
                      onClick={()=>{
                          this.toggle();
                      }}>
                    {this.state.is_fullscreen ?  'תצוגה רגילה' : 'מסך  מלא'}
                </span>
                <iframe className="scribd_iframe_embed"
                      title={this.props.title}
                      src={this.props.url}
                      data-auto-height="true"
                      data-aspect-ratio="null"
                      frameBorder='0'
                      scrolling='no'
                />
            </section>
        )
    }

    toggle() {
        this.setState( {
            is_fullscreen : !this.state.is_fullscreen
        });
    }
}