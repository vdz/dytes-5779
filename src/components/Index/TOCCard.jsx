import React from "react";
import { Title } from "./Title";
import { PageEntry } from "./PageEntry";


export const TOCCard = (props) => {
    const {part, pages} = props;
    let result = [];
    result = pages.map((page) => {
        return <PageEntry key={`page-${page.index}`} page={page} />;
    });

    return (
        <section className={`TOCCard`}>
            <Title part={part} />
            {result}
            <a className={`back-to-top`} href="#toc">👆 לתוכן העניינים</a>
        </section>
    )
}