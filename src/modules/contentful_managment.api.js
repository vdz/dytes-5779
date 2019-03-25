/*
 * Contentful API
 */
const contentful = require('contentful-management');
const SPACE_ID = 'fafa9r2vgt87';
const DEFAULT_LOCALE = 'en-US';
const client = contentful.createClient({
    accessToken: 'CFPAT-bb5a484e8705d8d69ae5d940383fc32814b573b412d942c9cceac6c044e908b8'
});

exports.addEntry = (type, payload) => {
    if (!type || !payload) return;
    let fields = {};

    Object.keys(payload).forEach(name => {
        fields[name] = {
            [DEFAULT_LOCALE]: payload[name]
        }
    });

    return client.getSpace(SPACE_ID)
        .then((space) => {
            space.createEntry(type, {
               fields
            })
        }).then((entry) => {
            console.log(entry);
            return entry;
        })
        .catch(console.error);
};
