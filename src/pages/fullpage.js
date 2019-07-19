import React, { Component } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import ScribdContainer from '../components/Scribd/ScribdContainer';
import PageHead from '../components/PageHead/PageHead';

import '../styles/index.scss';

class Fullpage extends Component{

	render() {
		const { 
			index, 
			title, 
			book, 
			part,
			summary,
			subject,
			pages,
			pageSourceUrl_Scribd,
			videoId_YouTube,
			audioDownloadUrl,
			questions
		} = this.props.pageContext.page;

		return (
			<section className='DYTES'>
				<header className='Header'></header>
				<section className='Page'>
					<div className='toolbar'>
						<PageHead index={index} 
							title={title}
							book={book} 
							part={part} 
							pages={pages}
							subject={subject} />
					</div>
					<div className='material'>
						<Summary content={Summary} />{documentToReactComponents(summary)}
						{documentToReactComponents(questions)}
					</div>
					<div className='pdf'>
						<ScribdContainer title={title} url={pageSourceUrl_Scribd} />
					</div>
					<div className='related'>
						...
					</div>
				</section>
				
			</section>
		);
	}
}

export default Fullpage;

