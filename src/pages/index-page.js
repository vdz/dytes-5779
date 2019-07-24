import React from "react";
import { TOC } from "../components/TOC/TOC";
import { TOCCard } from "../components/Index/TOCCard";
import { Link } from "gatsby";

import "../styles/index.scss";

const IndexPage = (props) => {
    const { pages_by_parts, titles } = props.pageContext;
    let result = [];

    Object.keys(pages_by_parts).forEach((key) => {
        result.push(<TOCCard key={`card-${key}`} part={key} pages={pages_by_parts[key]} />);
    });

    return (
        <section className='DYTES Index'>
            <header className='Header'>
                <a name='toc' />
                <Link to='/' className='Logo'>
                        הדף היומי בתלמוד עשר הספירות
                </Link>                
                <h1>תוכן עניינים</h1>
                <h3>שיעורי הדף היומי בתע״ס</h3>
                <p className='intro'>
                    לפניכם רשימת שיעורים מסודרת לפי חלק תלמוד עשר הספירות, כפי שחילקם בע״ל הסולם זי״ע. הרשימה מתעדכנת  עם עליית שיעורים חדשים כל יום.
                </p>
            </header>
            <TOC toc={titles} />
            <div className='toc-content'>
                {result}
            </div>
        </section>
    )
}

export default IndexPage;