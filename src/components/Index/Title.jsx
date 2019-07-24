import React from "react";

export const Title = (props) => {
    const { title, part } = props;
    return (
        <>
            <a name={`part-${part}-list`}></a>
            <h2 className={`Title`}>{title}</h2>
        </>
    )
}