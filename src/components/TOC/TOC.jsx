import React from "react";
import { TES_PARTS } from "../../modules/tes.helper";

export const TOC = (props) => {

    const titles = Object.keys(props.titles).forEach(part => {
        return (
            <li key={`toc-${part}`}>
                <a href={`#part-${part}-list`}>
                    {`חלק ${TES_PARTS[part]}`} 
                    <span>{props.titles[part]}</span>
                </a>
            </li>
        )
    });

    return (
        <ol className='TOC'>
            {titles}
        </ol>
    )
}