import axios from 'axios';

const NETLIFY_BUILD_HOOK_URL = 'https://api.netlify.com/build_hooks/5ca3143cb5f73b147fba1f92';

export function netlify_build() {
    return axios.post(NETLIFY_BUILD_HOOK_URL)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
}