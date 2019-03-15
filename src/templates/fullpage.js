import React, { Component } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import '../styles/index.scss';

class Fullpage extends Component{

	render() {
		const { 
			index, 
			title, 
			book, 
			part,
			summary,
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
						<h1>{index} {title}</h1>
						{book} {part} {pages}
					</div>
					<div className='material'>
						{documentToReactComponents(summary)}
						{videoId_YouTube}
						{audioDownloadUrl}
						{documentToReactComponents(questions)}
					</div>
					<div className='print'>
						{pageSourceUrl_Scribd}
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

