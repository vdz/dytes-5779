import React, { Component } from 'react';

import Navigation from '../components/Navigation/Navigation';
import ScribdContainer from '../components/Scribd/ScribdContainer';
import PageHead from '../components/PageHead/PageHead';
import Summary from '../components/Summary/Summary';
import Questions from '../components/Questions/Questions';
import Video from '../components/Video/Video';
import UserRegistration from '../components/UserRegistration/UserRegistration';
import Feedback from '../components/Feedback/Feedback';
import Dedication from '../components/Dedication/Dedication';
import Related from '../components/Related/Related';
import FlashList from '../components/Flash/FlashList';

import '../styles/index.scss';
import {Link} from "gatsby";

class Fullpage extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

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
		const {
			current_index,
			next_index,
			prev_index
		} = this.props.pageContext;

		return (
			<section className='DYTES'>
				<Link to='/' className='Logo'>
					הדף היומי בתע״ס
				</Link>
				<section className='Page'>
					<div className='page-toolbar'>
						<Navigation />
						<Dedication content={dedication}/>
						<PageHead current_index={current_index}
								  next_index={next_index}
								  prev_index={prev_index}
								  index={index}
								  title={title}
								  book={book}
								  part={part}
								  pages={pages}
								  subject={subject} />
					</div>
					<div className='page-material'>
						<Summary content={summary} />
						<Video title={title} content={videoId_YouTube} />
						<Questions content={questions} />
						<Feedback page={index} />
					</div>
					<div className='page-pdf'>
						<ScribdContainer title={title} url={pageSourceUrl_Scribd} />
					</div>
					<div className='page-related'>
						<Related content={related} />
						<UserRegistration />
						<FlashList index={index} />
					</div>
					<div className='page-footer'>
					</div>
				</section>
				
			</section>
		);
	}
}

export default Fullpage;

