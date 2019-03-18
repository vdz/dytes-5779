import React, { Component } from 'react'

export default class ScribdContainer extends Component {
  render() {
    return (
        <section className='Scribd'>
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
}