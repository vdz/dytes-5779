import React from "react";

import "../styles/index.scss";

export default IndexPage = ({ pages_by_parts, titles }) => {

        let result;
        let curr_part;
        result.push(<TOC toc={titles} >);
        
        pages_by_parts.forEach((part, index) => {
            result.push(<Title title={titles[index]} />);
            part.forEach(page => {
                result.push(<PageEntry page={page} />)
            })
        });

}