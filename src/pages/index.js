import React from "react";
import { TOC } from "../components/TOC/TOC";
import { Title } from "../components/Index/Title";
import { PageEntry } from "../components/Index/PageEntry";
import {Link} from "gatsby";

import "../styles/index.scss";

const IndexPage = (props) => {
    const { pages_by_parts, titles } = props.pageContext;
    let result = [];
    result.push(<TOC toc={titles} />);
    
    Object.keys(pages_by_parts).forEach((key) => {
        result.push(<Title key={`title-${key}`} part={key} title={titles[key]} />);
        pages_by_parts[key].forEach((page, index) => {
            result.push(<PageEntry key={`page-${page.index}`} page={page} />)
        });
    });

    return (
        <section className='DYTES Index'>
		    <header className='Header'>
                <Link to='/' className='Logo'>
						הדף היומי בתלמוד עשר הספירות
				</Link>                
                <h1>תוכן עניינים</h1>
                <h3>שיעורי הדף היומי בתע״ס</h3>
                <p className='intro'>
                    לפניכם רשימת שיעורים מסודרת לפי חלק תלמוד עשר הספירות, כפי שחילקם בע״ל הסולם זי״ע. הרשימה מתעדכנת  עם עליית שיעורים חדשים כל יום.
                </p>
            </header>
            {result}
        </section>
    )
}

export default IndexPage;