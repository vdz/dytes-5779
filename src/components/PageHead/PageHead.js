import React, { Component } from 'react'
import { Link } from 'gatsby'
import { TES_PARTS } from '../../modules/tes.helper';

export default class PageHead extends Component {
  render() {
      const { book, part } = this.props;

    return (
      <section className='PageHead'>
        <header className='header'>
            <h1 className='title'>{this.props.title}</h1>
            <Link to={`/book/${book}`}>{`כרך ${TES_PARTS[book]}`}</Link>
            &nbsp;
            <Link to={`/part/${part}`}>{`חלק ${TES_PARTS[part]}`}</Link>
            &nbsp;
            {this.getSubjects()}
        </header>
            
        <div className='back-panel'>
            <Link className='back-link arrow' to='/'>→</Link>
        </div>
        <div className='next-panel'>
            <Link className='next-link arrow' to='/'>←</Link>
        </div>
      </section>
    )
  }

  getSubjects() {
      if (!this.props.subject) return null;
      const list = this.props.subject.split(',');
      const results = [];

      list.forEach(subject => {
          results.push(
              <Link key={`subject-${subject}`} to={`/subject/${subject}`} />
          )
      });

      return (
          <>
            {results}
          </>
      );

  }
}
