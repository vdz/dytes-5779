/**
 * Feedback component - contact form with validation
 * Uses React for form state and submission
 */
import { useState } from 'react';
import { DISPLAY_MODES } from '../lib/ui-display-modes';
import { addEntry } from '../lib/contentful-management';

interface FeedbackProps {
    page: number;
}

const MODE_NAMES = ['normal', 'processing', 'error', 'done', 'active'];

const defaultState = {
    name: '',
    content: '',
    subject: '',
    body: '',
    contact: '',
    sysMessage: '',
};

export default function Feedback({ page }: FeedbackProps) {
    const [state, setState] = useState(defaultState);
    const [mode, setMode] = useState(DISPLAY_MODES.normal);

    const focus = () => {
        setMode(DISPLAY_MODES.active);
        return false;
    };

    const reset = () => {
        setState(defaultState);
    };

    const submit = async () => {
        if (!state.name) {
            setMode(DISPLAY_MODES.error);
            setState((s) => ({ ...s, sysMessage: 'מה שמך?' }));
            return;
        }

        if (!state.contact) {
            setMode(DISPLAY_MODES.error);
            setState((s) => ({ ...s, sysMessage: 'מה כתובת דואר האלקטרוני שלך?' }));
            return;
        }

        if (!state.subject) {
            setMode(DISPLAY_MODES.error);
            setState((s) => ({ ...s, sysMessage: 'מה נושא פנייתך?' }));
            return;
        }

        setMode(DISPLAY_MODES.processing);
        setState((s) => ({ ...s, sysMessage: 'מקבלים משוב...' }));

        try {
            await addEntry('feedback', {
                page_index: page,
                sender: state.name,
                sender_contact: state.contact,
                received_on: new Date().toISOString(),
                title: state.subject,
                body: state.body,
            });

            reset();
            setMode(DISPLAY_MODES.done);
            setState((s) => ({ ...s, sysMessage: 'תודה. שמרתנו ...' }));

            setTimeout(() => {
                setMode(DISPLAY_MODES.normal);
                setState((s) => ({ ...s, sysMessage: '' }));
            }, 2000);
        } catch (error) {
            setMode(DISPLAY_MODES.error);
            setState((s) => ({ ...s, sysMessage: 'שגיאה בשליחה' }));
        }
    };

    const handleContentChange = (value: string) => {
        const context = value ? value.split('\n') : [''];
        setState((s) => ({
            ...s,
            content: value,
            subject: context[0],
            body: context[1] ? '\n' + context.slice(1).join('\n') : '',
        }));
    };

    return (
        <section className={`Feedback Content ${MODE_NAMES[mode]}`}>
            <h3 className="title">שאל אותנו שאלה</h3>
            <p>יש לכם שאלה? בקשה? משוב? נשמח לשמוע מכם ולסייע לכם ללמוד.</p>
            <input
                type="text"
                className="name"
                onFocus={focus}
                placeholder="מה שמך?"
                value={state.name}
                onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            />
            <input
                type="text"
                className="contact"
                placeholder="דואל או טלפון ליצירת קשר"
                value={state.contact}
                onChange={(e) => setState((s) => ({ ...s, contact: e.target.value }))}
            />
            <textarea
                className="body"
                placeholder="הנושא שאני רוצה לדבר עליו..."
                value={state.content}
                onChange={(e) => handleContentChange(e.target.value)}
            />
            <button type="button" className="submit outline" onClick={submit}>
                שלח לנו משוב
            </button>
            <div
                className={`mode ${MODE_NAMES[mode]}`}
                onClick={() => setMode(DISPLAY_MODES.active)}
            >
                {state.sysMessage}
            </div>
        </section>
    );
}
