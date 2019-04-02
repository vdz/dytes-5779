/*
 * Contentful API
 */
const contentful = require('contentful');

const client = contentful.createClient({
    space : 'fafa9r2vgt87',
    accessToken: '0e8fd017630837c00a4ed589928229cef6ff74ca88d573b44e11390df8fce56f'
});

exports.getPages = () => {
    return client.getEntries({
        content_type : 'page',
        limit : '1000',
        order : 'fields.index'
    }).then(entries => {
        return entries
    }).catch(err => {
        console.error('⭑', err);
        return err
    })
};

exports.getConfig = () => {
    return client.getEntries({
        content_type : 'siteConfig'
    }).then(entries => {
        return entries
    }).catch(err => {
        console.error('⭑', err);
        return err
    })
};

exports.getFlashes = (page_index) => {
    return client.getEntries({
        content_type : 'flash',
        order : '-fields.order,-fields.publish_date'
    }).then(entries => {
        return entries
    }).catch(err => {
        console.error('⭑', err);
        return err
    })
}