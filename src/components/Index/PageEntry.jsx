import React from "react";

export const PageEntry = (props) => {
    const { index, title } = props.page;

    return (
        <p className={`PageEntry`}>
            <a href={`/page/${index}`} className={`page-link`}>
                ד. ${index} &mdash; ${title}
            </a>
        </p>
    )
}