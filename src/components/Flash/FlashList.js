import React, {Component} from 'react';
import { getFlashes  } from '../../modules/contentful.api';
import Flash from "./Flash";
import {DISPLAY_MODES} from "../../modules/ui_display_modes";

class FlashList extends Component {
    constructor(props) {
        super(props);
        this.modes = Object.keys(DISPLAY_MODES);
        this.state = {
            flashes : [],
            mode : DISPLAY_MODES.normal
        }
    }

    componentWillMount() {
        this.setState({ mode : DISPLAY_MODES.processing });

        getFlashes(this.props.index).then(flashes => {
            this.setState({
                flashes: flashes.items,
                mode : DISPLAY_MODES.done
            });
            if (!flashes.items || !flashes.items.length) return null;
        }).catch(err => {
            this.setState({ mode : DISPLAY_MODES.error });
        })
    }

    render() {
        return (
            <section className={`FlashList Content ${this.modes[this.state.mode]}`}>
                <h3 className='title'>מבזקים</h3>
                <div className='content'>
                    {this.getLoader()}
                    {this.getFlashes()}
                </div>
            </section>
        );
    }

    getLoader() {
        const mode = this.modes[this.state.mode];
        switch (this.state.mode) {
            case DISPLAY_MODES.processing : return (
                <div className={`Loader ${mode}`}>מחפש מבזקים ...</div>
            )
            case DISPLAY_MODES.error : return (
                <div className='Loader ${mode}'>לא הצלחנו להביא עדכונים.</div>
            )
            case DISPLAY_MODES.done : if (!this.state.flashes.length) return 'אין מבזקים לפי שעה';
            case DISPLAY_MODES.normal : return null;
        }
    }

    getFlashes() {
        let result = [];
        this.state.flashes.forEach(item => {
            result.push(<Flash key={`flash-${item.sys.id}`}{...item.fields} />)
        });
        return result.length ? result : '...'
    }
}

export default FlashList;