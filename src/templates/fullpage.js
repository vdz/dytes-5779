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
							<div className='content'>
								<p>
									בשמחה והודיה גדולה אנו מתחילים ללמוד תלמוד עשר הספירות. ישנם מספר עקרונות חשובים היות ואנו עתידים ללמוד חוקים קבועים ובלתי משתנים המייצגים את מחשבת הבריאה.
								</p>
								<p>
									הנפש שלנו עובדת עפ"י חוקים שיכולים לתפוס בהם "אין זמן ומקום העדר ותמורה" פועל בהם. קבלה היא אמונה בחוקים מופשטים מעבר לזמן ומקום שיש להם השפעה גדולה על נפש האדם.
								</p>
								<p>
									עלינו להבין שיש כאן מתנה עצומה ולהתייחס אליה בהתאם – יראת קודש, אהבה, התמסרות...
								</p>
								<p>
									לבוא ללמוד עם הנפש כי זה חשוב לכלל ישראל ולא רק כי 'אני' רוצה ללמוד (זאת נאמר למרות שהלימוד מגדיל מאוד את הרוחניות שבנו)
									פשוט שיש כאן תפקיד לעם ישראל להרחיב את הפנימיות בעולם וכך להביא שלום לעולם עלינו להסתכל על הדברים מהיותנו שליחים למשימה חשובה זו.
									חייבו המקובלים לכל איש ללמוד חכמת הקבלה, ואע"פ שאינם מבינים, משפיע הלימוד על נשמתם. (אות קנ"ה בהקדמה)
								</p>
								<p>&mdash; הרב אדם סיני</p>
								<p>
									<a href='https://www.hasulam.co.il/hiyuv-limud/' title='בעניין חיוב לימוד פנימיות התורה'>עוד על חשיבות לימוד פנימיות התורה וחכמת הקבלה</a>
								</p>
							</div>
						</section>
						<section className='about-hasulam Content'>
							<h3 className='title'>מי אנחנו</h3>
							<div className='content'>
								<p>
									אנחנו בית מדרש ״הסולם״. ארגון שמטרתו לימוד והפצת תורתו של הרב יהודה הלוי לייב אשלג זצוק״ל, מחבר פירוש ״הסולם״ על הזוהר הקדוש.
								</p>
								<p>
									צוואתו של ״בעל הסולם״ מורה לנו להרחיב את מעגל הלומדים את חכמת הקבלה ופנימיות התורה, וזאת כאמצעי להגברת האהבה והאחדות בעם ישראל, וכמובן, אהבת ה׳.
								</p>
								<p>
									הרב הגאון אדם סיני שליט״א, ראש קהילת ״הסולם״, שלמד בבית מדרשו של האדמו״ר רב״ש (רבי ברוך שלום), בנו בכורו של מרן בעל הסולם, לקח על עצמו סידור הדף היומי בתלמוד עשר הספירות בשיעורים יומיים הנפרשים על פני שלוש שנים. הרב אדם סיני מביא הסבר עמוק ומדוייק לדברי בעל הסולם. מקרב את החוקים הרוחנים לעבודת הנפש הרלוונטית כאן והיום לכל הלומדים. תלמידי הרב, הלומדים בבית מדרשו מהווים מערך תמיכה לכל הרוצה ללמוד מתורתו של בעל הסולם הקדוש.
								</p>
								<p>
									ניתן ללמוד אודות בית מדרש הסולם באתר שלנו
									<a href='https://www.hasulam.co.il' title='אתר הסולם'>https://www.hasulam.co.il</a>.
									ובשלל ערוצים כמו
									<a href='https://www.facebook.com/hasulams/' title='הסולם - בית המדרש לפנימיות התורה וחכמת הקבלה'>הפייסבוק</a>,
									<a href='https://twitter.com/hasulam' title='בית מדרש הסולם'>הטוויטר</a>.
									:ניתן ליצור עמנו קשר במייל
									<a href='mailto:hasulam.site@gmail.com?subject=אתר הדף היומי בתע״ס' title=''>hasulam.site@gmail.com</a>.
									ובטלפון:
									<a href='tel:050-314-1111'>050-314-1111</a>
								</p>
							</div>
						</section>
					</div>
				</section>
				
			</section>
		);
	}
}

export default Fullpage;

