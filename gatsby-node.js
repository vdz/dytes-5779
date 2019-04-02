/* eslint-disable no-console */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const { getPages, getConfig } = require('./src/modules/contentful.api');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	const page_template = path.resolve('src/templates/fullpage.js');
	return getConfig().then(config => {
		const current_index = config.items[0].fields.currentPageIndex;

		return getPages().then(all_pages => {
				//_ create a lesson index page
				all_pages.items.forEach((item, index) => {
					const page = item.fields;
					//_ create the main page
					if (page.index === current_index) {
						createPage({
							path : '/',
							component : page_template,
							context : {
								page,
								current_index,
								next_index : all_pages.items[index+1] ? all_pages.items[index+1].fields.index : null,
								prev_index :  all_pages.items[index-1] ? all_pages.items[index-1].fields.index : null
							}
						})
					}

					//_ create individual lesson pages with /pages/<page_num> route
					createPage({
						path: `/page/${page.index}`,
						component: page_template,
						context: {
							page,
							current_index,
							next_index : all_pages.items[index+1] ? all_pages.items[index+1].fields.index : null,
							prev_index :  all_pages.items[index-1] ? all_pages.items[index-1].fields.index : null
						}
					})
				});
				return;
			})
		})
}