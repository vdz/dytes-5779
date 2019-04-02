import React, {Component} from 'react';
import { getFlashes  } from '../../modules/contentful.api';
import Flash from "./Flash";
import {DISPLAY_MODES} from "../../modules/ui_display_modes";

class FlashList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flashes : [],
            mode : DISPLAY_MODES.normal
        }
    }

    componentWillMount() {
        this.setState({ mode : DISPLAY_MODES.processing });

        getFlashes(this.props.index).then(flashes => {
            if (!flashes.items || !flashes.items.length) return null;
            this.setState({
                flashes: flashes.items,
                mode : DISPLAY_MODES.done
            });
        }).catch(err => {
            this.setState({ mode : DISPLAY_MODES.error });
        })
    }

    render() {
        const modes = Object.keys(DISPLAY_MODES);
        return (
            <section className={`FlashList ${modes[this.state.mode]}`}>
                {this.getFlashes()}
            </section>
        );
    }

    getFlashes() {
        let result = [];
        this.state.flashes.forEach(item => {
            result.push(<Flash key={`flash-${item.sys.id}`}{...item.fields} />)
        });
        return result
    }
}

export default FlashList;