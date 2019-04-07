import React, { Component } from 'react';
import { Link } from 'gatsby';
import YouTube from 'react-youtube';

export default class Video extends Component {
    render() {
        const youtube_url = `https://www.youtube.com/watch?v=${this.props.content}`;

        return (
            <section className='Video Content'>
                <h3 className='title'>{this.props.title}</h3>
                <div className='content'>
                    <YouTube videoId={this.props.content}
                             className='video'
                             containerClassName='video-wrapper'
                             opts={{height : '', width : ''}} />
                </div>
            </section>
        )
    }
}
