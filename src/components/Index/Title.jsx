import React from "react";
import { TES_PARTS } from "../../modules/tes.helper";

export const Title = (props) => {
    const { part } = props;
    return (
        <>
            <a name={`part-${part}-list`}></a>
            <h2 className={`IndexTitle`}>חלק {TES_PARTS[part]}</h2>
        </>
    )
}