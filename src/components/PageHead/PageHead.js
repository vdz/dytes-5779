import React, { Component } from 'react'
import { Link } from 'gatsby'
import { TES_PARTS } from '../../modules/tes.helper';

export default class PageHead extends Component {
  render() {
    return (
      <section className='PageHead'>
        <header className='header'>
            <h1 className='title'>{this.props.title}</h1>
            <Link to='/'>כרך</Link>
            &nbsp;
            <Link to='/'>חלק</Link>
            &nbsp;
            <Link to='/'>נושאים</Link>
        </header>
            
        <div className='back-panel'>
            <Link className='back-link arrow' to='/'>→</Link>
            &nbsp;
            <Link className='archive-link' to='/'>ארכיון שיעורים</Link>
        </div>
        <div className='next-panel'>
            <Link className='next-link arrow' to='/'>←</Link>
            &nbsp;
            <span>הירשם לניוזלטר</span>
        </div>
      </section>
    )
  }
}
