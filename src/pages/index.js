import React from 'react'
import { Link } from 'gatsby'
import { addEntry } from '../modules/contentful_managment.api'

import SEO from '../_archive/seo'

import '../styles/index.scss';

const DISPLAY_MODES = {
    normal : 0,
    processing : 1,
    error : 2,
    done : 3
}

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.name_ref = React.createRef();
        this.email_ref = React.createRef();

        this.state = {
            mode : DISPLAY_MODES.normal,
            message : ''
        }
    }
    render() {
        return (
            <section className='DYTES'>
                <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
                <section className='Poster Front'>
                    <header className='header'>
                    </header>
                    <div className='postcard'>
                        <h1 className='title'>
                            הצטרפות ללימוד הדף היומי בתלמוד עשר הספירות
                        </h1>

                        <div className={`registration mode-${this.state.mode}`}>
                            {(this.state.mode !== DISPLAY_MODES.normal) && this.getMessage()}
                            <label>שם מלא (פרטי משפחה)</label>
                            <input type='text'
                                   defaultValue=''
                                   ref={this.name_ref} />
                            <label>כתובת דואר אלקטרוני</label>
                            <input type='email'
                                   defaultValue=''
                                   ref={this.email_ref} />
                            <div className='footer'>
                                <button className='register'
                                        onClick={() => {
                                            this.register()
                                        }}>
                                    הרשמה
                                </button>
                            </div>
                        </div>

                        <div className='invitation'>
                            <p>שלום חברים יקרים</p>
                            <p>
                                נשמתנו בנויה על פי חוקים רוחניים מדויקים. רבים מחפשים חוקים אלו בפסיכולוגיה ובתורות
                                מודעות שנולדות חדשים לבקרים.
                            </p>
                            <p>
                                חכמת הקבלה בכלל ו"תלמוד עשר הספירות" בפרט, מאפשרים לנו ללמוד חכמה עתיקה יסודית אמיתית
                                ברורה ויציבה שנתנה לנו כיהודים מפי הגבורה, והוסברה לנו ע"י רבותינו.
                            </p>
                            <p>
                                מה יש לנו לחפש בכרמים זרים, מה שיש לנו כאן בתורתנו מלא חופנים?!
                            </p>
                            <p>
                                "יותר ממה שהעגל רוצה לינוק הפרה רוצה להניק". רוצה מאתנו הבורא יתברך שנכשיר את עצמנו, ואת
                                האומה כולה לקבלת ההטבה השלמה. נפשנו ונפש כלל ישראל מתקנת בלימוד החכמה הנשגבה הזו.
                            </p>
                            <p>
                                ההתעסקות עם חוקים רוחניים עליונים אלו, מעוררים את נשמת היהודי השלמה של כל אחד מאתנו.
                                לעיתים אף מבלי לחוש נפשנו משתנה וההחלטות שלנו בחיים נלקחות ממקום אחר בנפש, ממקום שהתעורר
                                ונבנה דרך הלימוד הנשגב של חוקים עליונים אלו המתמצים בשם "חכמת הקבלה" "תלמוד עשר
                                הספירות".
                            </p>
                            <p>
                                אנו מבקשים את שותפותך בלימוד מסודר של "הדף היומי" ב"תלמוד עשר הספירות". ראה בכך התפתחות
                                נפשית ורוחנית שלך כאדם וכעזרה לגאולת כלל ישראל.
                            </p>
                            <p>
                                מלאו פרטי התקשרות בטופס שלפניכם ונזמין אתכם לאתר לימוד החדש שיתחיל אי״ה בא׳ ניסן תשע״ט.
                            </p>
                            <p>
                                לימוד פנימיות התורה מוטל על כולנו, ואנו בבית מדרש ״הסולם״ עושים מאמצים רבים להנגיש את
                                תלמוד עשר הספירות לקהל המעוניין להקדיש מזמנו בחכמת האמת - נשמת היהדות. באתר החדש נביא
                                לפני הלומדים כלים וחומרי עזר לימודיים, שאלות חזרה ומערך מלמדים שיענו על שאלותכם.
                            </p>
                            <p>
                                בידידות ואהבת אמת,<br/>
                                בית מדרש הסולם</p>
                        </div>

                        <footer className='copyright'>
                            שיעורים מאת הרב אדם סיני. הופק ע״י בית מדרש הסולם. כל הזכויות שמורות לרב אדם סיני.
                        </footer>
                    </div>
                    <footer className='footer'>
                    </footer>
                </section>
            </section>
        )
    }

    getMessage() {
        return (
            <div className='message'>
                {this.state.message}
            </div>
        )
    }

    register() {
        this.setState({
            mode: DISPLAY_MODES.normal
        });

        if (!this.name_ref.current.value) {
            this.setState({
                mode : DISPLAY_MODES.error,
                message : 'אנא מלא את שמך המלא לצורך התקשרות'
            });
            return;
        }

        if (!this.email_ref.current.value) {
            this.setState({
                mode : DISPLAY_MODES.error,
                message : 'אנא מלא את כתובת הדואל האלקטרוני שלך לצורך התקשרות'
            });
            return;
        }

        // ....
        this.setState({
            mode : DISPLAY_MODES.processing,
            message : 'שומר נתונים'
        });
        addEntry('user', {
            'name' : this.name_ref.current.value,
            'email' : this.email_ref.current.value
        }).then((res) => {
            console.log('❦',res);
            this.setState({
                mode : DISPLAY_MODES.done,
                message : 'תודה. שמרתנו ...'
            });

            this.name_ref.current.value = '';
            this.email_ref.current.value = '';

            setTimeout(() => {
                this.setState({
                    mode : DISPLAY_MODES.normal,
                    message : ''
                })
            }, 3000);
        })

    }
}

export default IndexPage;
