import React, { Component } from 'react'
import { Link } from 'gatsby'
import { TES_PARTS } from '../../modules/tes.helper';

export default class PageHead extends Component {
  render() {
    return (
      <section className='PageHead'>
        <header className='header'>
            <h1 className='title'>{this.props.title}</h1>
            {this.getNavigation()}
        </header>
            
        <div className='back-panel'>
            {this.getPrev()}
        </div>
        <div className='next-panel'>
            {this.getNext()}
        </div>
      </section>
    )
  }

  getNavigation() {
      return null;

      const { book, part } = this.props;

      return (
          <div className='nav'>
              {<Link to={`/book/${book}`}>{`כרך ${TES_PARTS[book]}`}</Link>}
              &nbsp;
              {<Link to={`/part/${part}`}>{`חלק ${TES_PARTS[part]}`}</Link>}
              &nbsp;
              {this.getSubjects()}
          </div>
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

      return <>{results}</>;
  }

    getPrev() {
        if (!this.props.prev_index) return null;
        return (
            <Link className='next-link arrow' to={`/page/${this.props.prev_index}`}>
                →
            </Link>
        );
    }

  getNext() {
      if (!this.props.next_index || this.props.next_index > this.props.current_index) return null;
      return (
          <Link className='next-link arrow' to={`/page/${this.props.next_index}`}>
            ←
          </Link>
      );
  }
}
