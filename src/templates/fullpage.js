import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import './fullpage.scss';

class Fullpage extends React.Component{

	render() {
		const { 
			index, 
			title
		} = this.props.pageContext.page;

		return (
			<section>
				<h1>{title}</h1>
			</section>
		);
	}
}

export default Fullpage;

