import React from 'react'
import {  DISPLAY_MODES } from '../../modules/ui_display_modes'
import { addEntry } from '../../modules/contentful_managment.api'

const default_state = {
    page : 1,
    name : '',
    content : '',
    subject : '',
    body : '',
    contact : '',
    sys_message : '',
    sys_error : '',
    mode : DISPLAY_MODES.normal
};

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...default_state,
            page : props.page
        };
    }

    render() {
        const modes = Object.keys(DISPLAY_MODES);
        return (
            <section className={`Feedback Content ${modes[this.state.mode]}`}>
                <h3 className='title'>שאל אותנו שאלה</h3>
                <input type='text'
                       className='name'
                       onFocus={()=>{
                           this.focus()}
                       }
                       placeholder='מה שמך?'
                       value={this.state.name}
                       onChange={(e)=>{
                           this.setState({ name : e.target.value })
                       }} />
                <input type='text'
                       className='contact'
                       placeholder='דואל או טלפון ליצירת קשר'
                       value={this.state.contact}
                       onChange={(e)=>{
                           this.setState({ contact : e.target.value })
                       }} />
                <textarea className='body'
                          placeholder='הנושא שאני רוצה לדבר עליו...'
                          onChange={(e)=>{
                              const context = e.target.value ? e.target.value.split('\n') : [''];
                              this.setState({
                                  content : e.target.value,
                                  subject : context[0],
                                  body : context[1] ? '\n' + context.slice(1).join('\n') : ''
                              });
                          }}
                          value = {this.state.content} />
                <button type='button'
                        className='submit'
                        onClick={()=>{
                            this.submit()}
                        }>
                    שלח לנו משוב
                </button>
                <div className={`mode ${modes[this.state.mode]}`}
                     onClick={()=>{
                         this.setState({ mode : DISPLAY_MODES.active})
                     }}
                >
                    {this.state.sys_message}
                </div>
            </section>
        );
    }

    focus() {
        this.setState({
            mode : DISPLAY_MODES.active
        });
        return false;
    }

    reset() {
        this.setState({
            ...default_state,
            page : this.props.page
        });
    }

    submit() {
        if (!this.state.name) {
            this.setState({
                mode : DISPLAY_MODES.error,
                sys_message : 'מה שמך?'
            });
            return;
        }

        if (!this.state.contact) {
            this.setState({
                mode : DISPLAY_MODES.error,
                sys_message : 'מה כתובת דואר האלקטרוני שלך?'
            });
            return;
        }

        if (!this.state.subject) {
            this.setState({
                mode : DISPLAY_MODES.error,
                sys_message : 'מה נושא פנייתך?'
            });
            return;
        }

        this.setState({
            mode : DISPLAY_MODES.processing,
            sys_message : 'מקבלים משוב...'
        });
        addEntry('feedback', {
            page_index : this.state.page,
            sender : this.state.name,
            sender_contact : this.state.contact,
            received_on : new Date().toISOString(),
            title : this.state.subject,
            body : this.state.body
        }).then((res) => {
            this.reset();
            this.setState({
                mode : DISPLAY_MODES.done,
                sys_message : 'תודה. שמרתנו ...'
            });
            setTimeout(() => {
                this.setState({
                    mode : DISPLAY_MODES.normal,
                    message : ''
                })
            }, 2000);
        });
        
    }

}

export default Feedback;
