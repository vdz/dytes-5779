import React, {Component} from 'react';
import {Link} from "gatsby";

class Navigation extends Component {
    render() {
        return (
            <section className='Navigation'>
                <div className='links'>
                    <Link to='/about' className='about'>אודות</Link>
                    <a href='https://www.hasulam.co.il' className='hasulam'>אתר הסולם</a>
                    {
                        //<Link to='/dedicate' className='dedicate'>הקדשות</Link>
                        //<Link to='/donate' className='donate'>להיות שותף</Link>
                    }
                </div>
            </section>
        );
    }
}

export default Navigation;