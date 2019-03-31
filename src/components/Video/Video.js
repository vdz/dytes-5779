import React, { Component } from 'react';
import { Link } from 'gatsby';
import YouTube from 'react-youtube';

export default class Video extends Component {
    render() {
        const youtube_url = `https://www.youtube.com/watch?v=${this.props.content}`;

        return (
            <section className='Video Content'>
                <div className='content'>
                    <YouTube videoId={this.props.content}
                             className='video'
                             containerClassName='video-wrapper'
                             opts={{height : '', width : ''}} />
                    <Link to={youtube_url}>הערוץ השיעורים שלנו ביוטוב</Link>
                </div>
            </section>
        )
    }
}
