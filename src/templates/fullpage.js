import React, { Component } from 'react';

import ScribdContainer from '../components/Scribd/ScribdContainer';
import PageHead from '../components/PageHead/PageHead';
import Summary from '../components/Summary/Summary';
import Questions from '../components/Questions/Questions';
import Video from '../components/Video/Video';
import UserRegistration from '../components/UserRegistration/UserRegistration';
import Feedback from '../components/Feedback/Feedback';
import Dedication from '../components/Dedication/Dedication';
import Related from '../components/Related/Related';

import '../styles/index.scss';

class Fullpage extends Component {

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
			questions,
			related,
			dedication
		} = this.props.pageContext.page;

		return (
			<section className='DYTES'>
				<header className='Header'>
					<Dedication content={dedication}/>
				</header>
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
						<Summary content={summary} />
						<Video title={title} content={videoId_YouTube} />
						<Questions content={questions} />
						<Feedback page={index} />
					</div>
					<div className='pdf'>
						<ScribdContainer title={title} url={pageSourceUrl_Scribd} />
					</div>
					<div className='related'>
						<Related content={related} />
						<UserRegistration />
						<div>
							נתרם ע״י ...
						</div>
					</div>
				</section>
				
			</section>
		);
	}
}

export default Fullpage;

