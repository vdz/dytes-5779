import React from "react";

export const PageEntry = (props) => {
    const { index, title } = props.page;

    return (
        <p className={`PageEntry`}>
            <a href={`/page/${index}`} className={`page-link`}>
                <strong>שיעור {index}</strong> 
                &mdash; {title}
            </a>
        </p>
    )
}