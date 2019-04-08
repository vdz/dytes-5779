import React, {Component} from  'react';
import { netlify_build } from '../modules/site.utils';

class Reload extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{this.reloadSite()}}>בנה אתר</button>
            </div>
        );
    }
    reloadSite() {
        netlify_build().then(response => {
            if (response.status === 200) alert('בונה אתר מחדש, רענן בעוד דקה');
        })
    }
}

export default Reload;