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
						<section className='about-tes Content'>
							<a name='footer' />
							<h3 className='title'>איך לומדים את הדף היומי בתע״ס</h3>
							<div className='content'>
								<p>
									מדי יום יתווסף כאן שיעור יומי בתלמוד עשר הספירות, כולל השיעור המוקלט של הרב אדם סיני. בנוסף נוסיף כאן לרווחת הלומדים חומרי עזר לימודיים, שאלות חזרה, סיכום השיעור ועוד.
								</p>
								<p>
									נשמח לקבל שאלות מהלומדים כדי שמלמדים מבית מדרש הסולם יוכלו לענות עליהם בשיעור חזרה בשעות הערב (שעון ישראל). הקלטת שיעור החזרה תתפרסם כאן, כמו גם שאלות ותשובות נבחרות (ראה מבזקים).
								</p>
								<p>
									 נשמח לקבל שאלות ומשובים בטופס יצירת קשר למעלה. כמו כן עקבו אחר הפרסומים שלנו בטוויטר
									<a href='https://twitter.com/hasulam' title='hasulam'>hasulam</a>.
								</p>
							</div>
						</section>
						<section className='why-learn Content'>
							<h3 className='title'>חשיבות לימוד תלמוד עשר הספירות</h3>
						</section>
						<section className='about-hasulam Content'>
							<h3 className='title'>מי אנחנו</h3>
						</section>
					</div>
				</section>
				
			</section>
		);
	}
}

export default Fullpage;

