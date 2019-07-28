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
import Footer from '../components/Footer/Footer';

import '../styles/index.scss';
import {Link} from "gatsby";

class Fullpage extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {

		if (!this.props.pageContext.page) return null;

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
			summary_videoId_YouTube,
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
				<section className='Header'>
					<Link to='/' className='Logo'>
						הדף היומי בתלמוד עשר הספירות
					</Link>
				</section>

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
						<Video content={videoId_YouTube} />
						{ summary_videoId_YouTube  ?
								<Video title='סיכום מקוצר' content={summary_videoId_YouTube} />
								: null}
						<Questions content={questions} />
					</div>
					<div className='page-pdf'>
						<ScribdContainer title={title} url={pageSourceUrl_Scribd} />
						<Feedback page={index} />
					</div>
					<div className='page-related'>
						<Related content={related} />
						<UserRegistration />
						<FlashList index={index} />
					</div>
					<Footer />
				</section>
				
			</section>
		);
	}
}

export default Fullpage;

