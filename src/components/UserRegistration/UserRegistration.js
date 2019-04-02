import React from 'react'
import { addEntry } from '../../modules/contentful_managment.api'
import { DISPLAY_MODES } from '../../modules/ui_display_modes'

export default class UserRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.name_ref = React.createRef();
        this.email_ref = React.createRef();

        this.state = {
            mode : DISPLAY_MODES.normal,
            message : ''
        }
    }

    render() {
        return (
            <div className={`Registration Content mode-${this.state.mode}`}>
                <h3 className='title'>הרשמה לרשימת הדיוור</h3>
                {(this.state.mode !== DISPLAY_MODES.normal) && this.getMessage()}
                <label>שם מלא (פרטי ומשפחה)</label>
                <input type='text'
                       defaultValue=''
                       ref={this.name_ref} />
                <label>כתובת דואר אלקטרוני</label>
                <input type='email'
                       defaultValue=''
                       ref={this.email_ref} />
                <div className='footer'>
                    <button className='register'
                            onClick={() => {
                                this.register()
                            }}>
                        הרשמה
                    </button>
                </div>
            </div>
        )
    }
    getMessage() {
        return (
            <div className='message'>
                {this.state.message}
            </div>
        )
    }

    register() {
        this.setState({
            mode: DISPLAY_MODES.normal
        });

        if (!this.name_ref.current.value) {
            this.setState({
                mode : DISPLAY_MODES.error,
                message : 'אנא מלא את שמך המלא לצורך התקשרות'
            });
            return;
        }

        if (!this.email_ref.current.value) {
            this.setState({
                mode : DISPLAY_MODES.error,
                message : 'אנא מלא את כתובת הדואל האלקטרוני שלך לצורך התקשרות'
            });
            return;
        }

        // adding user info to the database
        this.setState({
            mode : DISPLAY_MODES.processing,
            message : 'שומר נתונים'
        });

        addEntry('user', {
            'name' : this.name_ref.current.value,
            'email' : this.email_ref.current.value
        }).then((res) => {
            this.setState({
                mode : DISPLAY_MODES.done,
                message : 'תודה. שמרתנו ...'
            });

            this.name_ref.current.value = '';
            this.email_ref.current.value = '';

            setTimeout(() => {
                this.setState({
                    mode : DISPLAY_MODES.normal,
                    message : ''
                })
            }, 3000);
        })

    }
}